"""Device triggers for the Zambretti & Sager integration."""

from __future__ import annotations

from typing import Any

from homeassistant.components.device_automation import DEVICE_TRIGGER_BASE_SCHEMA
from homeassistant.components.homeassistant.triggers import event as event_trigger
from homeassistant.const import CONF_DEVICE_ID, CONF_DOMAIN, CONF_PLATFORM, CONF_TYPE
from homeassistant.core import CALLBACK_TYPE, HomeAssistant
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.trigger import TriggerActionType, TriggerInfo
from homeassistant.helpers.typing import ConfigType
import voluptuous as vol

from .const import (
    DOMAIN,
    EVENT_FORECAST_CHANGED,
    EVENT_HORIZON_CHANGED,
    EVENT_PRESSURE_DROP,
)

TRIGGER_TYPES = ("forecast_changed", "horizon_changed", "pressure_drop")

EVENT_BY_TYPE: dict[str, str] = {
    "forecast_changed": EVENT_FORECAST_CHANGED,
    "horizon_changed": EVENT_HORIZON_CHANGED,
    "pressure_drop": EVENT_PRESSURE_DROP,
}

TRIGGER_SCHEMA = DEVICE_TRIGGER_BASE_SCHEMA.extend({vol.Required(CONF_TYPE): vol.In(TRIGGER_TYPES)})


async def async_get_triggers(hass: HomeAssistant, device_id: str) -> list[dict[str, Any]]:
    """Return the device triggers exposed by this integration."""
    registry = dr.async_get(hass)
    device = registry.async_get(device_id)
    if device is None:
        return []

    triggers: list[dict[str, Any]] = []
    for _entry_id in device.config_entries:
        triggers.extend(
            {
                CONF_PLATFORM: "device",
                CONF_DOMAIN: DOMAIN,
                CONF_DEVICE_ID: device_id,
                CONF_TYPE: trigger_type,
            }
            for trigger_type in TRIGGER_TYPES
        )
    return triggers


async def async_attach_trigger(
    hass: HomeAssistant,
    config: ConfigType,
    action: TriggerActionType,
    trigger_info: TriggerInfo,
) -> CALLBACK_TYPE:
    """Attach a device trigger to the matching integration bus event."""
    event_type = EVENT_BY_TYPE[config[CONF_TYPE]]

    entry_id: str | None = None
    try:
        device = dr.async_get(hass).async_get(config[CONF_DEVICE_ID])
        if device is not None:
            entry_id = next(iter(device.config_entries), None)
    except (AttributeError, TypeError):
        entry_id = None

    event_config: dict[str, Any] = {CONF_PLATFORM: "event", "event_type": event_type}
    if entry_id:
        event_config["event_data"] = {"entry_id": entry_id}

    return await event_trigger.async_attach_trigger(
        hass,
        event_trigger.TRIGGER_SCHEMA(event_config),
        action,
        trigger_info,
        platform_type="device",
    )
