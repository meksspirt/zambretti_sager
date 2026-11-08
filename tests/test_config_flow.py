"""Unit tests for config flow helpers and validation."""

from __future__ import annotations

from unittest.mock import MagicMock

from homeassistant.data_entry_flow import AbortFlow
import pytest

from custom_components.zambretti_sager.config_flow import (
    ZambrettiSagerConfigFlow,
    ZambrettiSagerOptionsFlowHandler,
    _apply_location,
    _build_options_schema,
    _get_entry_value,
    _normalize_optional_entities,
)
from custom_components.zambretti_sager.const import (
    CONF_HUMIDITY_SENSOR,
    CONF_LATITUDE,
    CONF_LOCATION,
    CONF_LONGITUDE,
    CONF_PRESSURE_SENSOR,
    CONF_TEMPERATURE_SENSOR,
    CONF_USE_SEA_LEVEL,
    CONF_WIND_SENSOR,
    CONF_WIND_SPEED_SENSOR,
    DOMAIN,
)


def test_apply_location():
    """Test extracting latitude and longitude from location map dict."""
    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_LOCATION: {"latitude": 59.93, "longitude": 30.33},
    }
    processed = _apply_location(user_input)

    assert CONF_LATITUDE in processed
    assert CONF_LONGITUDE in processed
    assert processed[CONF_LATITUDE] == 59.93
    assert processed[CONF_LONGITUDE] == 30.33
    assert CONF_LOCATION not in processed


def test_normalize_optional_entities():
    """Test converting empty string optional sensor fields to None."""
    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_WIND_SENSOR: "",
        CONF_WIND_SPEED_SENSOR: "  ",
        CONF_TEMPERATURE_SENSOR: "sensor.temp",
        CONF_HUMIDITY_SENSOR: None,
    }
    normalized = _normalize_optional_entities(user_input)

    assert normalized[CONF_PRESSURE_SENSOR] == "sensor.barometer"
    assert normalized[CONF_WIND_SENSOR] is None
    assert normalized[CONF_WIND_SPEED_SENSOR] is None
    assert normalized[CONF_TEMPERATURE_SENSOR] == "sensor.temp"
    assert normalized[CONF_HUMIDITY_SENSOR] is None


def test_get_entry_value_prefers_options_even_when_none():
    """Test _get_entry_value respects cleared options (None) over data."""
    mock_entry = MagicMock()
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_WIND_SENSOR: "sensor.old_wind",
    }
    mock_entry.options = {
        CONF_WIND_SENSOR: None,
    }
    assert _get_entry_value(mock_entry, CONF_PRESSURE_SENSOR) == "sensor.barometer"
    assert _get_entry_value(mock_entry, CONF_WIND_SENSOR) is None


def test_build_options_schema():
    """Test unified _build_options_schema creates schema with current values."""
    mock_entry = MagicMock()
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_WIND_SENSOR: "sensor.wind",
        CONF_LATITUDE: 45.0,
        CONF_LONGITUDE: 10.0,
    }
    mock_entry.options = {}

    schema = _build_options_schema(mock_entry, default_lat=50.0, default_lon=20.0)
    assert schema is not None

    # Test with all optional sensors populated to cover all schema branches
    mock_entry_full = MagicMock()
    mock_entry_full.data = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_WIND_SENSOR: "sensor.wind",
        CONF_WIND_SPEED_SENSOR: "sensor.wind_speed",
        CONF_TEMPERATURE_SENSOR: "sensor.temperature",
        CONF_HUMIDITY_SENSOR: "sensor.humidity",
        CONF_LATITUDE: 45.0,
        CONF_LONGITUDE: 10.0,
    }
    mock_entry_full.options = {}
    schema_full = _build_options_schema(mock_entry_full, default_lat=50.0, default_lon=20.0)
    assert schema_full is not None

    # Test with empty optional sensors to cover the else branches
    mock_entry_empty = MagicMock()
    mock_entry_empty.data = {CONF_PRESSURE_SENSOR: "sensor.barometer"}
    mock_entry_empty.options = {}
    schema_empty = _build_options_schema(mock_entry_empty, default_lat=50.0, default_lon=20.0)
    assert schema_empty is not None


@pytest.mark.asyncio
async def test_flow_user_step_form():
    """Test user step displays form when user_input is None."""
    flow = ZambrettiSagerConfigFlow()
    result = await flow.async_step_user(user_input=None)
    assert result["type"] == "form"
    assert result["step_id"] == "user"
    assert result["data_schema"] is not None


@pytest.mark.asyncio
async def test_flow_user_step_creates_entry():
    """Test user step creates entry with normalized data on valid submission."""
    flow = ZambrettiSagerConfigFlow()
    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.my_pressure",
        CONF_WIND_SENSOR: "sensor.my_wind",
        CONF_WIND_SPEED_SENSOR: "",
        CONF_TEMPERATURE_SENSOR: "sensor.my_temp",
        CONF_HUMIDITY_SENSOR: "",
        CONF_USE_SEA_LEVEL: True,
        CONF_LOCATION: {"latitude": 51.5, "longitude": -0.1},
    }
    result = await flow.async_step_user(user_input=user_input)

    assert result["type"] == "create_entry"
    assert result["title"] == "Weather Forecaster"
    assert result["data"][CONF_PRESSURE_SENSOR] == "sensor.my_pressure"
    assert result["data"][CONF_WIND_SENSOR] == "sensor.my_wind"
    assert result["data"][CONF_WIND_SPEED_SENSOR] is None
    assert result["data"][CONF_TEMPERATURE_SENSOR] == "sensor.my_temp"
    assert result["data"][CONF_HUMIDITY_SENSOR] is None
    assert result["data"][CONF_LATITUDE] == 51.5
    assert result["data"][CONF_LONGITUDE] == -0.1
    assert result["data"][CONF_USE_SEA_LEVEL] is True
    assert flow.unique_id == f"{DOMAIN}_sensor.my_pressure"


@pytest.mark.asyncio
async def test_flow_user_step_duplicate_abort():
    """Test user step aborts if unique_id is already configured."""
    flow = ZambrettiSagerConfigFlow()
    flow._existing_unique_ids.add(f"{DOMAIN}_sensor.my_pressure")

    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.my_pressure",
        CONF_LOCATION: {"latitude": 51.5, "longitude": -0.1},
    }
    with pytest.raises(AbortFlow) as exc_info:
        await flow.async_step_user(user_input=user_input)
    assert exc_info.value.reason == "already_configured"


@pytest.mark.asyncio
async def test_flow_reconfigure_step_form():
    """Test reconfigure step displays form with existing entry schema."""
    flow = ZambrettiSagerConfigFlow()
    mock_entry = MagicMock()
    mock_entry.unique_id = f"{DOMAIN}_sensor.old_p"
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.old_p",
        CONF_LATITUDE: 48.8,
        CONF_LONGITUDE: 2.3,
    }
    mock_entry.options = {}
    flow._reconfigure_entry = mock_entry

    result = await flow.async_step_reconfigure(user_input=None)
    assert result["type"] == "form"
    assert result["step_id"] == "reconfigure"


@pytest.mark.asyncio
async def test_flow_reconfigure_step_success():
    """Test reconfigure step updates entry and reloads on valid input."""
    flow = ZambrettiSagerConfigFlow()
    mock_entry = MagicMock()
    mock_entry.unique_id = f"{DOMAIN}_sensor.old_p"
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.old_p",
        CONF_LATITUDE: 48.8,
        CONF_LONGITUDE: 2.3,
        "elevation": 150.0,
    }
    mock_entry.options = {}
    flow._reconfigure_entry = mock_entry

    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.old_p",
        CONF_LOCATION: {"latitude": 49.0, "longitude": 2.5},
        CONF_USE_SEA_LEVEL: True,
    }
    result = await flow.async_step_reconfigure(user_input=user_input)
    assert result["type"] == "abort"
    assert result["reason"] == "reconfigure_successful"
    assert result["data"][CONF_LATITUDE] == 49.0
    assert result["data"][CONF_LONGITUDE] == 2.5
    assert result["data"][CONF_USE_SEA_LEVEL] is True
    assert "elevation" not in result["data"]


@pytest.mark.asyncio
async def test_flow_reconfigure_step_changes_pressure_sensor_success():
    """Test reconfigure step successfully updates pressure sensor and unique_id."""
    flow = ZambrettiSagerConfigFlow()
    mock_entry = MagicMock()
    mock_entry.unique_id = f"{DOMAIN}_sensor.old_p"
    mock_entry.data = {CONF_PRESSURE_SENSOR: "sensor.old_p"}
    mock_entry.options = {}
    flow._reconfigure_entry = mock_entry

    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.new_p",
        CONF_LOCATION: {"latitude": 48.8, "longitude": 2.3},
    }
    result = await flow.async_step_reconfigure(user_input=user_input)
    assert result["type"] == "abort"
    assert result["reason"] == "reconfigure_successful"
    assert flow.unique_id == f"{DOMAIN}_sensor.new_p"
    flow.hass.config_entries.async_update_entry.assert_called_once_with(
        mock_entry, unique_id=f"{DOMAIN}_sensor.new_p"
    )


@pytest.mark.asyncio
async def test_flow_reconfigure_step_duplicate_abort():
    """Test reconfigure step aborts if user changes pressure sensor to an already configured sensor."""
    flow = ZambrettiSagerConfigFlow()
    flow._existing_unique_ids.add(f"{DOMAIN}_sensor.existing_p")
    mock_entry = MagicMock()
    mock_entry.unique_id = f"{DOMAIN}_sensor.old_p"
    mock_entry.data = {CONF_PRESSURE_SENSOR: "sensor.old_p"}
    flow._reconfigure_entry = mock_entry

    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.existing_p",
        CONF_LOCATION: {"latitude": 48.8, "longitude": 2.3},
    }
    with pytest.raises(AbortFlow) as exc_info:
        await flow.async_step_reconfigure(user_input=user_input)
    assert exc_info.value.reason == "already_configured"


@pytest.mark.asyncio
async def test_options_flow():
    """Test options flow handler displays form and saves options."""
    mock_entry = MagicMock()
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_LATITUDE: 50.0,
        CONF_LONGITUDE: 15.0,
    }
    mock_entry.options = {}

    options_flow = ZambrettiSagerOptionsFlowHandler()
    options_flow.config_entry = mock_entry

    # Form step
    form_res = await options_flow.async_step_init(user_input=None)
    assert form_res["type"] == "form"
    assert form_res["step_id"] == "init"

    # Save step
    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_WIND_SENSOR: "sensor.new_wind",
        CONF_LOCATION: {"latitude": 52.0, "longitude": 16.0},
    }
    save_res = await options_flow.async_step_init(user_input=user_input)
    assert save_res["type"] == "create_entry"
    assert save_res["data"][CONF_WIND_SENSOR] == "sensor.new_wind"
    assert save_res["data"][CONF_LATITUDE] == 52.0
    assert save_res["data"][CONF_LONGITUDE] == 16.0


def test_async_get_options_flow():
    """Test async_get_options_flow factory method."""
    mock_entry = MagicMock()
    handler = ZambrettiSagerConfigFlow.async_get_options_flow(mock_entry)
    assert isinstance(handler, ZambrettiSagerOptionsFlowHandler)


@pytest.mark.asyncio
async def test_flow_user_step_friendly_name_title():
    """Test user step uses pressure sensor friendly_name as config entry title."""
    flow = ZambrettiSagerConfigFlow()
    flow.hass.states.get.return_value = MagicMock(
        attributes={"friendly_name": "  Living Room Barometer  "}
    )
    user_input = {
        CONF_PRESSURE_SENSOR: "sensor.living_room_pressure",
        CONF_LOCATION: {"latitude": 51.5, "longitude": -0.1},
    }
    result = await flow.async_step_user(user_input=user_input)
    assert result["type"] == "create_entry"
    assert result["title"] == "Living Room Barometer"


@pytest.mark.asyncio
async def test_options_flow_clears_cached_elevation_on_coordinate_change():
    """Test options flow invalidates cached elevation when coordinates change."""
    mock_entry = MagicMock()
    mock_entry.data = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_LATITUDE: 50.0,
        CONF_LONGITUDE: 15.0,
        "elevation": 210.0,
    }
    mock_entry.options = {"elevation": 210.0}

    options_flow = ZambrettiSagerOptionsFlowHandler()
    options_flow.config_entry = mock_entry

    # Unchanged coordinates -> keeps cached elevation
    same_input = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_LOCATION: {"latitude": 50.0, "longitude": 15.0},
    }
    res_same = await options_flow.async_step_init(user_input=same_input)
    assert res_same["type"] == "create_entry"
    options_flow.hass.config_entries.async_update_entry.assert_not_called()

    # Changed coordinates -> clears cached elevation from entry.data
    changed_input = {
        CONF_PRESSURE_SENSOR: "sensor.barometer",
        CONF_LOCATION: {"latitude": 51.0, "longitude": 16.0},
    }
    res_changed = await options_flow.async_step_init(user_input=changed_input)
    assert res_changed["type"] == "create_entry"
    assert "elevation" not in res_changed["data"]
    options_flow.hass.config_entries.async_update_entry.assert_called_once()
    updated_data = options_flow.hass.config_entries.async_update_entry.call_args[1]["data"]
    assert "elevation" not in updated_data
