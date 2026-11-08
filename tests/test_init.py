"""Unit tests for integration lifecycle and setup in __init__.py."""

from __future__ import annotations

from unittest.mock import AsyncMock, MagicMock, patch

import pytest

from custom_components.zambretti_sager import (
    _async_setup_frontend,
    _update_listener,
    _ws_get_version,
    async_remove_entry,
    async_setup,
    async_setup_entry,
    async_unload_entry,
)
from custom_components.zambretti_sager.const import VERSION


@pytest.mark.asyncio
async def test_ws_get_version():
    """Test websocket command returns current version."""
    mock_hass = MagicMock()
    mock_connection = MagicMock()
    msg = {"id": 42}

    await _ws_get_version(mock_hass, mock_connection, msg)
    mock_connection.send_result.assert_called_once_with(42, {"version": VERSION})


@pytest.mark.asyncio
async def test_async_setup():
    """Test async_setup registers websocket command and frontend resources."""
    mock_hass = MagicMock()

    with (
        patch(
            "custom_components.zambretti_sager.websocket_api.async_register_command"
        ) as mock_reg_ws,
        patch("custom_components.zambretti_sager._async_setup_frontend") as mock_reg_frontend,
    ):
        result = await async_setup(mock_hass, {})
        assert result is True
        mock_reg_ws.assert_called_once()
        mock_reg_frontend.assert_called_once_with(mock_hass)


@pytest.mark.asyncio
async def test_async_setup_frontend_error_handling():
    """Test _async_setup_frontend logs error when exception is raised."""
    mock_hass = MagicMock()
    with patch(
        "custom_components.zambretti_sager.JSModuleRegistration.async_register",
        side_effect=Exception("Lovelace error"),
    ):
        # Should not raise exception
        await _async_setup_frontend(mock_hass)


@pytest.mark.asyncio
async def test_async_setup_entry():
    """Test async_setup_entry creates coordinator, registers update listener and forwards platforms."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.title = "Test Station"
    mock_entry.entry_id = "test_entry_id"
    mock_entry.add_update_listener = MagicMock()

    mock_coord = MagicMock()
    mock_hass.config_entries.async_forward_entry_setups = AsyncMock()

    with (
        patch("custom_components.zambretti_sager._async_setup_frontend") as mock_reg_frontend,
        patch(
            "custom_components.zambretti_sager.async_create_coordinator",
            return_value=mock_coord,
        ) as mock_create_coord,
    ):
        res = await async_setup_entry(mock_hass, mock_entry)
        assert res is True
        mock_reg_frontend.assert_called_once_with(mock_hass)
        mock_create_coord.assert_called_once_with(mock_hass, mock_entry)
        assert mock_entry.runtime_data == mock_coord
        mock_entry.add_update_listener.assert_called_once()
        mock_hass.config_entries.async_forward_entry_setups.assert_called_once()


@pytest.mark.asyncio
async def test_update_listener():
    """Test _update_listener reloads config entry."""
    mock_hass = MagicMock()
    mock_hass.config_entries.async_reload = AsyncMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_id"

    await _update_listener(mock_hass, mock_entry)
    mock_hass.config_entries.async_reload.assert_called_once_with("test_id")


@pytest.mark.asyncio
async def test_async_unload_entry():
    """Test async_unload_entry unloads platforms."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_hass.config_entries.async_unload_platforms = AsyncMock(return_value=True)

    result = await async_unload_entry(mock_hass, mock_entry)
    assert result is True
    mock_hass.config_entries.async_unload_platforms.assert_called_once()


@pytest.mark.asyncio
async def test_async_remove_entry_cleans_resources_and_handles_exception():
    """Test async_remove_entry removes Lovelace resources and gracefully handles failure."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "e1"

    # Only this entry exists -> cleans resources
    mock_hass.config_entries.async_entries.return_value = [mock_entry]

    with patch(
        "custom_components.zambretti_sager.JSModuleRegistration.async_unregister",
        side_effect=Exception("Unregister failed"),
    ):
        # Should catch and log warning without raising
        await async_remove_entry(mock_hass, mock_entry)


@pytest.mark.asyncio
async def test_async_setup_frontend_idempotency_and_reset_on_remove():
    """Test _async_setup_frontend runs once when hass.data is a dict and resets on removal."""
    mock_hass = MagicMock()
    mock_hass.data = {}
    mock_entry = MagicMock(entry_id="e1")
    mock_hass.config_entries.async_entries.return_value = [mock_entry]

    with (
        patch(
            "custom_components.zambretti_sager.JSModuleRegistration.async_register",
            new_callable=AsyncMock,
        ) as mock_register,
        patch(
            "custom_components.zambretti_sager.JSModuleRegistration.async_unregister",
            new_callable=AsyncMock,
        ) as mock_unregister,
    ):
        await _async_setup_frontend(mock_hass)
        await _async_setup_frontend(mock_hass)
        assert mock_register.await_count == 1

        await async_remove_entry(mock_hass, mock_entry)
        mock_unregister.assert_awaited_once()

        # Re-adding an entry after full removal registers frontend again
        await _async_setup_frontend(mock_hass)
        assert mock_register.await_count == 2
