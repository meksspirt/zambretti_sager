"""Weather platform for the Zambretti & Sager integration."""

from __future__ import annotations

from datetime import timedelta

from homeassistant.components.weather import (
    Forecast,
    WeatherEntity,
    WeatherEntityFeature,
)
from homeassistant.const import UnitOfPressure, UnitOfSpeed, UnitOfTemperature
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util import dt as dt_util

from .coordinator import ZambrettiConfigEntry, ZambrettiSagerCoordinator
from .entity import ZambrettiEntity

ZAMBRETTI_TO_CONDITION: dict[str, str] = {
    "settled_fine": "sunny",
    "fine_weather": "sunny",
    "fine_becoming_less_settled": "partlycloudy",
    "fairly_fine_showery_later": "rainy",
    "showery_becoming_more_unsettled": "rainy",
    "unsettled_rain_later": "rainy",
    "rain_at_times_worse_later": "rainy",
    "rain_at_times_becoming_very_unsettled": "rainy",
    "very_unsettled_rain": "rainy",
    "fine_possibly_showers": "partlycloudy",
    "fairly_fine_showers_likely": "rainy",
    "showery_bright_intervals": "cloudy",
    "changeable_some_rain": "rainy",
    "unsettled_rain_at_times": "rainy",
    "rain_at_frequent_intervals": "rainy",
    "stormy_much_rain": "lightning-rainy",
    "becoming_fine": "sunny",
    "fairly_fine_improving": "partlycloudy",
    "fairly_fine_possibly_showers_early": "partlycloudy",
    "showery_early_improving": "cloudy",
    "changeable_mending": "cloudy",
    "rather_unsettled_clearing_later": "cloudy",
    "unsettled_probably_improving": "cloudy",
    "unsettled_short_fine_intervals": "partlycloudy",
    "very_unsettled_finer_at_times": "rainy",
    "stormy_possibly_improving": "lightning-rainy",
    "stable": "sunny",
}


PARALLEL_UPDATES = 0


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ZambrettiConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Zambretti & Sager weather entity."""
    coordinator = entry.runtime_data
    async_add_entities([ZambrettiWeather(coordinator)])


class ZambrettiWeather(ZambrettiEntity, WeatherEntity):
    """Weather entity that exposes Zambretti forecasts to HA's native weather card."""

    _attr_translation_key = "weather_station"
    _attr_name = None
    _attr_native_temperature_unit = UnitOfTemperature.CELSIUS
    _attr_native_pressure_unit = UnitOfPressure.HPA
    _attr_native_wind_speed_unit = UnitOfSpeed.METERS_PER_SECOND
    _attr_supported_features = (
        WeatherEntityFeature.FORECAST_HOURLY | WeatherEntityFeature.FORECAST_DAILY
    )

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the weather entity."""
        super().__init__(coordinator, "weather")

    @property
    def condition(self) -> str | None:
        """Return the current weather condition."""
        d = self.data
        if not d or not d.available or not d.zambretti_state:
            return None
        cond = ZAMBRETTI_TO_CONDITION.get(d.zambretti_state)
        if cond == "sunny" and d.is_night:
            return "clear-night"
        return cond

    @property
    def native_temperature(self) -> float | None:
        """Return the current temperature."""
        d = self.data
        return d.temperature if d else None

    @property
    def native_pressure(self) -> float | None:
        """Return the current sea-level corrected pressure."""
        d = self.data
        if not d or d.p_now is None:
            return None
        return d.p_now

    @property
    def native_humidity(self) -> float | None:
        """Return the current relative humidity."""
        d = self.data
        return d.humidity if d else None

    @property
    def native_wind_speed(self) -> float | None:
        """Return the current wind speed."""
        d = self.data
        return d.wind_speed if d else None

    @property
    def wind_bearing(self) -> float | None:
        """Return the current wind bearing in degrees."""
        d = self.data
        return d.wind_degrees if d else None

    async def async_forecast_hourly(self) -> list[Forecast] | None:
        """Return the short-term hourly forecast (+6h, +12h, +24h)."""
        d = self.data
        if not d or not d.available or d.p_now is None:
            return None
        return self._build_forecast(
            [
                (6, d.zambretti_6h, d.predicted_p_6h),
                (12, d.zambretti_12h, d.predicted_p_12h),
                (24, d.zambretti_24h, d.predicted_p_24h),
            ]
        )

    async def async_forecast_daily(self) -> list[Forecast] | None:
        """Return the 24-hour ahead daily forecast."""
        d = self.data
        if not d or not d.available or d.p_now is None:
            return None
        return self._build_forecast(
            [
                (24, d.zambretti_24h, d.predicted_p_24h),
            ]
        )

    def _build_forecast(
        self, forecast_defs: list[tuple[int, str | None, float | None]]
    ) -> list[Forecast] | None:
        """Build Forecast objects for the requested horizons."""
        d = self.data
        if not d or not d.available or d.p_now is None:
            return None

        now = dt_util.utcnow()
        items: list[Forecast] = []

        for hours, state, p_pred in forecast_defs:
            cond = ZAMBRETTI_TO_CONDITION.get(state) if state else None
            forecast_time = (now + timedelta(hours=hours)).isoformat()

            forecast_dict: dict = {
                "datetime": forecast_time,
                "condition": cond,
                "native_temperature": d.temperature,
                "native_pressure": p_pred,
            }
            if d.precip_probability is not None:
                forecast_dict["precipitation_probability"] = d.precip_probability
            if d.wind_speed is not None:
                forecast_dict["wind_speed"] = d.wind_speed
            if d.wind_degrees is not None:
                forecast_dict["wind_bearing"] = d.wind_degrees

            items.append(Forecast(**forecast_dict))

        return items
