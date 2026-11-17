"""Unit tests for the Zambretti & Sager alert binary sensors."""

from __future__ import annotations

from unittest.mock import MagicMock

import pytest

from custom_components.zambretti_sager.binary_sensor import (
    BINARY_SENSOR_DESCRIPTIONS,
    ZambrettiBinarySensor,
)
from custom_components.zambretti_sager.coordinator import ForecastData


def _coordinator(data: ForecastData) -> MagicMock:
    """Build a coordinator mock with default alert thresholds."""
    coordinator = MagicMock()
    coordinator.entry.entry_id = "test_entry"
    coordinator.entry.title = "Test Station"
    coordinator.data = data
    coordinator.falling_rapid_threshold = 1.6
    coordinator.storm_precip_threshold = 75
    coordinator.frost_temp_threshold = 2.0
    coordinator.fog_humidity_threshold = 95.0
    return coordinator


def _sensor(coordinator: MagicMock, key: str) -> ZambrettiBinarySensor:
    """Return the binary sensor described by ``key``."""
    description = next(desc for desc in BINARY_SENSOR_DESCRIPTIONS if desc.key == key)
    return ZambrettiBinarySensor(coordinator, description)


def _base(**overrides) -> ForecastData:
    """Return a settled, mild ForecastData snapshot."""
    values = {
        "available": True,
        "p_now": 1015.0,
        "p_3h": 1014.0,
        "delta_3h": 1.0,
        "zambretti_state": "fine_weather",
        "consensus_state": "fine_weather",
        "precip_probability": 10,
        "temperature": 15.0,
        "temperature_available": True,
        "humidity": 60.0,
        "fog_probability": 5,
    }
    values.update(overrides)
    return ForecastData(**values)


def test_binary_sensor_descriptions_cover_all_alerts():
    """Test that all four documented alerts are exposed."""
    assert {desc.key for desc in BINARY_SENSOR_DESCRIPTIONS} == {
        "pressure_falling_rapidly",
        "storm_warning",
        "frost_risk",
        "fog_risk",
    }


def test_pressure_falling_rapidly_threshold():
    """Test rapid pressure fall detection uses the configured threshold."""
    falling = _sensor(_coordinator(_base(delta_3h=-2.0)), "pressure_falling_rapidly")
    assert falling.is_on is True
    assert falling.extra_state_attributes["threshold"] == 1.6

    calm = _sensor(_coordinator(_base(delta_3h=-0.5)), "pressure_falling_rapidly")
    assert calm.is_on is False

    unknown = _sensor(_coordinator(_base(delta_3h=None)), "pressure_falling_rapidly")
    assert unknown.is_on is None


def test_storm_warning_requires_probability_and_severity_or_fall():
    """Test storm warning combinations."""
    storm = _sensor(
        _coordinator(_base(precip_probability=90, delta_3h=-2.0)),
        "storm_warning",
    )
    assert storm.is_on is True

    # High probability but settled and not falling.
    quiet = _sensor(
        _coordinator(_base(precip_probability=90, delta_3h=0.5)),
        "storm_warning",
    )
    assert quiet.is_on is False

    # Low probability blocks the warning even with a stormy state.
    low = _sensor(
        _coordinator(
            _base(
                precip_probability=20,
                consensus_state="stormy_much_rain",
                zambretti_state="stormy_much_rain",
            )
        ),
        "storm_warning",
    )
    assert low.is_on is False


def test_frost_risk_requires_real_temperature():
    """Test frost risk is unavailable without a temperature sensor."""
    frost = _sensor(_coordinator(_base(temperature=0.5)), "frost_risk")
    assert frost.is_on is True
    assert frost.extra_state_attributes["threshold"] == 2.0

    warm = _sensor(_coordinator(_base(temperature=8.0)), "frost_risk")
    assert warm.is_on is False

    no_sensor = _sensor(
        _coordinator(_base(temperature=0.0, temperature_available=False)),
        "frost_risk",
    )
    assert no_sensor.is_on is None


def test_fog_risk_requires_humidity_and_model():
    """Test fog risk combines humidity threshold and fog probability."""
    fog = _sensor(
        _coordinator(_base(humidity=97.0, fog_probability=80)),
        "fog_risk",
    )
    assert fog.is_on is True
    assert fog.extra_state_attributes["humidity_threshold"] == 95.0

    dry = _sensor(_coordinator(_base(humidity=80.0, fog_probability=80)), "fog_risk")
    assert dry.is_on is False

    weak_model = _sensor(
        _coordinator(_base(humidity=99.0, fog_probability=10)),
        "fog_risk",
    )
    assert weak_model.is_on is False

    missing_humidity = _sensor(
        _coordinator(_base(humidity=None, fog_probability=None)),
        "fog_risk",
    )
    assert missing_humidity.is_on is None


def test_binary_sensor_unavailable_without_data():
    """Test binary sensors report no state when the coordinator has no data."""
    coordinator = _coordinator(_base())
    coordinator.data = None
    assert _sensor(coordinator, "storm_warning").is_on is None
    assert _sensor(coordinator, "storm_warning").extra_state_attributes == {}

    coordinator.data = _base(available=False)
    assert _sensor(coordinator, "fog_risk").is_on is None
    assert _sensor(coordinator, "fog_risk").extra_state_attributes == {}


@pytest.mark.asyncio
async def test_binary_sensor_async_setup_entry():
    """Test the binary sensor platform registers all alerts."""
    from custom_components.zambretti_sager import binary_sensor

    coordinator = _coordinator(_base())
    entry = MagicMock()
    entry.runtime_data = coordinator
    added = []
    await binary_sensor.async_setup_entry(MagicMock(), entry, added.extend)
    assert len(added) == 4
