"""Data coordinator for the Zambretti & Sager integration."""

from __future__ import annotations

from collections.abc import Callable
import datetime
import logging

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import UnitOfSpeed, UnitOfTemperature
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.event import async_track_state_change_event
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed
from homeassistant.util import dt as dt_util
from homeassistant.util.unit_conversion import SpeedConverter, TemperatureConverter

from .algorithms import linear_pressure_trend
from .const import (
    CONF_ELEVATION,
    CONF_FALLING_RAPID_THRESHOLD,
    CONF_FOG_HUMIDITY_THRESHOLD,
    CONF_FROST_TEMP_THRESHOLD,
    CONF_HUMIDITY_SENSOR,
    CONF_LATITUDE,
    CONF_LONGITUDE,
    CONF_PRESSURE_SENSOR,
    CONF_RAIN_SENSOR,
    CONF_STORM_PRECIP_THRESHOLD,
    CONF_TEMPERATURE_SENSOR,
    CONF_USE_SEA_LEVEL,
    CONF_WIND_SENSOR,
    CONF_WIND_SPEED_SENSOR,
    DEFAULT_FALLING_RAPID_THRESHOLD,
    DEFAULT_FOG_HUMIDITY_THRESHOLD,
    DEFAULT_FROST_TEMP_THRESHOLD,
    DEFAULT_STORM_PRECIP_THRESHOLD,
    DOMAIN,
    EVENT_FORECAST_CHANGED,
    EVENT_HORIZON_CHANGED,
    EVENT_PRESSURE_DROP,
    SEA_LEVEL_SENSOR_HINTS,
)
from .elevation import async_resolve_elevation
from .forecast_engine import ForecastData, ForecastEngine, WeatherObservations
from .history import (
    PressureHistoryBuffer,
    async_get_history_pressures_batch_from_recorder,
    async_warm_history_buffer,
)
from .ledger import ForecastLedger
from .pressure_util import (
    calculate_sea_level_pressure,
    parse_pressure_hpa,
)

_LOGGER = logging.getLogger(__name__)

UPDATE_INTERVAL = datetime.timedelta(minutes=5)
HISTORY_HOURS = (3, 6, 12, 24)
BUFFER_WARM_HOURS = 25
HISTORY_FALLBACK_INTERVAL = datetime.timedelta(minutes=15)
PRESSURE_WATCHER_MIN_INTERVAL = datetime.timedelta(seconds=60)

_INVALID_STATES = frozenset({"unknown", "unavailable", "none", ""})

type ZambrettiConfigEntry = ConfigEntry["ZambrettiSagerCoordinator"]

# Re-export for backward compatibility
__all__ = [
    "ForecastData",
    "ZambrettiConfigEntry",
    "ZambrettiSagerCoordinator",
    "async_create_coordinator",
]


class ZambrettiSagerCoordinator(DataUpdateCoordinator[ForecastData]):
    """Collects weather observations and coordinates forecast updates."""

    def __init__(self, hass: HomeAssistant, entry: ConfigEntry, altitude: float | None) -> None:
        try:
            super().__init__(
                hass,
                _LOGGER,
                config_entry=entry,
                name=DOMAIN,
                update_interval=UPDATE_INTERVAL,
            )
        except TypeError:
            super().__init__(
                hass,
                _LOGGER,
                name=DOMAIN,
                update_interval=UPDATE_INTERVAL,
            )
        self.entry = entry
        self.altitude = altitude
        self._sea_level_warning_logged = False
        self._unsub_state_listener = None
        self._last_pressure_id: str | None = None
        self._last_watcher_refresh: datetime.datetime | None = None

        # In-memory rolling history buffer
        self._history_buffer = PressureHistoryBuffer()
        self._history_warmed = False
        self._last_history_fallback: datetime.datetime | None = None

        # State tracking for clean, low-frequency logging
        self._last_logged_zambretti: str | None = None
        self._last_logged_trend: str | None = None
        self._first_forecast_logged = False

        # Forecast verification ledger (persistent, self-calibrating)
        self._ledger = ForecastLedger(hass, entry.entry_id)

        # Load sensor entity IDs and thresholds from config entry
        self._update_sensor_ids()

        # Register cleanup on unload
        entry.async_on_unload(self._stop_pressure_watcher)

    def _update_sensor_ids(self) -> None:
        """Update sensor entity IDs from config entry on reload."""
        entry = self.entry
        new_pressure_id = (
            entry.options.get(CONF_PRESSURE_SENSOR)
            if CONF_PRESSURE_SENSOR in entry.options
            else entry.data[CONF_PRESSURE_SENSOR]
        )
        if new_pressure_id != self._last_pressure_id:
            self._sea_level_warning_logged = False
            self._last_pressure_id = new_pressure_id
            self._history_buffer.clear()
            self._history_warmed = False
            self._last_history_fallback = None
            self._first_forecast_logged = False
            self._last_logged_zambretti = None
            self._last_logged_trend = None

        self.pressure_id = new_pressure_id
        self.wind_id = (
            entry.options.get(CONF_WIND_SENSOR)
            if CONF_WIND_SENSOR in entry.options
            else entry.data.get(CONF_WIND_SENSOR)
        )
        self.wind_speed_id = (
            entry.options.get(CONF_WIND_SPEED_SENSOR)
            if CONF_WIND_SPEED_SENSOR in entry.options
            else entry.data.get(CONF_WIND_SPEED_SENSOR)
        )
        self.temp_id = (
            entry.options.get(CONF_TEMPERATURE_SENSOR)
            if CONF_TEMPERATURE_SENSOR in entry.options
            else entry.data.get(CONF_TEMPERATURE_SENSOR)
        )
        self.humidity_id = (
            entry.options.get(CONF_HUMIDITY_SENSOR)
            if CONF_HUMIDITY_SENSOR in entry.options
            else entry.data.get(CONF_HUMIDITY_SENSOR)
        )
        self.use_sea_level = (
            entry.options.get(CONF_USE_SEA_LEVEL)
            if CONF_USE_SEA_LEVEL in entry.options
            else entry.data.get(CONF_USE_SEA_LEVEL, False)
        )
        self.latitude = (
            entry.options.get(CONF_LATITUDE)
            if CONF_LATITUDE in entry.options
            else entry.data.get(CONF_LATITUDE)
        )
        self.longitude = (
            entry.options.get(CONF_LONGITUDE)
            if CONF_LONGITUDE in entry.options
            else entry.data.get(CONF_LONGITUDE)
        )
        self.rain_id = (
            entry.options.get(CONF_RAIN_SENSOR)
            if CONF_RAIN_SENSOR in entry.options
            else entry.data.get(CONF_RAIN_SENSOR)
        )

        # Alert thresholds (options flow overrides the integration defaults)
        self.falling_rapid_threshold = float(
            entry.options.get(
                CONF_FALLING_RAPID_THRESHOLD,
                entry.data.get(CONF_FALLING_RAPID_THRESHOLD, DEFAULT_FALLING_RAPID_THRESHOLD),
            )
        )
        self.storm_precip_threshold = int(
            entry.options.get(
                CONF_STORM_PRECIP_THRESHOLD,
                entry.data.get(CONF_STORM_PRECIP_THRESHOLD, DEFAULT_STORM_PRECIP_THRESHOLD),
            )
        )
        self.frost_temp_threshold = float(
            entry.options.get(
                CONF_FROST_TEMP_THRESHOLD,
                entry.data.get(CONF_FROST_TEMP_THRESHOLD, DEFAULT_FROST_TEMP_THRESHOLD),
            )
        )
        self.fog_humidity_threshold = float(
            entry.options.get(
                CONF_FOG_HUMIDITY_THRESHOLD,
                entry.data.get(CONF_FOG_HUMIDITY_THRESHOLD, DEFAULT_FOG_HUMIDITY_THRESHOLD),
            )
        )

    def _start_pressure_watcher(self) -> None:
        """Subscribe to pressure sensor state changes for immediate updates."""
        if self._unsub_state_listener:
            return

        @callback
        def _on_pressure_state_change(event) -> None:
            new_state = event.data.get("new_state")
            if not new_state or new_state.state in _INVALID_STATES:
                return

            # Throttle pressure-triggered refreshes so a chatty sensor cannot
            # cause an update storm. The regular polling interval still runs.
            now = dt_util.utcnow()
            if (
                self._last_watcher_refresh is not None
                and now - self._last_watcher_refresh < PRESSURE_WATCHER_MIN_INTERVAL
            ):
                _LOGGER.debug(
                    "Skipping pressure-triggered refresh for %s (throttled)",
                    self.pressure_id,
                )
                return

            self._last_watcher_refresh = now
            _LOGGER.debug(
                "Pressure sensor %s became available (%s), triggering update",
                self.pressure_id,
                new_state.state,
            )
            self.async_request_refresh()

        self._unsub_state_listener = async_track_state_change_event(
            self.hass, [self.pressure_id], _on_pressure_state_change
        )

    def _stop_pressure_watcher(self) -> None:
        """Unsubscribe from pressure sensor state change events."""
        if self._unsub_state_listener:
            self._unsub_state_listener()
            self._unsub_state_listener = None

    def _is_nighttime(self) -> bool:
        """Determine if it's currently night (using sun.sun elevation)."""
        sun_state = self.hass.states.get("sun.sun")
        return bool(sun_state and sun_state.attributes.get("elevation", 90) < 0)

    async def _async_update_data(self) -> ForecastData:
        """Fetch current pressure, history, and wind data, then compute forecast."""
        pressure_state = self.hass.states.get(self.pressure_id)
        if not pressure_state or pressure_state.state in ("unknown", "unavailable"):
            _LOGGER.debug(
                "Pressure sensor %s not ready yet (state: %s), waiting for state change",
                self.pressure_id,
                pressure_state.state if pressure_state else "not found",
            )
            self._start_pressure_watcher()
            return ForecastData(available=False)

        self._stop_pressure_watcher()

        try:
            p_now_raw = parse_pressure_hpa(pressure_state)
        except (TypeError, ValueError) as err:
            _LOGGER.error("Invalid pressure value for %s: %s", self.pressure_id, err)
            try:
                raise UpdateFailed(
                    f"Invalid pressure state for {self.pressure_id}",
                    translation_domain=DOMAIN,
                    translation_key="invalid_pressure",
                    translation_placeholders={"entity_id": self.pressure_id},
                ) from err
            except TypeError:
                raise UpdateFailed(f"Invalid pressure state for {self.pressure_id}") from err

        # Precompute temperature and sea level classification once per update cycle
        temperature = self._get_temperature()
        is_sea_level = self._is_likely_sea_level_sensor()

        # Apply sea-level correction if enabled
        p_now = self._correct_pressure(
            p_now_raw, temperature=temperature, is_sea_level=is_sea_level
        )
        now_dt = dt_util.utcnow()

        corrector = self._create_pressure_corrector(
            temperature=temperature, is_sea_level=is_sea_level
        )

        # Warm history buffer on first run with a single recorder query
        if not self._history_warmed:
            await async_warm_history_buffer(
                self.hass,
                self.pressure_id,
                self._history_buffer,
                hours=BUFFER_WARM_HOURS,
                pressure_corrector=corrector,
            )
            self._history_warmed = True
            _LOGGER.info(
                "History buffer initialized with %d points from recorder for %s",
                len(self._history_buffer),
                self.pressure_id,
            )

        # Append current reading and prune buffer
        self._history_buffer.append(now_dt, p_now)

        history_pressures = await self._fetch_history_pressures(
            now_dt, pressure_corrector=corrector
        )
        wind = self._get_wind_direction()
        wind_speed = self._get_wind_speed()
        humidity = self._get_humidity()
        is_night = self._is_nighttime()
        temperature_available = self._is_temperature_available()
        rain = self._get_rain()
        pressure_age_seconds = self._pressure_age_seconds(pressure_state, now_dt)

        # Historical pressures (already sea-level corrected via buffer or batch query).
        # Only the 3h point is allowed to fall back to the current reading: using it
        # for 6/12/24h would fabricate a flat trend that never existed.
        p_3h = history_pressures.get(3)
        if p_3h is None:
            p_3h = p_now
        p_6h = history_pressures.get(6)
        p_12h = history_pressures.get(12)
        p_24h = history_pressures.get(24)
        p_1_5h = self._history_buffer.get_pressure_at(now_dt - datetime.timedelta(minutes=90))

        # Least-squares regression over the recent buffer, used as a third model
        # and to smooth the extrapolation rate.
        trend_rate_3h, trend_r2 = linear_pressure_trend(
            self._history_buffer.entries, now_dt, hours=6
        )

        await self._ledger.async_load()

        observations = WeatherObservations(
            p_now=p_now,
            p_3h=p_3h,
            p_6h=p_6h,
            p_12h=p_12h,
            p_24h=p_24h,
            p_1_5h=p_1_5h,
            raw_pressure=p_now_raw,
            wind_degrees=wind,
            wind_speed=wind_speed,
            humidity=humidity,
            temperature=temperature,
            temperature_available=temperature_available,
            altitude=self.altitude,
            latitude=self.latitude,
            is_night=is_night,
            rain=rain,
            pressure_age_seconds=pressure_age_seconds,
            trend_rate_3h=trend_rate_3h,
            trend_r2=trend_r2,
            calibration_damping=self._ledger.damping,
            timestamp=now_dt,
        )

        forecast_data = ForecastEngine.compute(observations)

        # Verify previously issued forecasts, then record this one.
        await self._ledger.async_verify(
            forecast_data.p_now,
            forecast_data.zambretti_state,
            now_dt,
            rain=rain,
        )
        await self._ledger.async_record(forecast_data, now_dt, rain=rain)
        forecast_data.forecast_accuracy = self._ledger.accuracy
        forecast_data.last_forecast_hit = self._ledger.last_hit
        forecast_data.calibration_samples = self._ledger.calibration_samples
        forecast_data.adaptive_damping = self._ledger.damping

        self._fire_events(forecast_data)

        # Log on first startup, or only when forecast state or trend direction changes
        if not self._first_forecast_logged:
            _LOGGER.info(
                "Initial forecast established for %s: %s | Trend: %s (ΔP: %+.1f hPa/3h) | P: %.1f hPa | Rain: %d%%",
                self.entry.title,
                forecast_data.zambretti_state,
                forecast_data.trend_label,
                forecast_data.delta_3h or 0.0,
                forecast_data.p_now or 0.0,
                forecast_data.precip_probability or 0,
            )
            self._first_forecast_logged = True
            self._last_logged_zambretti = forecast_data.zambretti_state
            self._last_logged_trend = forecast_data.trend_label
        elif (
            forecast_data.zambretti_state != self._last_logged_zambretti
            or forecast_data.trend_label != self._last_logged_trend
        ):
            _LOGGER.info(
                "Forecast changed for %s: %s (was: %s) | Trend: %s (ΔP: %+.1f hPa/3h) | P: %.1f hPa | Rain: %d%%",
                self.entry.title,
                forecast_data.zambretti_state,
                self._last_logged_zambretti or "none",
                forecast_data.trend_label,
                forecast_data.delta_3h or 0.0,
                forecast_data.p_now or 0.0,
                forecast_data.precip_probability or 0,
            )
            self._last_logged_zambretti = forecast_data.zambretti_state
            self._last_logged_trend = forecast_data.trend_label

        _LOGGER.debug(
            "Coordinator update: p_now=%.1f delta_3h=%.2f zambretti=%s sager=%s consensus=%s confidence=%s night=%s (buffer: %d pts)",
            forecast_data.p_now or 0.0,
            forecast_data.delta_3h or 0.0,
            forecast_data.zambretti_state,
            forecast_data.sager_state,
            forecast_data.consensus_state,
            forecast_data.confidence,
            forecast_data.is_night,
            len(self._history_buffer),
        )

        return forecast_data

    def _fire_events(self, forecast: ForecastData) -> None:
        """Fire bus events when the forecast, horizons, or pressure alert change."""
        previous = getattr(self, "data", None)
        if previous is None or not getattr(previous, "available", False):
            return

        entry_id = getattr(self.entry, "entry_id", None)

        if forecast.zambretti_state != previous.zambretti_state:
            self.hass.bus.async_fire(
                EVENT_FORECAST_CHANGED,
                {
                    "entry_id": entry_id,
                    "old_state": previous.zambretti_state,
                    "new_state": forecast.zambretti_state,
                    "trend_label": forecast.trend_label,
                    "confidence": forecast.confidence,
                },
            )

        horizon_changes = {
            horizon: {"old": getattr(previous, key), "new": getattr(forecast, key)}
            for horizon, key in (
                ("6h", "zambretti_6h"),
                ("12h", "zambretti_12h"),
                ("24h", "zambretti_24h"),
            )
            if getattr(previous, key) != getattr(forecast, key)
        }
        if horizon_changes:
            self.hass.bus.async_fire(
                EVENT_HORIZON_CHANGED,
                {"entry_id": entry_id, "changes": horizon_changes},
            )

        if (
            forecast.delta_3h is not None
            and forecast.delta_3h <= -self.falling_rapid_threshold
            and (previous.delta_3h is None or previous.delta_3h > -self.falling_rapid_threshold)
        ):
            self.hass.bus.async_fire(
                EVENT_PRESSURE_DROP,
                {
                    "entry_id": entry_id,
                    "pressure": forecast.p_now,
                    "delta_3h": forecast.delta_3h,
                    "threshold": self.falling_rapid_threshold,
                },
            )

    def _get_temperature(self) -> float:
        """Return current temperature in °C using TemperatureConverter or fallback."""
        if not self.temp_id:
            return 15.0
        state = self.hass.states.get(self.temp_id)
        if not state or state.state in ("unknown", "unavailable"):
            return 15.0
        try:
            raw_val = float(state.state)
        except (ValueError, TypeError):
            return 15.0

        unit = state.attributes.get("unit_of_measurement")
        if unit and isinstance(unit, str):
            try:
                return float(TemperatureConverter.convert(raw_val, unit, UnitOfTemperature.CELSIUS))
            except Exception:
                unit_clean = unit.upper().replace("°", "").strip()
                if unit_clean == "F":
                    return (raw_val - 32.0) * 5.0 / 9.0
                if unit_clean == "K":
                    return raw_val - 273.15

        return raw_val

    def _is_temperature_available(self) -> bool:
        """Return True when a configured temperature sensor reports a numeric value."""
        if not self.temp_id:
            return False
        state = self.hass.states.get(self.temp_id)
        if not state or state.state in _INVALID_STATES:
            return False
        try:
            float(state.state)
        except (TypeError, ValueError):
            return False
        return True

    def _get_rain(self) -> bool | None:
        """Return True when the optional rain sensor reports precipitation."""
        if not self.rain_id:
            return None
        state = self.hass.states.get(self.rain_id)
        if not state or state.state in _INVALID_STATES:
            return None

        raw = str(state.state).strip().lower()
        if raw in ("on", "true", "wet", "rain", "raining"):
            return True
        if raw in ("off", "false", "dry"):
            return False

        try:
            return float(raw) > 0
        except (TypeError, ValueError):
            return None

    @staticmethod
    def _pressure_age_seconds(pressure_state, now: datetime.datetime) -> float | None:
        """Return the age of the current pressure reading in seconds."""
        last_updated = getattr(pressure_state, "last_updated", None)
        if not isinstance(last_updated, datetime.datetime):
            return None
        if last_updated.tzinfo is None:
            last_updated = last_updated.replace(tzinfo=datetime.UTC)
        try:
            return max(0.0, (now - last_updated).total_seconds())
        except TypeError:
            return None

    def _is_likely_sea_level_sensor(self) -> bool:
        """Check if the pressure sensor already reports sea-level pressure (MSLP/QNH)."""
        state = self.hass.states.get(self.pressure_id)
        if not state:
            return False
        entity_id = self.pressure_id.lower()
        if any(hint in entity_id for hint in SEA_LEVEL_SENSOR_HINTS):
            return True
        for key in ("pressure_type", "sensor_type", "type"):
            value = str(state.attributes.get(key, "")).lower()
            if any(word in value for word in ("sea", "relative", "mslp")):
                return True
        return False

    def _create_pressure_corrector(
        self,
        temperature: float | None = None,
        is_sea_level: bool | None = None,
    ) -> Callable[[float], float]:
        """Return a pressure corrector closure with precomputed temperature and sea-level detection."""
        if not self.use_sea_level or self.altitude is None:
            return lambda raw_p: raw_p

        is_sea = self._is_likely_sea_level_sensor() if is_sea_level is None else is_sea_level
        if is_sea:
            if not self._sea_level_warning_logged:
                _LOGGER.warning(
                    "Pressure sensor %s appears to report sea level pressure; "
                    "skipping altitude correction to avoid double conversion",
                    self.pressure_id,
                )
                self._sea_level_warning_logged = True
            return lambda raw_p: raw_p

        temp = self._get_temperature() if temperature is None else temperature
        alt = self.altitude
        return lambda raw_p: calculate_sea_level_pressure(raw_p, temp, alt)

    def _correct_pressure(
        self,
        raw_pressure: float,
        temperature: float | None = None,
        is_sea_level: bool | None = None,
    ) -> float:
        """Apply sea-level pressure correction if enabled and sensor is absolute."""
        if not self.use_sea_level or self.altitude is None:
            return raw_pressure
        is_sea = self._is_likely_sea_level_sensor() if is_sea_level is None else is_sea_level
        if is_sea:
            if not self._sea_level_warning_logged:
                _LOGGER.warning(
                    "Pressure sensor %s appears to report sea level pressure; "
                    "skipping altitude correction to avoid double conversion",
                    self.pressure_id,
                )
                self._sea_level_warning_logged = True
            return raw_pressure
        temp = self._get_temperature() if temperature is None else temperature
        return calculate_sea_level_pressure(raw_pressure, temp, self.altitude)

    def _get_wind_direction(self) -> float | None:
        """Return wind direction in degrees or None."""
        if not self.wind_id:
            return None
        state = self.hass.states.get(self.wind_id)
        if not state or state.state in ("unknown", "unavailable"):
            return None

        # Check numeric state first
        try:
            return float(state.state)
        except (ValueError, TypeError):
            pass

        # Try attributes for numeric bearing/direction
        for attr in ("wind_bearing", "wind_degrees", "bearing", "degrees"):
            val = state.attributes.get(attr)
            if val is not None:
                try:
                    return float(val)
                except (ValueError, TypeError):
                    pass

        # Try converting compass string state (e.g. "N", "NE", "SW", etc.)
        compass_map = {
            "N": 0.0,
            "NNE": 22.5,
            "NE": 45.0,
            "ENE": 67.5,
            "E": 90.0,
            "ESE": 112.5,
            "SE": 135.0,
            "SSE": 157.5,
            "S": 180.0,
            "SSW": 202.5,
            "SW": 225.0,
            "WSW": 247.5,
            "W": 270.0,
            "WNW": 292.5,
            "NW": 315.0,
            "NNW": 337.5,
        }
        state_str = str(state.state).upper().strip()
        return compass_map.get(state_str)

    def _get_wind_speed(self) -> float | None:
        """Return wind speed in m/s using SpeedConverter or fallback."""
        sensor_id = self.wind_speed_id or self.wind_id
        if not sensor_id:
            return None
        state = self.hass.states.get(sensor_id)
        if not state or state.state in ("unknown", "unavailable"):
            return None

        raw_val: float | None = None
        try:
            raw_val = float(state.state)
        except (ValueError, TypeError):
            for attr in ("wind_speed", "speed"):
                val = state.attributes.get(attr)
                if val is not None:
                    try:
                        raw_val = float(val)
                        break
                    except (ValueError, TypeError):
                        pass

        if raw_val is None:
            return None

        unit = state.attributes.get("unit_of_measurement")
        if unit and isinstance(unit, str):
            try:
                return float(SpeedConverter.convert(raw_val, unit, UnitOfSpeed.METERS_PER_SECOND))
            except Exception:
                unit_clean = unit.lower().strip()
                if unit_clean in ("km/h", "kmh"):
                    return raw_val / 3.6
                if unit_clean in ("mph", "mi/h"):
                    return raw_val * 0.44704
                if unit_clean in ("kn", "kts", "knot", "knots"):
                    return raw_val * 0.514444
                if unit_clean in ("ft/s", "fps"):
                    return raw_val * 0.3048

        return raw_val

    def _get_humidity(self) -> float | None:
        """Return relative humidity in percent or None."""
        if not self.humidity_id:
            return None
        state = self.hass.states.get(self.humidity_id)
        if not state or state.state in ("unknown", "unavailable"):
            return None
        try:
            return float(state.state)
        except (ValueError, TypeError):
            return None

    async def _fetch_history_pressures(
        self,
        now: datetime.datetime | None = None,
        pressure_corrector: Callable[[float], float] | None = None,
    ) -> dict[int, float | None]:
        """Fetch pressure at 3, 6, 12, and 24 hours ago (buffer first, recorder fallback)."""
        if now is None:
            now = dt_util.utcnow()
        results: dict[int, float | None] = {}
        missing_hours: list[int] = []

        for hours in HISTORY_HOURS:
            p = self._history_buffer.get_pressure_at(now - datetime.timedelta(hours=hours))
            results[hours] = p
            if p is None:
                missing_hours.append(hours)

        # Fall back to the recorder whenever the buffer has holes (for example
        # after a Home Assistant restart), but throttle the queries so a sparse
        # sensor cannot hit the database on every five-minute poll.
        if missing_hours and self.pressure_id:
            last_fallback = self._last_history_fallback
            if last_fallback is None or now - last_fallback >= HISTORY_FALLBACK_INTERVAL:
                batch_results = await async_get_history_pressures_batch_from_recorder(
                    self.hass,
                    self.pressure_id,
                    missing_hours,
                    now,
                    pressure_corrector=pressure_corrector or self._create_pressure_corrector(),
                    buffer=self._history_buffer,
                )
                for h, p in batch_results.items():
                    if p is not None:
                        results[h] = p
                self._last_history_fallback = now
                self._history_warmed = True

        return results


async def async_create_coordinator(
    hass: HomeAssistant, entry: ZambrettiConfigEntry
) -> ZambrettiSagerCoordinator:
    """Create coordinator and resolve altitude using Local-First strategy."""
    latitude = entry.options.get(CONF_LATITUDE, entry.data.get(CONF_LATITUDE))
    longitude = entry.options.get(CONF_LONGITUDE, entry.data.get(CONF_LONGITUDE))
    configured_elevation = entry.options.get(CONF_ELEVATION, entry.data.get(CONF_ELEVATION))

    altitude = await async_resolve_elevation(
        hass,
        latitude=latitude,
        longitude=longitude,
        configured_elevation=configured_elevation,
        fallback_elevation=getattr(getattr(hass, "config", None), "elevation", None),
    )

    if altitude is not None and entry.data.get(CONF_ELEVATION) != altitude:
        hass.config_entries.async_update_entry(entry, data={**entry.data, CONF_ELEVATION: altitude})

    coordinator = ZambrettiSagerCoordinator(hass, entry, altitude)
    await coordinator.async_config_entry_first_refresh()
    return coordinator
