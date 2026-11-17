"""Binary sensor platform for the Zambretti & Sager integration."""

from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
    BinarySensorEntityDescription,
)
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .algorithms import zambretti_severity
from .coordinator import ForecastData, ZambrettiConfigEntry, ZambrettiSagerCoordinator
from .entity import ZambrettiEntity

PARALLEL_UPDATES = 0

FOG_PROBABILITY_MIN = 50


@dataclass(frozen=True, kw_only=True)
class ZambrettiBinarySensorEntityDescription(BinarySensorEntityDescription):
    """Describes a Zambretti alert binary sensor."""

    is_on_fn: Callable[[ForecastData, ZambrettiSagerCoordinator], bool | None]
    attrs_fn: Callable[[ForecastData, ZambrettiSagerCoordinator], dict] | None = None


def _storm_warning(d: ForecastData, coord: ZambrettiSagerCoordinator) -> bool | None:
    """Return True when the forecast indicates stormy conditions."""
    if d.precip_probability is None:
        return None
    severity = zambretti_severity(d.consensus_state or d.zambretti_state)
    falling = d.delta_3h is not None and d.delta_3h <= -coord.falling_rapid_threshold
    if d.precip_probability < coord.storm_precip_threshold:
        return False
    return bool(falling or (severity is not None and severity >= 4))


def _frost_risk(d: ForecastData, coord: ZambrettiSagerCoordinator) -> bool | None:
    """Return True when the temperature is at or below the frost threshold."""
    if not d.temperature_available:
        return None
    return d.temperature <= coord.frost_temp_threshold


def _fog_risk(d: ForecastData, coord: ZambrettiSagerCoordinator) -> bool | None:
    """Return True when humidity and the fog model both indicate fog risk."""
    if d.fog_probability is None or d.humidity is None:
        return None
    return bool(
        d.humidity >= coord.fog_humidity_threshold and d.fog_probability >= FOG_PROBABILITY_MIN
    )


BINARY_SENSOR_DESCRIPTIONS: tuple[ZambrettiBinarySensorEntityDescription, ...] = (
    ZambrettiBinarySensorEntityDescription(
        key="pressure_falling_rapidly",
        translation_key="pressure_falling_rapidly",
        device_class=BinarySensorDeviceClass.PROBLEM,
        is_on_fn=lambda d, coord: (
            None if d.delta_3h is None else d.delta_3h <= -coord.falling_rapid_threshold
        ),
        attrs_fn=lambda d, coord: {
            "delta_3h": d.delta_3h,
            "threshold": coord.falling_rapid_threshold,
        },
    ),
    ZambrettiBinarySensorEntityDescription(
        key="storm_warning",
        translation_key="storm_warning",
        device_class=BinarySensorDeviceClass.SAFETY,
        is_on_fn=_storm_warning,
        attrs_fn=lambda d, coord: {
            "precipitation_probability": d.precip_probability,
            "threshold": coord.storm_precip_threshold,
            "zambretti_state": d.zambretti_state,
            "consensus_state": d.consensus_state,
        },
    ),
    ZambrettiBinarySensorEntityDescription(
        key="frost_risk",
        translation_key="frost_risk",
        device_class=BinarySensorDeviceClass.COLD,
        is_on_fn=_frost_risk,
        attrs_fn=lambda d, coord: {
            "temperature": d.temperature if d.temperature_available else None,
            "threshold": coord.frost_temp_threshold,
            "snow_probability": d.snow_probability,
        },
    ),
    ZambrettiBinarySensorEntityDescription(
        key="fog_risk",
        translation_key="fog_risk",
        device_class=BinarySensorDeviceClass.PROBLEM,
        is_on_fn=_fog_risk,
        attrs_fn=lambda d, coord: {
            "fog_probability": d.fog_probability,
            "humidity": d.humidity,
            "humidity_threshold": coord.fog_humidity_threshold,
            "dew_point": d.dew_point,
        },
    ),
)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ZambrettiConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the Zambretti & Sager alert binary sensors."""
    coordinator = entry.runtime_data
    async_add_entities(
        ZambrettiBinarySensor(coordinator, description)
        for description in BINARY_SENSOR_DESCRIPTIONS
    )


class ZambrettiBinarySensor(ZambrettiEntity, BinarySensorEntity):
    """Declarative alert binary sensor."""

    entity_description: ZambrettiBinarySensorEntityDescription

    def __init__(
        self,
        coordinator: ZambrettiSagerCoordinator,
        description: ZambrettiBinarySensorEntityDescription,
    ) -> None:
        """Initialize the binary sensor."""
        super().__init__(coordinator, description.key)
        self.entity_description = description

    @property
    def is_on(self) -> bool | None:
        """Return the alert state."""
        d = self.data
        if d is None or not d.available:
            return None
        return self.entity_description.is_on_fn(d, self.coordinator)

    @property
    def extra_state_attributes(self) -> dict:
        """Return diagnostic attributes for the alert."""
        d = self.data
        if d and d.available and self.entity_description.attrs_fn is not None:
            return self.entity_description.attrs_fn(d, self.coordinator)
        return {}
