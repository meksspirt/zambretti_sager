"""Sensor platform for the Zambretti & Sager integration."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass
from datetime import datetime
from typing import Any

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.const import PERCENTAGE, EntityCategory
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import DeviceInfo
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .algorithms import SAGER_OPTIONS, ZAMBRETTI_OPTIONS
from .const import DOMAIN, VERSION
from .coordinator import ForecastData, ZambrettiConfigEntry, ZambrettiSagerCoordinator


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
    if d.altitude is not None:
        attrs["altitude_m"] = d.altitude
    if d.humidity is not None:
        attrs["humidity_%"] = d.humidity
    if d.wind_degrees is not None:
        attrs["wind_direction"] = d.wind_direction
        attrs["wind_degrees"] = d.wind_degrees
    if d.wind_speed is not None:
        attrs["wind_speed"] = d.wind_speed
    if d.is_night:
        attrs["is_night"] = d.is_night
    return attrs


SENSOR_DESCRIPTIONS: tuple[ZambrettiSensorEntityDescription, ...] = (
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
        icon="mdi:weather-partly-cloudy",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_6h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_6h}
            if d.predicted_p_6h is not None
            else {}
        ),
    ),
    ZambrettiSensorEntityDescription(
        key="zambretti_12h",
        translation_key="zambretti_forecast_12h",
        icon="mdi:weather-cloudy",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_12h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_12h}
            if d.predicted_p_12h is not None
            else {}
        ),
    ),
    ZambrettiSensorEntityDescription(
        key="zambretti_24h",
        translation_key="zambretti_forecast_24h",
        icon="mdi:weather-sunset",
        device_class=SensorDeviceClass.ENUM,
        options=ZAMBRETTI_OPTIONS,
        value_fn=lambda d: d.zambretti_24h if d.p_now is not None else None,
        attrs_fn=lambda d, _: (
            {"predicted_pressure_hpa": d.predicted_p_24h}
            if d.predicted_p_24h is not None
            else {}
        ),
    ),
    ZambrettiSensorEntityDescription(
        key="precipitation_probability",
        translation_key="precipitation_probability",
        icon="mdi:water-percent",
        native_unit_of_measurement=PERCENTAGE,
        state_class=SensorStateClass.MEASUREMENT,
        value_fn=lambda d: d.precip_probability if d.p_now is not None else None,
    ),
    ZambrettiSensorEntityDescription(
        key="last_update",
        translation_key="last_update",
        icon="mdi:clock-time-four",
        device_class=SensorDeviceClass.TIMESTAMP,
        entity_category=EntityCategory.DIAGNOSTIC,
        value_fn=lambda d: d.last_updated,
        available_fn=lambda d: d.last_updated is not None,
    ),
)

_DESCRIPTIONS_BY_KEY = {desc.key: desc for desc in SENSOR_DESCRIPTIONS}


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ZambrettiConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Zambretti & Sager sensors."""
    coordinator = entry.runtime_data
    async_add_entities(
        WeatherSensor(coordinator, description)
        for description in SENSOR_DESCRIPTIONS
    )


class WeatherSensor(CoordinatorEntity[ZambrettiSagerCoordinator], SensorEntity):
    """Declarative sensor entity for Zambretti & Sager forecast metrics."""

    entity_description: ZambrettiSensorEntityDescription
    _attr_has_entity_name = True
    _unrecorded_attributes = frozenset(
        {
            "pressure_hpa",
            "pressure_3h_ago",
            "pressure_delta_3h",
            "wind_degrees",
            "wind_speed",
            "humidity_%",
            "altitude_m",
            "is_night",
        }
    )

    def __init__(
        self,
        coordinator: ZambrettiSagerCoordinator,
        description: ZambrettiSensorEntityDescription,
    ) -> None:
        """Initialize the sensor and set shared device info."""
        super().__init__(coordinator)
        self.entity_description = description
        self._attr_unique_id = f"{coordinator.entry.entry_id}_{description.key}"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, coordinator.entry.entry_id)},
            name="Weather Station",
            manufacturer="Zambretti & Sager",
            model="Software Forecaster",
            sw_version=VERSION,
        )

    @property
    def data(self) -> ForecastData | None:
        """Return the latest forecast data snapshot from the coordinator."""
        return self.coordinator.data

    @property
    def available(self) -> bool:
        """Return True when the coordinator has valid data."""
        d = self.data
        if d is None:
            return False
        if self.entity_description.available_fn is not None:
            return self.entity_description.available_fn(d)
        return d.available

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


# ── Backwards compatibility aliases & subclasses ─────────────────────────


class WeatherSensorBase(WeatherSensor):
    """Backwards-compatible base class alias."""

    def __init__(
        self,
        coordinator: ZambrettiSagerCoordinator,
        description: ZambrettiSensorEntityDescription | None = None,
    ) -> None:
        """Initialize the base sensor."""
        if description is None:
            description = _DESCRIPTIONS_BY_KEY["zambretti"]
        super().__init__(coordinator, description)


class ZambrettiSensor(WeatherSensor):
    """Current Zambretti forecast sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the Zambretti sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["zambretti"])


class SagerSensor(WeatherSensor):
    """Sager forecast sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the Sager sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["sager"])


class ZambrettiForecast6h(WeatherSensor):
    """6-hour Zambretti forecast sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the 6-hour forecast sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["zambretti_6h"])


class ZambrettiForecast12h(WeatherSensor):
    """12-hour Zambretti forecast sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the 12-hour forecast sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["zambretti_12h"])


class ZambrettiForecast24h(WeatherSensor):
    """24-hour Zambretti forecast sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the 24-hour forecast sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["zambretti_24h"])


class PrecipitationProbability(WeatherSensor):
    """Precipitation probability sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the precipitation probability sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["precipitation_probability"])


class LastUpdateSensor(WeatherSensor):
    """Last update timestamp sensor."""

    def __init__(self, coordinator: ZambrettiSagerCoordinator) -> None:
        """Initialize the last update sensor."""
        super().__init__(coordinator, _DESCRIPTIONS_BY_KEY["last_update"])
