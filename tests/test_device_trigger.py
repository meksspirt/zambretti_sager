"""Unit tests for the device trigger platform."""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from custom_components.zambretti_sager import device_trigger
from custom_components.zambretti_sager.const import (
    DOMAIN,
    EVENT_FORECAST_CHANGED,
    EVENT_HORIZON_CHANGED,
    EVENT_PRESSURE_DROP,
)


def test_event_mapping_covers_all_triggers():
    """Test every trigger type maps to a documented bus event."""
    assert set(device_trigger.TRIGGER_TYPES) == set(device_trigger.EVENT_BY_TYPE)
    assert device_trigger.EVENT_BY_TYPE == {
        "forecast_changed": EVENT_FORECAST_CHANGED,
        "horizon_changed": EVENT_HORIZON_CHANGED,
        "pressure_drop": EVENT_PRESSURE_DROP,
    }


@pytest.mark.asyncio
async def test_async_get_triggers_for_known_device():
    """Test triggers are returned for devices owned by this integration."""
    device = MagicMock()
    device.config_entries = {"entry_1"}

    registry = MagicMock()
    registry.async_get.return_value = device

    with patch.object(device_trigger.dr, "async_get", return_value=registry):
        triggers = await device_trigger.async_get_triggers(MagicMock(), "device_1")

    assert len(triggers) == len(device_trigger.TRIGGER_TYPES)
    assert {trigger["type"] for trigger in triggers} == set(device_trigger.TRIGGER_TYPES)
    assert all(trigger["domain"] == DOMAIN for trigger in triggers)
    assert all(trigger["device_id"] == "device_1" for trigger in triggers)


@pytest.mark.asyncio
async def test_async_get_triggers_unknown_device():
    """Test unknown device ids return no triggers."""
    registry = MagicMock()
    registry.async_get.return_value = None

    with patch.object(device_trigger.dr, "async_get", return_value=registry):
        assert await device_trigger.async_get_triggers(MagicMock(), "missing") == []


@pytest.mark.asyncio
async def test_async_attach_trigger_builds_event_trigger():
    """Test a device trigger is attached as a filtered bus event."""
    callback = MagicMock()
    unsubscribe = MagicMock()
    attach = AsyncMock(return_value=unsubscribe)

    device = MagicMock()
    device.config_entries = {"entry_1"}
    registry = MagicMock()
    registry.async_get.return_value = device

    with (
        patch.object(device_trigger.dr, "async_get", return_value=registry),
        patch.object(device_trigger.event_trigger, "async_attach_trigger", attach),
        patch.object(device_trigger.event_trigger, "TRIGGER_SCHEMA", side_effect=lambda x: x),
    ):
        result = await device_trigger.async_attach_trigger(
            MagicMock(),
            {
                "type": "pressure_drop",
                "device_id": "device_1",
            },
            callback,
            {},
        )

    assert result is unsubscribe
    assert attach.call_count == 1
    hass, event_config, action, trigger_info = attach.call_args[0]
    assert event_config["event_type"] == EVENT_PRESSURE_DROP
    assert event_config["event_data"] == {"entry_id": "entry_1"}
    assert action is callback
