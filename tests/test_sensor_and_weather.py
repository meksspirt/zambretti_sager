"""Unit tests for sensor entities and weather platform."""

from __future__ import annotations

import datetime
from unittest.mock import MagicMock

from homeassistant.components.sensor import SensorDeviceClass
import pytest

from custom_components.zambretti_sager.algorithms import SAGER_OPTIONS, ZAMBRETTI_OPTIONS
from custom_components.zambretti_sager.coordinator import ForecastData
from custom_components.zambretti_sager.sensor import (
    LastUpdateSensor,
    PrecipitationProbability,
    SagerSensor,
    ZambrettiForecast6h,
    ZambrettiForecast12h,
    ZambrettiForecast24h,
    ZambrettiSensor,
)
from custom_components.zambretti_sager.weather import ZambrettiWeather


@pytest.fixture
def mock_coordinator():
    """Create a mock coordinator with ForecastData."""
    coordinator = MagicMock()
    coordinator.entry.entry_id = "test_entry_id"
    coordinator.pressure_id = "sensor.barometer"
    coordinator.wind_id = "sensor.wind"
    coordinator.altitude = 120.0

    coordinator.data = ForecastData(
        available=True,
        p_now=1016.4,
        p_3h=1014.2,
        p_6h=1012.0,
        p_12h=1008.5,
        wind_degrees=270.0,
        wind_direction="W",
        wind_speed=3.5,
        humidity=55.0,
        altitude=120.0,
        temperature=21.5,
        is_night=False,
        last_updated=datetime.datetime(2026, 8, 22, 16, 0, tzinfo=datetime.UTC),
        delta_3h=2.2,
        trend_label="↑ Rising",
        zambretti_state="settled_fine",
        sager_state="sager_fair_improving",
        zambretti_6h="fairly_fine_improving",
        predicted_p_6h=1020.8,
        zambretti_12h="fine_weather",
        predicted_p_12h=1025.2,
        zambretti_24h="settled_fine",
        predicted_p_24h=1032.2,
        precip_probability=10,
    )
    return coordinator


def test_zambretti_sensor(mock_coordinator):
    """Test ZambrettiSensor properties and attributes."""
    sensor = ZambrettiSensor(mock_coordinator)
    assert sensor.translation_key == "zambretti_forecast"
    assert sensor.device_class == SensorDeviceClass.ENUM
    assert sensor.options == ZAMBRETTI_OPTIONS
    assert sensor.unique_id == "test_entry_id_zambretti"
    assert sensor.native_value == "settled_fine"
    assert sensor.available is True
    assert "pressure_hpa" in sensor._unrecorded_attributes

    attrs = sensor.extra_state_attributes
    assert attrs["pressure_sensor"] == "sensor.barometer"
    assert attrs["pressure_hpa"] == 1016.4
    assert attrs["pressure_3h_ago"] == 1014.2
    assert attrs["trend"] == "↑ Rising"
    assert attrs["wind_direction"] == "W"


def test_sager_sensor(mock_coordinator):
    """Test SagerSensor properties."""
    sensor = SagerSensor(mock_coordinator)
    assert sensor.translation_key == "sager_forecast"
    assert sensor.device_class == SensorDeviceClass.ENUM
    assert sensor.options == SAGER_OPTIONS
    assert sensor.unique_id == "test_entry_id_sager"
    assert sensor.native_value == "sager_fair_improving"
    assert sensor.extra_state_attributes == {}


def test_forecast_horizon_sensors(mock_coordinator):
    """Test 6h, 12h, and 24h Zambretti extrapolation sensors."""
    s6 = ZambrettiForecast6h(mock_coordinator)
    assert s6.translation_key == "zambretti_forecast_6h"
    assert s6.device_class == SensorDeviceClass.ENUM
    assert s6.options == ZAMBRETTI_OPTIONS
    assert s6.native_value == "fairly_fine_improving"
    assert s6.extra_state_attributes == {"predicted_pressure_hpa": 1020.8}

    s12 = ZambrettiForecast12h(mock_coordinator)
    assert s12.translation_key == "zambretti_forecast_12h"
    assert s12.device_class == SensorDeviceClass.ENUM
    assert s12.options == ZAMBRETTI_OPTIONS
    assert s12.native_value == "fine_weather"
    assert s12.extra_state_attributes == {"predicted_pressure_hpa": 1025.2}

    s24 = ZambrettiForecast24h(mock_coordinator)
    assert s24.translation_key == "zambretti_forecast_24h"
    assert s24.device_class == SensorDeviceClass.ENUM
    assert s24.options == ZAMBRETTI_OPTIONS
    assert s24.native_value == "settled_fine"
    assert s24.extra_state_attributes == {"predicted_pressure_hpa": 1032.2}


def test_precipitation_probability_sensor(mock_coordinator):
    """Test PrecipitationProbability sensor."""
    sensor = PrecipitationProbability(mock_coordinator)
    assert sensor.translation_key == "precipitation_probability"
    assert sensor.native_value == 10
    assert sensor.extra_state_attributes == {}


def test_last_update_sensor(mock_coordinator):
    """Test LastUpdateSensor properties and entity category."""
    sensor = LastUpdateSensor(mock_coordinator)
    assert sensor.translation_key == "last_update"
    assert sensor.available is True
    assert sensor.native_value == datetime.datetime(2026, 8, 22, 16, 0, tzinfo=datetime.UTC)
    assert sensor.force_update is False


@pytest.mark.asyncio
async def test_weather_entity(mock_coordinator):
    """Test ZambrettiWeather entity condition, night mode, and enriched forecast properties."""
    weather = ZambrettiWeather(mock_coordinator)
    assert weather._attr_name is None
    assert weather.available is True

    # Daytime fine weather -> sunny
    assert weather.condition == "sunny"
    assert weather.native_temperature == 21.5
    assert weather.native_pressure == 1016.4
    assert weather.native_humidity == 55.0
    assert weather.native_wind_speed == 3.5
    assert weather.wind_bearing == 270.0

    forecast = await weather.async_forecast_hourly()
    assert forecast is not None
    assert len(forecast) == 3
    assert forecast[0]["condition"] is not None
    assert forecast[0]["native_temperature"] == 21.5
    assert forecast[0]["native_pressure"] == 1020.8
    assert forecast[0]["precipitation_probability"] == 10
    assert forecast[0]["wind_speed"] == 3.5
    assert forecast[0]["wind_bearing"] == 270.0

    # Nighttime fine weather -> clear-night
    mock_coordinator.data.is_night = True
    assert weather.condition == "clear-night"

    # Stable state night/day mapping
    mock_coordinator.data.zambretti_state = "stable"
    mock_coordinator.data.is_night = False
    assert weather.condition == "sunny"
    mock_coordinator.data.is_night = True
    assert weather.condition == "clear-night"

    # Availability when coordinator data is unavailable or None
    mock_coordinator.data.available = False
    assert weather.available is False
    mock_coordinator.data = None
    assert weather.available is False


@pytest.mark.asyncio
async def test_sensor_async_setup_entry(mock_coordinator):
    """Test async_setup_entry in sensor platform registers all sensor entities."""
    from custom_components.zambretti_sager import sensor

    entry = MagicMock()
    entry.runtime_data = mock_coordinator
    added = []

    def mock_add(entities):
        added.extend(entities)

    await sensor.async_setup_entry(MagicMock(), entry, mock_add)
    assert len(added) == 7


@pytest.mark.asyncio
async def test_weather_async_setup_entry_and_methods(mock_coordinator):
    """Test weather platform async_setup_entry, hourly and daily forecast methods."""
    from custom_components.zambretti_sager import weather

    entry = MagicMock()
    entry.runtime_data = mock_coordinator
    added = []

    def mock_add(entities):
        added.extend(entities)

    await weather.async_setup_entry(MagicMock(), entry, mock_add)
    assert len(added) == 1
    w = added[0]

    hourly = await w.async_forecast_hourly()
    daily = await w.async_forecast_daily()
    assert hourly is not None and len(hourly) == 3
    assert daily is not None and len(daily) == 1
    assert daily[0]["native_pressure"] == 1032.2

    # Empty forecast when data is unavailable or p_now is None
    mock_coordinator.data.available = False
    assert await w.async_forecast_hourly() is None
    assert await w.async_forecast_daily() is None
    mock_coordinator.data.available = True
    mock_coordinator.data.p_now = None
    assert await w.async_forecast_hourly() is None
    assert await w.async_forecast_daily() is None


def test_zambretti_entity_device_naming(mock_coordinator):
    """Test ZambrettiEntity device naming for default and custom entry titles."""
    from homeassistant.helpers.device_registry import DeviceEntryType

    from custom_components.zambretti_sager.entity import ZambrettiEntity

    mock_coordinator.entry.title = "Weather Forecaster"
    e_default = ZambrettiEntity(mock_coordinator, "test_default")
    assert e_default._attr_device_info["name"] == "Weather Station"
    assert e_default._attr_device_info["entry_type"] == DeviceEntryType.SERVICE

    mock_coordinator.entry.title = None
    e_none = ZambrettiEntity(mock_coordinator, "test_none")
    assert e_none._attr_device_info["name"] == "Weather Station"

    mock_coordinator.entry.title = "Dacha Barometer"
    e_custom = ZambrettiEntity(mock_coordinator, "test_custom")
    assert e_custom._attr_device_info["name"] == "Dacha Barometer"


def test_sensor_helpers_and_base_class(mock_coordinator):
    """Test _get_base_attrs and WeatherSensorBase fallback."""
    from custom_components.zambretti_sager.sensor import (
        WeatherSensorBase,
        _get_base_attrs,
    )

    assert _get_base_attrs(None) == {}

    base = WeatherSensorBase(mock_coordinator)
    assert base.translation_key == "zambretti_forecast"

    # Base attributes with night mode
    mock_coordinator.data.is_night = True
    attrs = _get_base_attrs(mock_coordinator.data)
    assert attrs["is_night"] is True
