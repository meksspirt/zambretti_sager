"""Unit tests for Lovelace frontend card registration."""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from custom_components.zambretti_sager.const import JSMODULES, URL_BASE
from custom_components.zambretti_sager.frontend import (
    JSModuleRegistration,
    _get_lovelace,
    _get_resource_mode,
)


def test_get_lovelace():
    """Test retrieving LovelaceData from hass.data with primary and fallback keys."""
    mock_hass = MagicMock()
    mock_lovelace = MagicMock()

    # Primary key found
    mock_hass.data = {"lovelace": mock_lovelace}
    assert _get_lovelace(mock_hass) == mock_lovelace

    # Neither key found
    mock_hass.data = {}
    assert _get_lovelace(mock_hass) is None


def test_get_resource_mode():
    """Test detecting Lovelace resource mode across HA versions."""
    # HA 2026+ style: resource_mode attribute
    obj1 = MagicMock(spec=["resource_mode"])
    obj1.resource_mode = "storage"
    assert _get_resource_mode(obj1) == "storage"

    # Older HA style: mode attribute
    obj2 = MagicMock(spec=["mode"])
    obj2.mode = "yaml"
    assert _get_resource_mode(obj2) == "yaml"

    # Default fallback
    obj3 = MagicMock(spec=[])
    assert _get_resource_mode(obj3) == "yaml"


@pytest.mark.asyncio
async def test_async_register_when_lovelace_is_none():
    """Test registration when Lovelace data is None."""
    mock_hass = MagicMock()
    mock_hass.data = {}
    mock_hass.http.async_register_static_paths = AsyncMock()

    reg = JSModuleRegistration(mock_hass)
    await reg.async_register()

    mock_hass.http.async_register_static_paths.assert_called_once()


@pytest.mark.asyncio
async def test_async_register_path_already_registered():
    """Test registration when static path is already registered (RuntimeError)."""
    mock_hass = MagicMock()
    mock_hass.data = {}
    mock_hass.http.async_register_static_paths = AsyncMock(
        side_effect=RuntimeError("Already added")
    )

    reg = JSModuleRegistration(mock_hass)
    # Should not raise exception
    await reg._async_register_path()


@pytest.mark.asyncio
async def test_async_register_yaml_mode():
    """Test registration when Lovelace is in YAML mode."""
    mock_hass = MagicMock()
    mock_lovelace = MagicMock(resource_mode="yaml")
    mock_hass.data = {"lovelace": mock_lovelace}
    mock_hass.http.async_register_static_paths = AsyncMock()

    reg = JSModuleRegistration(mock_hass)
    await reg.async_register()


@pytest.mark.asyncio
async def test_async_register_storage_mode_creates_resource():
    """Test registration in storage mode creates item when not existing."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    mock_resources.loaded = True
    mock_resources.async_items.return_value = []
    mock_resources.async_create_item = AsyncMock()

    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}
    mock_hass.http.async_register_static_paths = AsyncMock()

    reg = JSModuleRegistration(mock_hass)
    await reg.async_register()

    mock_resources.async_create_item.assert_called_once()
    created_arg = mock_resources.async_create_item.call_args[0][0]
    assert created_arg["res_type"] == "module"
    assert created_arg["url"].startswith(f"{URL_BASE}/zambretti-weather-card.js")


@pytest.mark.asyncio
async def test_async_register_storage_mode_updates_version_and_removes_duplicates():
    """Test registration updates existing item if version differs and deletes duplicates."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    mock_resources.loaded = True
    # Two existing entries: one outdated version, one duplicate
    mock_resources.async_items.return_value = [
        {"id": "res_1", "url": f"{URL_BASE}/zambretti-weather-card.js?v=0.1.0"},
        {"id": "res_2", "url": f"{URL_BASE}/zambretti-weather-card.js?v=0.1.0"},
    ]
    mock_resources.async_update_item = AsyncMock()
    mock_resources.async_delete_item = AsyncMock()

    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}
    mock_hass.http.async_register_static_paths = AsyncMock()

    reg = JSModuleRegistration(mock_hass)
    await reg.async_register()

    # Updates primary
    mock_resources.async_update_item.assert_called_once()
    # Deletes duplicate
    mock_resources.async_delete_item.assert_called_once_with("res_2")


@pytest.mark.asyncio
async def test_async_register_storage_mode_already_up_to_date():
    """Test registration is no-op when resource is already at the current version."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    mock_resources.loaded = True
    expected_url = f"{URL_BASE}/{JSMODULES[0]['filename']}?v={JSMODULES[0]['version']}"
    mock_resources.async_items.return_value = [
        {"id": "res_1", "url": expected_url},
    ]
    mock_resources.async_update_item = AsyncMock()
    mock_resources.async_create_item = AsyncMock()

    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}
    mock_hass.http.async_register_static_paths = AsyncMock()

    reg = JSModuleRegistration(mock_hass)
    await reg.async_register()

    mock_resources.async_create_item.assert_not_called()
    mock_resources.async_update_item.assert_not_called()


@pytest.mark.asyncio
async def test_async_wait_for_lovelace_resources_retries():
    """Test retry mechanism when Lovelace resources are not loaded immediately."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    mock_resources.loaded = False
    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}

    reg = JSModuleRegistration(mock_hass)

    with patch("custom_components.zambretti_sager.frontend.async_call_later") as mock_call_later:
        await reg._async_wait_for_lovelace_resources()
        assert mock_call_later.call_count == 1
        # Extract callback and trigger max retries
        callback = mock_call_later.call_args[0][2]
        reg._lovelace_retries = 9
        await callback(0)
        assert reg._lovelace_retries == 10


def test_get_path_and_version_helpers():
    """Test URL parsing helpers _get_path and _get_version."""
    mock_hass = MagicMock()
    reg = JSModuleRegistration(mock_hass)

    assert reg._get_path("/path/card.js?v=2.0.0") == "/path/card.js"
    assert reg._get_path("/path/card.js") == "/path/card.js"

    assert reg._get_version("/path/card.js?v=2.0.0") == "2.0.0"
    assert reg._get_version("/path/card.js") == "0"
    assert reg._get_version("/path/card.js?foo=bar") == "0"


@pytest.mark.asyncio
async def test_async_unregister():
    """Test unregistering Lovelace resources on removal."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    target_url = f"{URL_BASE}/zambretti-weather-card.js"
    mock_resources.async_items.return_value = [
        {"id": "res_1", "url": f"{target_url}?v=2.0.0"},
        {"id": "res_2", "url": "/other/card.js"},
    ]
    mock_resources.async_delete_item = AsyncMock()
    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}

    reg = JSModuleRegistration(mock_hass)
    await reg.async_unregister()

    mock_resources.async_delete_item.assert_called_once_with("res_1")

    # Unregister with non-storage mode is no-op
    mock_lovelace.resource_mode = "yaml"
    mock_resources.async_delete_item.reset_mock()
    await reg.async_unregister()
    mock_resources.async_delete_item.assert_not_called()


@pytest.mark.asyncio
async def test_clear_retry_timer_on_unregister():
    """Test pending Lovelace retry timer is canceled when unregistering."""
    mock_hass = MagicMock()
    mock_resources = MagicMock()
    mock_resources.loaded = False
    mock_lovelace = MagicMock(resource_mode="storage", resources=mock_resources)
    mock_hass.data = {"lovelace": mock_lovelace}

    cancel_handle = MagicMock()
    reg = JSModuleRegistration(mock_hass)

    with patch(
        "custom_components.zambretti_sager.frontend.async_call_later",
        return_value=cancel_handle,
    ):
        await reg._async_wait_for_lovelace_resources()
        assert reg._cancel_retry is cancel_handle

    # Unregister from a fresh JSModuleRegistration instance cancels stored handle via hass.data
    reg2 = JSModuleRegistration(mock_hass)
    mock_lovelace.resource_mode = "yaml"
    await reg2.async_unregister()
    cancel_handle.assert_called_once()
