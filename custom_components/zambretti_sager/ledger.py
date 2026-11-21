"""Forecast verification ledger with persistence and adaptive calibration."""

from __future__ import annotations

from dataclasses import asdict, dataclass, fields
import datetime
import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .algorithms import DAMPING_EXPONENT, zambretti_severity
from .const import DOMAIN
from .forecast_engine import ForecastData

_LOGGER = logging.getLogger(__name__)

STORAGE_VERSION = 1
RECORD_INTERVAL = datetime.timedelta(hours=6)
VERIFY_AFTER = datetime.timedelta(hours=24)
PRESSURE_HIT_TOLERANCE = 4.0
CALIBRATION_PRESSURE_TOLERANCE = 2.0
INTERMEDIATE_HIT_TOLERANCE = 2.5
MAX_VOLATILITY_TOLERANCE = 6.5
DIRECTIONAL_HIT_MAX_ERROR = 8.0
MIN_CALIBRATION_DELTA = 1.0
MAX_RECORDS = 200
MAX_ACCURACY_ENTRIES = 60
CALIBRATION_MIN_SAMPLES = 3
DAMPING_MIN = 0.45
DAMPING_MAX = 0.85
DAMPING_STEP = 0.02
WIND_FACTOR_DEFAULT = 1.0
WIND_FACTOR_MIN = 0.25
WIND_FACTOR_MAX = 1.75
WIND_FACTOR_STEP = 0.05
SEASONAL_FACTOR_DEFAULT = 1.0
SEASONAL_FACTOR_MIN = 0.25
SEASONAL_FACTOR_MAX = 1.75
SEASONAL_FACTOR_STEP = 0.05
PRECIP_BIAS_DEFAULT = 0.0
PRECIP_BIAS_MIN = -15.0
PRECIP_BIAS_MAX = 15.0
PRECIP_BIAS_STEP = 2.0
PRESSURE_BIAS_DEFAULT = 0.0
PRESSURE_BIAS_MIN = -6.0
PRESSURE_BIAS_MAX = 6.0
PRESSURE_BIAS_STEP = 0.5


def _clamp(value: float, low: float, high: float, precision: int = 3) -> float:
    """Clamp ``value`` to ``[low, high]`` and round to ``precision`` decimals."""
    return round(max(low, min(high, value)), precision)


@dataclass
class LedgerRecord:
    """One issued forecast awaiting (or holding) verification."""

    issued_at: str
    zambretti_state: str | None
    sager_state: str | None
    consensus_state: str | None
    precip_probability: int | None
    p_now: float
    predicted_p_24h: float | None
    predicted_delta_24h: float | None
    delta_3h: float | None
    temperature: float | None = None
    rain: bool | None = None
    rain_observed: bool | None = None
    wind_adjustment_sign: int = 0
    season_sign: int = 0
    verified: bool = False
    hit: bool | None = None
    pressure_error: float | None = None
    actual_state: str | None = None
    predicted_p_6h: float | None = None
    predicted_p_12h: float | None = None
    zambretti_24h: str | None = None
    p_6h_observed: float | None = None
    p_12h_observed: float | None = None


class ForecastLedger:
    """Persistent 24-hour forecast verification ledger.

    Records a forecast at most once every six hours and verifies it 24 hours
    later against the observed pressure and, optionally, an observed rain window.
    Verified records also tune the extrapolation damping exponent, wind and
    seasonal adjustment multipliers, precipitation probability bias, and
    24-hour pressure bias.
    """

    def __init__(
        self,
        hass: HomeAssistant,
        entry_id: str,
        store: Store | None = None,
    ) -> None:
        """Initialize the ledger, optionally with an injected store."""
        self._store = store or Store(hass, STORAGE_VERSION, f"{DOMAIN}.{entry_id}.ledger")
        self._records: list[LedgerRecord] = []
        self._damping = DAMPING_EXPONENT
        self._wind_factor = WIND_FACTOR_DEFAULT
        self._seasonal_factor = SEASONAL_FACTOR_DEFAULT
        self._precip_bias = PRECIP_BIAS_DEFAULT
        self._pressure_bias = PRESSURE_BIAS_DEFAULT
        self._loaded = False
        self._dirty = False

    # ── Persistence ──────────────────────────────────────────────────────

    @staticmethod
    def _load_clamped(
        stored: dict[str, Any],
        key: str,
        default: float,
        low: float,
        high: float,
        precision: int = 3,
    ) -> float:
        """Read and clamp a persisted numeric calibration factor."""
        try:
            return _clamp(float(stored.get(key, default)), low, high, precision)
        except (TypeError, ValueError):
            return default

    async def async_load(self) -> None:
        """Load ledger records from storage once."""
        if self._loaded:
            return
        self._loaded = True
        try:
            stored = await self._store.async_load()
        except Exception as err:  # noqa: BLE001 - storage is optional
            _LOGGER.debug("Could not load forecast ledger: %s", err)
            return

        if not isinstance(stored, dict):
            return

        valid_fields = {field.name for field in fields(LedgerRecord)}
        for raw in stored.get("records", []):
            if not isinstance(raw, dict):
                continue
            try:
                self._records.append(
                    LedgerRecord(**{k: v for k, v in raw.items() if k in valid_fields})
                )
            except TypeError:
                continue

        self._damping = self._load_clamped(
            stored, "damping", DAMPING_EXPONENT, DAMPING_MIN, DAMPING_MAX
        )
        self._wind_factor = self._load_clamped(
            stored, "wind_factor", WIND_FACTOR_DEFAULT, WIND_FACTOR_MIN, WIND_FACTOR_MAX
        )
        self._seasonal_factor = self._load_clamped(
            stored,
            "seasonal_factor",
            SEASONAL_FACTOR_DEFAULT,
            SEASONAL_FACTOR_MIN,
            SEASONAL_FACTOR_MAX,
        )
        self._precip_bias = self._load_clamped(
            stored, "precip_bias", PRECIP_BIAS_DEFAULT, PRECIP_BIAS_MIN, PRECIP_BIAS_MAX, 1
        )
        self._pressure_bias = self._load_clamped(
            stored,
            "pressure_bias",
            PRESSURE_BIAS_DEFAULT,
            PRESSURE_BIAS_MIN,
            PRESSURE_BIAS_MAX,
            2,
        )

        # Retroactively re-score persisted verified records under current criteria.
        for record in self._records:
            if (
                not record.verified
                or record.predicted_p_24h is None
                or record.pressure_error is None
            ):
                continue
            actual_p = record.predicted_p_24h + record.pressure_error
            new_hit = self._evaluate_record_hit(
                record,
                actual_p,
                record.actual_state,
                record.rain_observed,
                record.pressure_error,
            )
            if new_hit != record.hit:
                record.hit = new_hit
                self._dirty = True

    async def async_save(self) -> None:
        """Persist the ledger if it changed."""
        if not self._dirty:
            return
        payload: dict[str, Any] = {
            "damping": self._damping,
            "wind_factor": self._wind_factor,
            "seasonal_factor": self._seasonal_factor,
            "precip_bias": self._precip_bias,
            "pressure_bias": self._pressure_bias,
            "records": [asdict(record) for record in self._records],
        }
        try:
            await self._store.async_save(payload)
            self._dirty = False
        except Exception as err:  # noqa: BLE001 - storage is optional
            _LOGGER.debug("Could not persist forecast ledger: %s", err)

    async def async_reset(self) -> None:
        """Clear all verification records and restore default calibration factors."""
        await self.async_load()
        self._records.clear()
        self._damping = DAMPING_EXPONENT
        self._wind_factor = WIND_FACTOR_DEFAULT
        self._seasonal_factor = SEASONAL_FACTOR_DEFAULT
        self._precip_bias = PRECIP_BIAS_DEFAULT
        self._pressure_bias = PRESSURE_BIAS_DEFAULT
        self._dirty = True
        await self.async_save()

    # ── Recording and verification ───────────────────────────────────────

    async def async_record(
        self,
        forecast: ForecastData,
        now: datetime.datetime,
        rain: bool | None = None,
        wind_adjustment_sign: int = 0,
        season_sign: int = 0,
    ) -> None:
        """Record the current forecast when the six-hour sampling window allows."""
        await self.async_load()
        if forecast.p_now is None:
            return

        last = self._records[-1] if self._records else None
        if last is not None:
            last_issued = self._parse_time(last.issued_at)
            if last_issued is not None and now - last_issued < RECORD_INTERVAL:
                return

        predicted = forecast.predicted_p_24h
        record = LedgerRecord(
            issued_at=now.isoformat(),
            zambretti_state=forecast.zambretti_state,
            sager_state=forecast.sager_state,
            consensus_state=forecast.consensus_state,
            precip_probability=forecast.precip_probability,
            p_now=forecast.p_now,
            predicted_p_24h=predicted,
            predicted_delta_24h=(
                round(predicted - forecast.p_now, 2) if predicted is not None else None
            ),
            delta_3h=forecast.delta_3h,
            temperature=forecast.temperature if forecast.temperature_available else None,
            rain=rain,
            wind_adjustment_sign=wind_adjustment_sign,
            season_sign=season_sign,
            predicted_p_6h=forecast.predicted_p_6h,
            predicted_p_12h=forecast.predicted_p_12h,
            zambretti_24h=forecast.zambretti_24h,
        )
        self._records.append(record)
        if len(self._records) > MAX_RECORDS:
            del self._records[: len(self._records) - MAX_RECORDS]
        self._dirty = True
        await self.async_save()

    async def async_observe_pressure(
        self,
        actual_pressure: float | None,
        now: datetime.datetime,
    ) -> None:
        """Record intermediate 6h and 12h observed pressures across open windows."""
        await self.async_load()
        if actual_pressure is None:
            return

        changed = False
        for record in self._records:
            if record.verified:
                continue
            issued = self._parse_time(record.issued_at)
            if issued is None or now < issued:
                continue
            elapsed_hours = (now - issued).total_seconds() / 3600.0
            if 5.0 <= elapsed_hours <= 7.5 and record.p_6h_observed is None:
                record.p_6h_observed = round(actual_pressure, 1)
                changed = True
            if 11.0 <= elapsed_hours <= 13.5 and record.p_12h_observed is None:
                record.p_12h_observed = round(actual_pressure, 1)
                changed = True

        if changed:
            self._dirty = True

    async def async_observe_rain(
        self,
        rain: bool | None,
        now: datetime.datetime,
    ) -> None:
        """Record rain observations across all open 24-hour forecast windows."""
        await self.async_load()
        if rain is None:
            return

        changed = False
        newly_wet = False
        for record in self._records:
            if record.verified:
                continue
            issued = self._parse_time(record.issued_at)
            if issued is None or now < issued or now - issued >= VERIFY_AFTER:
                continue
            if rain is True and record.rain_observed is not True:
                record.rain_observed = True
                changed = True
                newly_wet = True
            elif rain is False and record.rain_observed is None:
                record.rain_observed = False
                changed = True

        if changed:
            self._dirty = True
        if newly_wet:
            await self.async_save()

    @staticmethod
    def _evaluate_pressure_hit(
        record: LedgerRecord,
        actual_pressure: float,
        pressure_error: float | None,
    ) -> bool:
        """Evaluate whether a 24h pressure forecast counts as a meteorological hit."""
        if record.predicted_p_24h is None or pressure_error is None:
            return True

        actual_delta = actual_pressure - record.p_now
        effective_tolerance = min(
            MAX_VOLATILITY_TOLERANCE,
            PRESSURE_HIT_TOLERANCE + 0.25 * abs(actual_delta),
        )
        if abs(pressure_error) <= effective_tolerance:
            return True

        if (
            record.predicted_delta_24h is not None
            and abs(record.predicted_delta_24h) >= 1.5
            and abs(actual_delta) >= 3.0
            and actual_delta * record.predicted_delta_24h > 0
            and abs(pressure_error) <= DIRECTIONAL_HIT_MAX_ERROR
        ):
            return True

        if abs(pressure_error) <= DIRECTIONAL_HIT_MAX_ERROR:
            if (
                record.predicted_p_6h is not None
                and record.p_6h_observed is not None
                and abs(record.p_6h_observed - record.predicted_p_6h) <= INTERMEDIATE_HIT_TOLERANCE
            ):
                return True
            if (
                record.predicted_p_12h is not None
                and record.p_12h_observed is not None
                and abs(record.p_12h_observed - record.predicted_p_12h)
                <= INTERMEDIATE_HIT_TOLERANCE
            ):
                return True

        return False

    @classmethod
    def _evaluate_record_hit(
        cls,
        record: LedgerRecord,
        actual_pressure: float,
        actual_state: str | None,
        rain_observed: bool | None,
        pressure_error: float | None,
    ) -> bool:
        """Evaluate overall forecast hit from pressure, state, and rain criteria."""
        pressure_hit = cls._evaluate_pressure_hit(record, actual_pressure, pressure_error)

        actual_severity = zambretti_severity(actual_state)
        predicted_state = record.consensus_state or record.zambretti_state
        predicted_severity = zambretti_severity(predicted_state)
        state_hit = True
        if (
            actual_state is not None
            and predicted_severity is not None
            and actual_severity is not None
        ):
            state_hit = abs(predicted_severity - actual_severity) <= 1

        rain_hit = True
        if rain_observed is not None and record.precip_probability is not None:
            predicted_rain = record.precip_probability >= 50
            rain_hit = predicted_rain == rain_observed

        return bool(pressure_hit and state_hit and rain_hit)

    async def async_verify(
        self,
        actual_pressure: float | None,
        actual_state: str | None,
        now: datetime.datetime,
        rain: bool | None = None,
    ) -> int:
        """Verify records older than 24 hours.

        Evaluates predicted 24-hour pressure against ``actual_pressure``,
        any observed rain during the 24-hour window (from
        :meth:`async_observe_rain` or ``rain`` at verification time), and
        ``actual_state`` when an explicit observed state is supplied.

        Returns:
            Number of records verified in this call.
        """
        await self.async_load()
        if actual_pressure is None:
            return 0

        verified_count = 0

        for record in self._records:
            if record.verified:
                continue
            issued = self._parse_time(record.issued_at)
            if issued is None or now - issued < VERIFY_AFTER:
                continue

            pressure_error: float | None = None
            if record.predicted_p_24h is not None:
                pressure_error = round(actual_pressure - record.predicted_p_24h, 2)

            observed_rain = record.rain_observed
            if rain is True:
                observed_rain = True
            elif observed_rain is None:
                observed_rain = rain
            if observed_rain is not None:
                record.rain_observed = observed_rain

            record.verified = True
            record.hit = self._evaluate_record_hit(
                record,
                actual_pressure,
                actual_state,
                observed_rain,
                pressure_error,
            )
            record.pressure_error = pressure_error
            record.actual_state = actual_state
            verified_count += 1

            self._update_calibration(record, actual_pressure)

        if verified_count:
            self._dirty = True
            await self.async_save()

        return verified_count

    # ── Derived values ───────────────────────────────────────────────────

    @property
    def damping(self) -> float:
        """Return the calibrated damping exponent used for extrapolations."""
        return self._damping

    @property
    def wind_factor(self) -> float:
        """Return the calibrated wind adjustment multiplier."""
        return self._wind_factor

    @property
    def seasonal_factor(self) -> float:
        """Return the calibrated seasonal adjustment multiplier."""
        return self._seasonal_factor

    @property
    def precip_bias(self) -> float:
        """Return the calibrated precipitation probability offset (%)."""
        return self._precip_bias

    @property
    def pressure_bias(self) -> float:
        """Return the calibrated 24-hour pressure offset (hPa)."""
        return self._pressure_bias

    @property
    def calibration_samples(self) -> int:
        """Return the number of verified forecasts usable for trend calibration."""
        return sum(
            1
            for record in self._records
            if record.verified
            and record.predicted_delta_24h is not None
            and abs(record.predicted_delta_24h) >= MIN_CALIBRATION_DELTA
        )

    @property
    def _wind_samples(self) -> int:
        """Return the number of verified forecasts with active wind adjustment."""
        return sum(
            1 for record in self._records if record.verified and record.wind_adjustment_sign != 0
        )

    @property
    def _seasonal_samples(self) -> int:
        """Return the number of verified forecasts with active seasonal offset."""
        return sum(1 for record in self._records if record.verified and record.season_sign != 0)

    @property
    def _rain_samples(self) -> int:
        """Return the number of verified forecasts with observed rain status."""
        return sum(
            1
            for record in self._records
            if record.verified
            and record.rain_observed is not None
            and record.precip_probability is not None
        )

    @property
    def accuracy(self) -> int | None:
        """Return the hit rate (0-100%) over recent verified forecasts."""
        verified = [
            record for record in self._records if record.verified and record.hit is not None
        ]
        if not verified:
            return None
        recent = verified[-MAX_ACCURACY_ENTRIES:]
        hits = sum(1 for record in recent if record.hit)
        return int(round(hits / len(recent) * 100))

    @property
    def last_hit(self) -> str | None:
        """Return "hit" or "miss" for the most recently verified forecast."""
        for record in reversed(self._records):
            if record.verified and record.hit is not None:
                return "hit" if record.hit else "miss"
        return None

    @property
    def verified_count(self) -> int:
        """Return the total number of verified forecasts."""
        return sum(1 for record in self._records if record.verified)

    def summary(self) -> dict[str, Any]:
        """Return a compact diagnostics-friendly summary."""
        return {
            "records": len(self._records),
            "verified": self.verified_count,
            "accuracy": self.accuracy,
            "last_hit": self.last_hit,
            "calibration_samples": self.calibration_samples,
            "damping": self.damping,
            "wind_factor": self.wind_factor,
            "seasonal_factor": self.seasonal_factor,
            "precip_bias": self.precip_bias,
            "pressure_bias": self.pressure_bias,
        }

    # ── Internals ────────────────────────────────────────────────────────

    @staticmethod
    def _nudge_signed_factor(
        current: float,
        sign: int,
        missed_wet: bool,
        false_wet: bool,
        pressure_diff: float | None,
        rain_observed: bool | None,
        step: float,
        low: float,
        high: float,
    ) -> float:
        """Adjust a directional bias multiplier (+1 fair, -1 unsettled)."""
        stronger_bad = missed_wet or (
            pressure_diff is not None and pressure_diff < -CALIBRATION_PRESSURE_TOLERANCE
        )
        stronger_good = false_wet or (
            rain_observed is not True
            and pressure_diff is not None
            and pressure_diff > CALIBRATION_PRESSURE_TOLERANCE
        )

        if sign < 0:
            if stronger_bad:
                return _clamp(current + step, low, high)
            if stronger_good:
                return _clamp(current - step, low, high)
        elif sign > 0:
            if stronger_bad:
                return _clamp(current - step, low, high)
            if stronger_good:
                return _clamp(current + step, low, high)
        return current

    def _update_calibration(self, record: LedgerRecord, actual_pressure: float) -> None:
        """Update damping, wind/seasonal multipliers, and rain bias from verified outcomes."""
        # 1. Trend damping (sign-aware, gated on CALIBRATION_MIN_SAMPLES)
        if (
            self.calibration_samples >= CALIBRATION_MIN_SAMPLES
            and record.predicted_delta_24h is not None
            and abs(record.predicted_delta_24h) >= MIN_CALIBRATION_DELTA
        ):
            actual_delta = actual_pressure - record.p_now
            if actual_delta * record.predicted_delta_24h > 0:
                predicted_magnitude = abs(record.predicted_delta_24h)
                actual_magnitude = abs(actual_delta)
                if actual_magnitude > predicted_magnitude + 0.5:
                    self._damping = self._clamp_damping(self._damping + DAMPING_STEP)
                elif actual_magnitude < predicted_magnitude - 0.5:
                    self._damping = self._clamp_damping(self._damping - DAMPING_STEP)
            elif abs(actual_delta) > 0.5:
                # Trend reversed direction within 24h -> reduce extrapolation aggressiveness.
                self._damping = self._clamp_damping(self._damping - DAMPING_STEP)

        missed_wet = (
            record.rain_observed is True
            and record.precip_probability is not None
            and record.precip_probability < 50
        )
        false_wet = (
            record.rain_observed is False
            and record.precip_probability is not None
            and record.precip_probability >= 50
        )
        pressure_diff = (
            actual_pressure - record.predicted_p_24h if record.predicted_p_24h is not None else None
        )

        # 2. Wind adjustment multiplier
        if record.wind_adjustment_sign != 0 and self._wind_samples >= CALIBRATION_MIN_SAMPLES:
            self._wind_factor = self._nudge_signed_factor(
                self._wind_factor,
                record.wind_adjustment_sign,
                missed_wet,
                false_wet,
                pressure_diff,
                record.rain_observed,
                WIND_FACTOR_STEP,
                WIND_FACTOR_MIN,
                WIND_FACTOR_MAX,
            )

        # 3. Seasonal offset multiplier
        if record.season_sign != 0 and self._seasonal_samples >= CALIBRATION_MIN_SAMPLES:
            self._seasonal_factor = self._nudge_signed_factor(
                self._seasonal_factor,
                record.season_sign,
                missed_wet,
                false_wet,
                pressure_diff,
                record.rain_observed,
                SEASONAL_FACTOR_STEP,
                SEASONAL_FACTOR_MIN,
                SEASONAL_FACTOR_MAX,
            )

        # 4. Precipitation probability bias
        if (
            record.rain_observed is not None
            and record.precip_probability is not None
            and self._rain_samples >= CALIBRATION_MIN_SAMPLES
        ):
            if missed_wet:
                self._precip_bias = _clamp(
                    self._precip_bias + PRECIP_BIAS_STEP, PRECIP_BIAS_MIN, PRECIP_BIAS_MAX, 1
                )
            elif false_wet:
                self._precip_bias = _clamp(
                    self._precip_bias - PRECIP_BIAS_STEP, PRECIP_BIAS_MIN, PRECIP_BIAS_MAX, 1
                )

        # 5. Systematic 24h pressure bias
        if self.calibration_samples >= CALIBRATION_MIN_SAMPLES and pressure_diff is not None:
            if pressure_diff > CALIBRATION_PRESSURE_TOLERANCE:
                self._pressure_bias = _clamp(
                    self._pressure_bias + PRESSURE_BIAS_STEP,
                    PRESSURE_BIAS_MIN,
                    PRESSURE_BIAS_MAX,
                    2,
                )
            elif pressure_diff < -CALIBRATION_PRESSURE_TOLERANCE:
                self._pressure_bias = _clamp(
                    self._pressure_bias - PRESSURE_BIAS_STEP,
                    PRESSURE_BIAS_MIN,
                    PRESSURE_BIAS_MAX,
                    2,
                )

    @staticmethod
    def _clamp_damping(value: float) -> float:
        """Clamp the damping exponent to a safe physical range."""
        return _clamp(value, DAMPING_MIN, DAMPING_MAX)

    @staticmethod
    def _parse_time(value: str) -> datetime.datetime | None:
        """Parse an ISO timestamp, tolerating malformed ledger entries."""
        try:
            parsed = datetime.datetime.fromisoformat(value)
        except (TypeError, ValueError):
            return None
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=datetime.UTC)
        return parsed
