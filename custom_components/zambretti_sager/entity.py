"""Base entity module for the Zambretti & Sager integration."""

from __future__ import annotations

from homeassistant.helpers.device_registry import DeviceEntryType, DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, VERSION
from .coordinator import ForecastData, ZambrettiSagerCoordinator


def _resolve_device_name(coordinator: ZambrettiSagerCoordinator) -> str:
    """Resolve human-friendly device name, preserving 'Weather Station' for default entries."""
    entry_title = getattr(coordinator.entry, "title", None)
    if isinstance(entry_title, str) and entry_title and entry_title != "Weather Forecaster":
        return entry_title
    return "Weather Station"


class ZambrettiEntity(CoordinatorEntity[ZambrettiSagerCoordinator]):
    """Shared base entity for Zambretti & Sager platforms."""

    _attr_has_entity_name = True

    def __init__(self, coordinator: ZambrettiSagerCoordinator, unique_suffix: str) -> None:
        """Initialize base entity with shared device metadata."""
        super().__init__(coordinator)
        self._attr_unique_id = f"{coordinator.entry.entry_id}_{unique_suffix}"
        self._attr_device_info = DeviceInfo(
            identifiers={(DOMAIN, coordinator.entry.entry_id)},
            name=_resolve_device_name(coordinator),
            manufacturer="Zambretti & Sager",
            model="Software Forecaster",
            sw_version=VERSION,
            entry_type=DeviceEntryType.SERVICE,
        )

    @property
    def data(self) -> ForecastData | None:
        """Return the latest forecast data snapshot from the coordinator."""
        return self.coordinator.data

    @property
    def available(self) -> bool:
        """Return True if coordinator data is available."""
        return self.data is not None and self.data.available
