"""Unit tests for config flow helpers and validation."""

from __future__ import annotations

from unittest.mock import MagicMock

from custom_components.zambretti_sager.config_flow import (
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
    CONF_WIND_SENSOR,
    CONF_WIND_SPEED_SENSOR,
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
