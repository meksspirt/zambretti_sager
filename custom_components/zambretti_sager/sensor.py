"""Sensor platform for the Zambretti & Sager integration."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from typing import Any

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.const import PERCENTAGE, EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .algorithms import SAGER_OPTIONS, ZAMBRETTI_OPTIONS
from .coordinator import ForecastData, ZambrettiConfigEntry, ZambrettiSagerCoordinator
from .entity import ZambrettiEntity

PARALLEL_UPDATES = 0

HPA = "hPa"
FORECAST_HIT_OPTIONS = ["hit", "miss"]


@dataclass(frozen=True, kw_only=True)
class ZambrettiSensorEntityDescription(SensorEntityDescription):
    """Describes Zambretti sensor entity."""

    value_fn: Callable[[ForecastData], Any]
    attrs_fn: Callable[[ForecastData, ZambrettiSagerCoordinator], dict] | None = None
    available_fn: Callable[[ForecastData], bool] | None = None


def _get_base_attrs(d: ForecastData | None) -> dict:
    """Return common observation attributes for the main Zambretti sensor."""
    if not d or d.p_now is None:
        return {}
    attrs: dict = {
        "pressure_hpa": d.p_now,
        "pressure_3h_ago": d.p_3h,
        "pressure_delta_3h": d.delta_3h,
        "trend": d.trend_label,
    }
    if d.raw_pressure is not None:
        attrs["station_pressure_hpa"] = d.raw_pressure
    if d.p_6h is not None:
        attrs["pressure_6h_ago"] = d.p_6h
    if d.p_12h is not None:
        attrs["pressure_12h_ago"] = d.p_12h
    if d.p_24h is not None:
        attrs["pressure_24h_ago"] = d.p_24h
    if d.pressure_change_24h is not None:
        attrs["pressure_change_24h"] = d.pressure_change_24h
    if d.trend_rate_3h is not None:
        attrs["trend_rate_3h"] = d.trend_rate_3h
    if d.trend_r2 is not None:
        attrs["trend_r2"] = d.trend_r2
    if d.altitude is not None:
        attrs["altitude_m"] = d.altitude
    if d.humidity is not None:
        attrs["humidity_%"] = d.humidity
    if d.dew_point is not None:
        attrs["dew_point"] = d.dew_point
    if d.temperature_available:
        attrs["temperature"] = d.temperature
    if d.wind_degrees is not None:
        attrs["wind_direction"] = d.wind_direction
        attrs["wind_degrees"] = d.wind_degrees
    if d.wind_speed is not None:
        attrs["wind_speed"] = d.wind_speed
    if d.consensus_state is not None:
        attrs["consensus_state"] = d.consensus_state
    if d.model_divergence is not None:
        attrs["model_divergence"] = d.model_divergence
    if d.confidence is not None:
        attrs["confidence"] = d.confidence
    if d.wmo_tendency_code is not None:
        attrs["wmo_tendency_code"] = d.wmo_tendency_code
    if d.rain is not None:
        attrs["rain"] = d.rain
    if d.is_night:
        attrs["is_night"] = d.is_night
    return attrs


SENSOR_DESCRIPTIONS: tuple[ZambrettiSensorEntityDescription, ...] = (
    # ── Forecast states ─────────────────────────────────────────────────
    ZambrettiSensorEntityDescription(
        key="zambretti",
        translation_key="zambretti_forecast",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_state if d.p_now is not None else None,
        attrs_fn=lambda d, coord: {
            **_get_base_attrs(d),
            "pressure_sensor": coord.pressure_id,
        },
    ),
    ZambrettiSensorEntityDescription(
        key="sager",
        translation_key="sager_forecast",
        device_class=SensorDeviceClass.ENUM,
        options=SAGER_OPTIONS,
        value_fn=lambda d: d.sager_state if d.p_now is not None else None,
    ),
    ZambrettiSensorEntityDescription(
        key="zambretti_6h",
        translation_key="zambretti_forecast_6h",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_6h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_6h} if d.predicted_p_6h is not None else {}
        ),
    ),
    ZambrettiSensorEntityDescription(
        key="zambretti_12h",
        translation_key="zambretti_forecast_12h",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_12h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_12h} if d.predicted_p_12h is not None else {}
        ),
    ),
    ZambrettiSensorEntityDescription(
        key="zambretti_24h",
        translation_key="zambretti_forecast_24h",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_24h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_24h} if d.predicted_p_24h is not None else {}
        ),
    ),
    # ── Numeric pressure metrics ────────────────────────────────────────
    ZambrettiSensorEntityDescription(
        key="sea_level_pressure",
        translation_key="sea_level_pressure",
        device_class=SensorDeviceClass.PRESSURE,
        native_unit_of_measurement=HPA,
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=lambda d: d.p_now if d.available else None,
    ),
    ZambrettiSensorEntityDescription(
        key="station_pressure",
        translation_key="station_pressure",
        device_class=SensorDeviceClass.PRESSURE,
        native_unit_of_measurement=HPA,
        state_class=SensorStateClass.MEASUREMENT,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.raw_pressure if d.available else None,
        available_fn=lambda d: d.raw_pressure is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="pressure_trend_3h",
        translation_key="pressure_trend_3h",
        native_unit_of_measurement=HPA,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:trending-neutral",
        value_fn=lambda d: d.delta_3h if d.available else None,
        available_fn=lambda d: d.delta_3h is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="pressure_change_24h",
        translation_key="pressure_change_24h",
        native_unit_of_measurement=HPA,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:gauge",
        value_fn=lambda d: d.pressure_change_24h if d.available else None,
        available_fn=lambda d: d.pressure_change_24h is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="wmo_tendency_code",
        translation_key="wmo_tendency_code",
        icon="mdi:weather-windy",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.wmo_tendency_code if d.available else None,
        available_fn=lambda d: d.wmo_tendency_code is not None,
        attrs_fn=lambda d, _: (
            {"tendency": d.wmo_tendency_code} if d.wmo_tendency_code is not None else {}
        ),
    ),
    # ── Probabilities and confidence ────────────────────────────────────
    ZambrettiSensorEntityDescription(
        key="precipitation_probability",
        translation_key="precipitation_probability",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=lambda d: d.precip_probability if d.p_now is not None else None,
    ),
    ZambrettiSensorEntityDescription(
        key="snow_probability",
        translation_key="snow_probability",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:weather-snowy",
        value_fn=lambda d: d.snow_probability if d.available else None,
        available_fn=lambda d: d.snow_probability is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="fog_probability",
        translation_key="fog_probability",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:weather-fog",
        value_fn=lambda d: d.fog_probability if d.available else None,
        available_fn=lambda d: d.fog_probability is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="forecast_confidence",
        translation_key="forecast_confidence",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:shield-check",
        value_fn=lambda d: d.confidence if d.available else None,
        available_fn=lambda d: d.confidence is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="model_divergence",
        translation_key="model_divergence",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:call-split",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.model_divergence if d.available else None,
        available_fn=lambda d: d.model_divergence is not None,
    ),
    # ── Forecast verification ledger ────────────────────────────────────
    ZambrettiSensorEntityDescription(
        key="forecast_accuracy_24h",
        translation_key="forecast_accuracy_24h",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        icon="mdi:target",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.forecast_accuracy,
        available_fn=lambda d: d.forecast_accuracy is not None,
        attrs_fn=lambda d, _: {
            "calibration_samples": d.calibration_samples,
            "adaptive_damping": d.adaptive_damping,
        },
    ),
    ZambrettiSensorEntityDescription(
        key="last_forecast_hit",
        translation_key="last_forecast_hit",
        device_class=SensorDeviceClass.ENUM,
        options=FORECAST_HIT_OPTIONS,
        icon="mdi:check-decagram",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.last_forecast_hit,
        available_fn=lambda d: d.last_forecast_hit is not None,
    ),
    ZambrettiSensorEntityDescription(
        key="adaptive_damping",
        translation_key="adaptive_damping",
        icon="mdi:tune",
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.adaptive_damping if d.available else None,
        attrs_fn=lambda d, _: {"calibration_samples": d.calibration_samples},
    ),
    # ── Timestamp ───────────────────────────────────────────────────────
    ZambrettiSensorEntityDescription(
        key="last_update",
        translation_key="last_update",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.last_updated,
        available_fn=lambda d: d.last_updated is not None,
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ZambrettiConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Zambretti & Sager sensors."""
    coordinator = entry.runtime_data
    async_add_entities(
        WeatherSensor(coordinator, description) for description in SENSOR_DESCRIPTIONS
    )


class WeatherSensor(ZambrettiEntity, SensorEntity):
    """Declarative sensor entity for Zambretti & Sager forecast metrics."""

    entity_description: ZambrettiSensorEntityDescription
    _unrecorded_attributes = frozenset(
        {
            "pressure_hpa",
            "pressure_3h_ago",
            "pressure_6h_ago",
            "pressure_12h_ago",
            "pressure_24h_ago",
            "pressure_delta_3h",
            "pressure_change_24h",
            "station_pressure_hpa",
            "wind_degrees",
            "wind_speed",
            "humidity_%",
            "dew_point",
            "temperature",
            "altitude_m",
            "trend_rate_3h",
            "trend_r2",
            "consensus_state",
            "model_divergence",
            "confidence",
            "wmo_tendency_code",
            "rain",
            "is_night",
            "calibration_samples",
        }
    )

    def __init__(
        self,
        coordinator: ZambrettiSagerCoordinator,
        description: ZambrettiSensorEntityDescription,
    ) -> None:
        """Initialize the sensor and set shared device info."""
        super().__init__(coordinator, description.key)
        self.entity_description = description

    @property
    def available(self) -> bool:
        """Return True when the coordinator has valid data."""
        d = self.data
        if d is None:
            return False
        if self.entity_description.available_fn is not None:
            return self.entity_description.available_fn(d)
        return super().available

    @property
    def native_value(self) -> Any:
        """Return native state of the sensor via description value_fn."""
        d = self.data
        if not self.available or d is None:
            return None
        return self.entity_description.value_fn(d)

    @property
    def extra_state_attributes(self) -> dict:
        """Return extra attributes via description attrs_fn."""
        d = self.data
        if d and self.entity_description.attrs_fn is not None:
            return self.entity_description.attrs_fn(d, self.coordinator)
        return {}
