"""Unit tests for sensor entities and weather platform."""

from __future__ import annotations

import datetime
from unittest.mock import MagicMock

from homeassistant.components.sensor import SensorDeviceClass
import pytest

from custom_components.zambretti_sager.algorithms import SAGER_OPTIONS, ZAMBRETTI_OPTIONS
from custom_components.zambretti_sager.coordinator import ForecastData
from custom_components.zambretti_sager.sensor import (
    SENSOR_DESCRIPTIONS,
    WeatherSensor,
    _get_base_attrs,
)
from custom_components.zambretti_sager.weather import ZambrettiWeather


def _sensor(coordinator, key: str) -> WeatherSensor:
    """Return the sensor entity described by ``key``."""
    description = next(desc for desc in SENSOR_DESCRIPTIONS if desc.key == key)
    return WeatherSensor(coordinator, description)


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
        temperature_available=True,
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
    sensor = _sensor(mock_coordinator, "zambretti")
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
    sensor = _sensor(mock_coordinator, "sager")
    assert sensor.translation_key == "sager_forecast"
    assert sensor.device_class == SensorDeviceClass.ENUM
    assert sensor.options == SAGER_OPTIONS
    assert sensor.unique_id == "test_entry_id_sager"
    assert sensor.native_value == "sager_fair_improving"
    assert sensor.extra_state_attributes == {}


def test_forecast_horizon_sensors(mock_coordinator):
    """Test 6h, 12h, and 24h Zambretti extrapolation sensors."""
    s6 = _sensor(mock_coordinator, "zambretti_6h")
    assert s6.translation_key == "zambretti_forecast_6h"
    assert s6.device_class == SensorDeviceClass.ENUM
    assert s6.options == ZAMBRETTI_OPTIONS
    assert s6.native_value == "fairly_fine_improving"
    assert s6.extra_state_attributes == {"predicted_pressure_hpa": 1020.8}

    s12 = _sensor(mock_coordinator, "zambretti_12h")
    assert s12.translation_key == "zambretti_forecast_12h"
    assert s12.device_class == SensorDeviceClass.ENUM
    assert s12.options == ZAMBRETTI_OPTIONS
    assert s12.native_value == "fine_weather"
    assert s12.extra_state_attributes == {"predicted_pressure_hpa": 1025.2}

    s24 = _sensor(mock_coordinator, "zambretti_24h")
    assert s24.translation_key == "zambretti_forecast_24h"
    assert s24.device_class == SensorDeviceClass.ENUM
    assert s24.options == ZAMBRETTI_OPTIONS
    assert s24.native_value == "settled_fine"
    assert s24.extra_state_attributes == {"predicted_pressure_hpa": 1032.2}


def test_precipitation_probability_sensor(mock_coordinator):
    """Test PrecipitationProbability sensor."""
    sensor = _sensor(mock_coordinator, "precipitation_probability")
    assert sensor.translation_key == "precipitation_probability"
    assert sensor.native_value == 10
    assert sensor.extra_state_attributes == {}


def test_last_update_sensor(mock_coordinator):
    """Test LastUpdateSensor properties and entity category."""
    sensor = _sensor(mock_coordinator, "last_update")
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
    assert 0 <= forecast[0]["precipitation_probability"] <= 100
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
    assert len(added) == 22


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
    """Test _get_base_attrs and the shared WeatherSensor entity."""
    assert _get_base_attrs(None) == {}

    base = _sensor(mock_coordinator, "zambretti")
    assert base.translation_key == "zambretti_forecast"

    # Base attributes with night mode
    mock_coordinator.data.is_night = True
    attrs = _get_base_attrs(mock_coordinator.data)
    assert attrs["is_night"] is True


def test_base_attrs_include_all_optional_observations():
    """Test every optional observation is exported on the main sensor."""
    snapshot = ForecastData(
        available=True,
        p_now=1013.0,
        p_3h=1012.0,
        p_6h=1010.0,
        p_12h=1008.0,
        p_24h=1005.0,
        raw_pressure=1009.0,
        pressure_change_24h=-8.0,
        trend_rate_3h=-0.4,
        trend_r2=0.91,
        dew_point=6.0,
        consensus_state="fine_weather",
        model_divergence=12,
        confidence=88,
        wmo_tendency_code=2,
        rain=False,
    )

    attrs = _get_base_attrs(snapshot)

    assert attrs["station_pressure_hpa"] == 1009.0
    assert attrs["pressure_24h_ago"] == 1005.0
    assert attrs["pressure_change_24h"] == -8.0
    assert attrs["trend_rate_3h"] == -0.4
    assert attrs["trend_r2"] == 0.91
    assert attrs["dew_point"] == 6.0
    assert attrs["consensus_state"] == "fine_weather"
    assert attrs["model_divergence"] == 12
    assert attrs["confidence"] == 88
    assert attrs["wmo_tendency_code"] == 2
    assert attrs["rain"] is False


def test_sensor_unavailable_paths(mock_coordinator):
    """Test sensors with no data or no value for their metric."""
    mock_coordinator.data = None
    sensor = _sensor(mock_coordinator, "sea_level_pressure")
    assert sensor.available is False
    assert sensor.native_value is None

    mock_coordinator.data = ForecastData(available=True, p_now=1013.0)
    trend_sensor = _sensor(mock_coordinator, "pressure_trend_3h")
    assert trend_sensor.available is False
    assert trend_sensor.native_value is None

    # Unavailable coordinator data must make sensors unavailable even with available_fn.
    mock_coordinator.data = ForecastData(
        available=False,
        p_now=1013.0,
        delta_3h=-1.0,
        forecast_accuracy=85,
    )
    assert trend_sensor.available is False
    assert trend_sensor.extra_state_attributes == {}
    assert _sensor(mock_coordinator, "forecast_accuracy_24h").available is False

    # Before first 24h verification completes, ledger sensors stay available (Unknown, not Unavailable).
    mock_coordinator.data = ForecastData(
        available=True, forecast_accuracy=None, last_forecast_hit=None
    )
    acc = _sensor(mock_coordinator, "forecast_accuracy_24h")
    hit = _sensor(mock_coordinator, "last_forecast_hit")
    assert acc.available is True
    assert acc.native_value is None
    assert acc.extra_state_attributes["calibration_samples"] == 0
    assert hit.available is True
    assert hit.native_value is None


def test_pressure_delta_sensors_use_pressure_device_class(mock_coordinator):
    """Test pressure delta sensors expose SensorDeviceClass.PRESSURE for HA unit conversion."""
    assert _sensor(mock_coordinator, "pressure_trend_3h").device_class == SensorDeviceClass.PRESSURE
    assert (
        _sensor(mock_coordinator, "pressure_change_24h").device_class == SensorDeviceClass.PRESSURE
    )


def test_backwards_compatibility_sensor_classes(mock_coordinator):
    """Test legacy sensor subclasses remain importable and functional."""
    from custom_components.zambretti_sager.sensor import (
        LastUpdateSensor,
        PrecipitationProbability,
        SagerSensor,
        WeatherSensorBase,
        ZambrettiForecast6h,
        ZambrettiForecast12h,
        ZambrettiForecast24h,
        ZambrettiSensor,
    )

    assert WeatherSensorBase(mock_coordinator).translation_key == "zambretti_forecast"
    assert ZambrettiSensor(mock_coordinator).translation_key == "zambretti_forecast"
    assert SagerSensor(mock_coordinator).translation_key == "sager_forecast"
    assert ZambrettiForecast6h(mock_coordinator).translation_key == "zambretti_forecast_6h"
    assert ZambrettiForecast12h(mock_coordinator).translation_key == "zambretti_forecast_12h"
    assert ZambrettiForecast24h(mock_coordinator).translation_key == "zambretti_forecast_24h"
    assert PrecipitationProbability(mock_coordinator).native_value == 10
    assert LastUpdateSensor(mock_coordinator).translation_key == "last_update"


@pytest.mark.asyncio
async def test_weather_snow_fog_dew_point_and_horizon_precip(mock_coordinator):
    """Test weather entity exposes dew point, snow/fog conditions, and horizon precip."""
    mock_coordinator.data.dew_point = 12.1
    mock_coordinator.data.snow_probability = 80
    mock_coordinator.data.temperature = -2.0
    mock_coordinator.data.temperature_available = True
    mock_coordinator.data.consensus_state = "unsettled_rain_later"
    weather = ZambrettiWeather(mock_coordinator)
    assert weather.native_dew_point == 12.1
    assert weather.condition == "snowy"

    mock_coordinator.data.temperature = 2.0
    mock_coordinator.data.snow_probability = 35
    assert weather.condition == "snowy-rainy"

    mock_coordinator.data.consensus_state = "fine_weather"
    mock_coordinator.data.snow_probability = 0
    mock_coordinator.data.fog_probability = 85
    assert weather.condition == "fog"

    mock_coordinator.data.fog_probability = 10
    mock_coordinator.data.predicted_p_6h = 995.0
    mock_coordinator.data.predicted_p_24h = 1030.0
    hourly = await weather.async_forecast_hourly()
    assert hourly is not None
    assert hourly[0]["precipitation_probability"] > hourly[2]["precipitation_probability"]

    mock_coordinator.data.apparent_temperature = -6.5
    mock_coordinator.data.cloud_base = 850
    mock_coordinator.data.barometric_stress = 42
    assert weather.native_apparent_temperature == -6.5
    assert _sensor(mock_coordinator, "apparent_temperature").native_value == -6.5
    assert _sensor(mock_coordinator, "cloud_base").native_value == 850
    assert _sensor(mock_coordinator, "barometric_stress").native_value == 42
