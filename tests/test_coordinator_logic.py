"""Unit tests for coordinator rolling buffer and data structures."""

from __future__ import annotations

from collections import deque
import datetime
from unittest.mock import MagicMock, patch

import pytest

from custom_components.zambretti_sager.coordinator import (
    ForecastData,
    ZambrettiSagerCoordinator,
)


def test_forecast_data_structure():
    """Test ForecastData structure and default fields."""
    fd = ForecastData(
        available=True,
        p_now=1015.5,
        p_3h=1013.5,
        p_6h=1011.0,
        p_12h=1008.0,
        wind_degrees=180.0,
        wind_direction="S",
        wind_speed=5.2,
        humidity=65.0,
        altitude=150.0,
        temperature=18.5,
        is_night=False,
        last_updated=datetime.datetime(2026, 8, 22, 12, 0, tzinfo=datetime.UTC),
        delta_3h=2.0,
        trend_label="↑ Rising",
        zambretti_state="settled_fine",
        sager_state="sager_fair_improving",
        zambretti_6h="fairly_fine_improving",
        predicted_p_6h=1019.5,
        precip_probability=15,
    )

    assert fd.available is True
    assert fd.p_now == 1015.5
    assert fd.delta_3h == 2.0
    assert fd.trend_label == "↑ Rising"
    assert fd.zambretti_state == "settled_fine"
    assert fd.precip_probability == 15


def test_buffer_lookup_logic():
    """Test in-memory rolling buffer pressure lookup by delta hours."""
    now = datetime.datetime(2026, 8, 22, 12, 0, tzinfo=datetime.UTC)
    t_3h = now - datetime.timedelta(hours=3)
    t_6h = now - datetime.timedelta(hours=6)
    t_12h = now - datetime.timedelta(hours=12)

    buffer: deque[tuple[datetime.datetime, float]] = deque(
        [
            (t_12h, 1005.0),
            (t_6h, 1010.0),
            (t_3h + datetime.timedelta(minutes=5), 1015.0),  # slightly offset but within 45m
            (now, 1020.0),
        ]
    )

    # Lookup helper simulating _get_buffer_pressure
    def lookup(hours: int) -> float | None:
        target = now - datetime.timedelta(hours=hours)
        best = None
        best_diff = datetime.timedelta(minutes=45)
        for dt, p in buffer:
            diff = abs(dt - target)
            if diff <= best_diff:
                best_diff = diff
                best = p
        return best

    assert lookup(3) == 1015.0
    assert lookup(6) == 1010.0
    assert lookup(12) == 1005.0
    assert lookup(20) is None  # outside tolerance


def test_coordinator_temperature_conversion():
    """Test coordinator temperature unit conversion with SpeedConverter/TemperatureConverter."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.temp_id = "sensor.t"

    # Celsius
    mock_hass.states.get.return_value = MagicMock(
        state="20.0", attributes={"unit_of_measurement": "°C"}
    )
    assert pytest.approx(coord._get_temperature()) == 20.0

    # Fahrenheit (68°F = 20°C)
    mock_hass.states.get.return_value = MagicMock(
        state="68.0", attributes={"unit_of_measurement": "°F"}
    )
    assert pytest.approx(coord._get_temperature()) == 20.0

    # Kelvin (293.15 K = 20°C)
    mock_hass.states.get.return_value = MagicMock(
        state="293.15", attributes={"unit_of_measurement": "K"}
    )
    assert pytest.approx(coord._get_temperature(), abs=0.1) == 20.0

    # Missing sensor falls back to standard 15.0°C
    coord.temp_id = None
    assert coord._get_temperature() == 15.0


def test_coordinator_wind_speed_conversion():
    """Test coordinator wind speed conversion to m/s."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.wind_speed_id = "sensor.wind_speed"

    # km/h (36 km/h = 10 m/s)
    mock_hass.states.get.return_value = MagicMock(
        state="36.0", attributes={"unit_of_measurement": "km/h"}
    )
    assert pytest.approx(coord._get_wind_speed()) == 10.0

    # knots (10 knots ~ 5.14 m/s)
    mock_hass.states.get.return_value = MagicMock(
        state="10.0", attributes={"unit_of_measurement": "kn"}
    )
    assert pytest.approx(coord._get_wind_speed(), abs=0.01) == 5.14


def test_coordinator_sea_level_detection():
    """Test detection of sensors that already report sea level pressure."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.bme280_sealevel_pressure"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    mock_hass.states.get.return_value = MagicMock(attributes={})

    assert coord._is_likely_sea_level_sensor() is True

    # Absolute sensor
    coord.pressure_id = "sensor.bme280_pressure"
    mock_hass.states.get.return_value = MagicMock(attributes={"pressure_type": "absolute"})
    assert coord._is_likely_sea_level_sensor() is False


def test_coordinator_wind_direction():
    """Test coordinator wind direction resolution from state and attributes."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.wind_id = "sensor.wind"

    # Numeric state
    mock_hass.states.get.return_value = MagicMock(state="180.0", attributes={})
    assert coord._get_wind_direction() == 180.0

    # Compass string state ("NW" -> 315.0)
    mock_hass.states.get.return_value = MagicMock(state="NW", attributes={})
    assert coord._get_wind_direction() == 315.0

    # Attribute wind_bearing when state is non-numeric string
    mock_hass.states.get.return_value = MagicMock(state="custom", attributes={"wind_bearing": 90.0})
    assert coord._get_wind_direction() == 90.0

    # Unknown state returns None
    mock_hass.states.get.return_value = MagicMock(
        state="unknown", attributes={"wind_bearing": 90.0}
    )
    assert coord._get_wind_direction() is None

    # Missing sensor
    coord.wind_id = None
    assert coord._get_wind_direction() is None


def test_coordinator_nighttime():
    """Test day/night detection via sun.sun elevation."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)

    # Night (sun below horizon)
    mock_hass.states.get.return_value = MagicMock(attributes={"elevation": -5.0})
    assert coord._is_nighttime() is True

    # Day (sun above horizon)
    mock_hass.states.get.return_value = MagicMock(attributes={"elevation": 25.0})
    assert coord._is_nighttime() is False

    # Missing sun entity defaults to False
    mock_hass.states.get.return_value = None
    assert coord._is_nighttime() is False


def test_coordinator_humidity():
    """Test humidity extraction."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.humidity_id = "sensor.h"

    mock_hass.states.get.return_value = MagicMock(state="65.5")
    assert coord._get_humidity() == 65.5

    mock_hass.states.get.return_value = MagicMock(state="invalid")
    assert coord._get_humidity() is None

    coord.humidity_id = None
    assert coord._get_humidity() is None


@pytest.mark.asyncio
async def test_coordinator_async_update_data_unavailable():
    """Test coordinator handles unavailable pressure sensor gracefully."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.pressure"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)

    # Sensor unavailable
    mock_hass.states.get.return_value = MagicMock(state="unavailable")
    data = await coord._async_update_data()

    assert data.available is False
    assert coord._unsub_state_listener is not None


@pytest.mark.asyncio
async def test_coordinator_async_update_data_success():
    """Test successful coordinator update cycle."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.pressure", "use_sea_level_correction": True}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.temp_id = None
    coord.wind_id = None
    coord.humidity_id = None
    coord._history_warmed = True  # skip recorder

    # Populate buffer with 3h ago reading (1010 hPa)
    now = datetime.datetime.now(datetime.UTC)
    coord._history_buffer.append(now - datetime.timedelta(hours=3), 1010.0)

    # Current pressure reading: 1013.25 hPa
    pressure_state = MagicMock(
        entity_id="sensor.pressure",
        state="1013.25",
        attributes={"unit_of_measurement": "hPa"},
    )

    def mock_states_get(entity_id):
        if entity_id == "sensor.pressure":
            return pressure_state
        return None

    mock_hass.states.get.side_effect = mock_states_get

    data = await coord._async_update_data()

    assert data.available is True
    assert data.p_now is not None
    assert data.p_3h is not None
    assert data.delta_3h is not None
    assert data.zambretti_state is not None
    assert data.sager_state is not None


@pytest.mark.asyncio
async def test_coordinator_fetch_history_pressures_batch_fallback():
    """Test coordinator falls back to single batch recorder query when buffer is empty."""
    from unittest.mock import AsyncMock, patch

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.pressure"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord._history_warmed = False

    now = datetime.datetime(2026, 9, 21, 14, 0, tzinfo=datetime.UTC)
    mock_batch = AsyncMock(return_value={3: 1010.0, 6: 1008.0, 12: 1005.0})

    with patch(
        "custom_components.zambretti_sager.coordinator.async_get_history_pressures_batch_from_recorder",
        mock_batch,
    ):
        res = await coord._fetch_history_pressures(now)

    assert res == {3: 1010.0, 6: 1008.0, 12: 1005.0}
    assert mock_batch.call_count == 1
    # Check that missing_hours (3, 6, 12) were passed in a single batch
    call_args = mock_batch.call_args[0]
    assert call_args[2] == [3, 6, 12]
    assert coord._history_warmed is True


@pytest.mark.asyncio
async def test_coordinator_historical_pressure_no_double_sea_level_correction():
    """Test that historical pressure is not double-compensated for sea level (Issue #13)."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.pressure", "use_sea_level_correction": True}
    mock_entry.options = {}

    # Altitude 300m: raw 980 hPa corresponds to sea-level pressure ~1015.4 hPa
    altitude = 300.0
    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=altitude)
    coord.temp_id = None
    coord.wind_id = None
    coord.humidity_id = None
    coord._history_warmed = True

    # Expected sea-level pressure for 980 hPa at 300m and 15°C
    expected_sea_level = coord._correct_pressure(980.0)
    assert expected_sea_level > 1010.0

    # At 3 hours ago, buffer has reading (already sea-level corrected when stored)
    now = datetime.datetime.now(datetime.UTC)
    coord._history_buffer.append(now - datetime.timedelta(hours=3), expected_sea_level)

    # Current raw sensor pressure is also 980.0 hPa (steady atmospheric pressure)
    pressure_state = MagicMock(
        entity_id="sensor.pressure",
        state="980.0",
        attributes={"unit_of_measurement": "hPa"},
    )
    mock_hass.states.get.side_effect = lambda eid: (
        pressure_state if eid == "sensor.pressure" else None
    )

    data = await coord._async_update_data()

    assert data.available is True
    # Both p_now and p_3h must equal the single sea-level corrected value
    assert data.p_now == round(expected_sea_level, 1)
    assert data.p_3h == round(expected_sea_level, 1)
    # Delta over 3 hours must be ~0.0 hPa (steady), NOT a massive false drop caused by double correction
    assert pytest.approx(data.delta_3h, abs=0.1) == 0.0
    assert "Steady" in data.trend_label


def test_coordinator_correct_history_pressure_fallback_chain():
    """Test _correct_history_pressure returns value directly or cascades fallback."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {"pressure_sensor": "sensor.pressure", "use_sea_level_correction": True}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=500.0)

    # Value is present -> returned as-is without second altitude correction
    assert coord._correct_history_pressure(1013.25, fallback=1020.0) == 1013.25

    # Value is None -> returns fallback
    assert coord._correct_history_pressure(None, fallback=1020.0) == 1020.0


def test_coordinator_clearing_optional_sensors():
    """Test that clearing optional sensors in options (setting them to None) is respected."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {
        "pressure_sensor": "sensor.pressure",
        "wind_sensor": "sensor.wind",
        "wind_speed_sensor": "sensor.speed",
        "temperature_sensor": "sensor.temp",
        "humidity_sensor": "sensor.humidity",
    }
    mock_entry.options = {
        "wind_sensor": None,
        "humidity_sensor": None,
    }

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)

    assert coord.pressure_id == "sensor.pressure"
    assert coord.wind_id is None
    assert coord.wind_speed_id == "sensor.speed"
    assert coord.temp_id == "sensor.temp"
    assert coord.humidity_id is None


@pytest.mark.asyncio
async def test_coordinator_precomputes_temperature_and_sea_level_for_buffer_warming():
    """Test that temperature lookup and sea-level detection are precomputed once during warming."""
    from unittest.mock import AsyncMock, patch

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test"
    mock_entry.data = {
        "pressure_sensor": "sensor.pressure",
        "temperature_sensor": "sensor.temp",
        "use_sea_level_correction": True,
    }
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=200.0)
    coord._history_warmed = False

    pressure_state = MagicMock(
        entity_id="sensor.pressure",
        state="1000.0",
        attributes={"unit_of_measurement": "hPa"},
    )
    temp_state = MagicMock(
        entity_id="sensor.temp",
        state="20.0",
        attributes={"unit_of_measurement": "°C"},
    )

    mock_hass.states.get.side_effect = lambda eid: (
        pressure_state if eid == "sensor.pressure" else temp_state if eid == "sensor.temp" else None
    )

    # Mock recorder returning 5 historical states for buffer warming
    now = datetime.datetime.now(datetime.UTC)
    mock_recorder = MagicMock()
    history_states = [
        MagicMock(
            state=str(995.0 + i),
            last_changed=now - datetime.timedelta(hours=i),
            attributes={"unit_of_measurement": "hPa"},
        )
        for i in range(1, 6)
    ]
    mock_recorder.async_add_executor_job = AsyncMock(
        return_value={"sensor.pressure": history_states}
    )

    with (
        patch("custom_components.zambretti_sager.history.get_instance", return_value=mock_recorder),
        patch.object(coord, "_get_temperature", wraps=coord._get_temperature) as mock_get_temp,
        patch.object(
            coord, "_is_likely_sea_level_sensor", wraps=coord._is_likely_sea_level_sensor
        ) as mock_is_sea,
    ):
        data = await coord._async_update_data()

        assert data.available is True
        assert coord._history_warmed is True
        # Both methods must be called only ONCE during update and warming, NOT once per history state
        assert mock_get_temp.call_count == 1
        assert mock_is_sea.call_count == 1
        # Buffer has 5 warmed states + 1 current state = 6 states
        assert len(coord._history_buffer) == 6


@pytest.mark.asyncio
async def test_async_remove_entry_cleans_resources_when_last_entry():
    """Test async_remove_entry calls unregister when last entry is deleted."""
    from unittest.mock import AsyncMock, patch

    from custom_components.zambretti_sager import async_remove_entry

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "entry_1"

    # No other entries exist
    mock_hass.config_entries.async_entries.return_value = [mock_entry]

    with patch("custom_components.zambretti_sager.JSModuleRegistration") as mock_reg_cls:
        mock_reg = mock_reg_cls.return_value
        mock_reg.async_unregister = AsyncMock()

        await async_remove_entry(mock_hass, mock_entry)
        mock_reg.async_unregister.assert_awaited_once()


@pytest.mark.asyncio
async def test_async_remove_entry_preserves_resources_when_other_entries_exist():
    """Test async_remove_entry does not call unregister if another entry remains."""
    from unittest.mock import AsyncMock, patch

    from custom_components.zambretti_sager import async_remove_entry

    mock_hass = MagicMock()
    mock_entry1 = MagicMock(entry_id="entry_1")
    mock_entry2 = MagicMock(entry_id="entry_2")

    mock_hass.config_entries.async_entries.return_value = [mock_entry1, mock_entry2]

    with patch("custom_components.zambretti_sager.JSModuleRegistration") as mock_reg_cls:
        mock_reg = mock_reg_cls.return_value
        mock_reg.async_unregister = AsyncMock()

        await async_remove_entry(mock_hass, mock_entry1)
        mock_reg.async_unregister.assert_not_called()


@pytest.mark.asyncio
async def test_coordinator_event_driven_logging():
    """Test coordinator logs on initial forecast and changes, but not on identical cycles."""
    from unittest.mock import patch

    from custom_components.zambretti_sager.coordinator import ZambrettiSagerCoordinator

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.data = {"pressure_sensor": "sensor.pressure"}
    mock_entry.options = {}
    mock_entry.title = "Test Weather"

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=0.0)
    coord._history_warmed = True

    pressure_state = MagicMock(state="1020.0", attributes={"unit_of_measurement": "hPa"})
    mock_hass.states.get.side_effect = lambda eid: (
        pressure_state if eid == "sensor.pressure" else None
    )

    # Cycle 1: First forecast
    with (
        patch.object(
            coord, "_fetch_history_pressures", return_value={3: 1020.0, 6: 1020.0, 12: 1020.0}
        ),
        patch.object(coord, "_get_wind_direction", return_value=None),
        patch.object(coord, "_get_wind_speed", return_value=None),
        patch.object(coord, "_get_humidity", return_value=None),
        patch.object(coord, "_get_temperature", return_value=15.0),
        patch.object(coord, "_is_nighttime", return_value=False),
        patch("custom_components.zambretti_sager.coordinator._LOGGER.info") as mock_log_info,
    ):
        await coord._async_update_data()
        assert mock_log_info.call_count == 1
        assert "Initial forecast established" in mock_log_info.call_args[0][0]

    # Cycle 2: Same conditions -> no new log entry
    pressure_state.state = "1020.1"
    with (
        patch.object(
            coord, "_fetch_history_pressures", return_value={3: 1020.0, 6: 1020.0, 12: 1020.0}
        ),
        patch.object(coord, "_get_wind_direction", return_value=None),
        patch.object(coord, "_get_wind_speed", return_value=None),
        patch.object(coord, "_get_humidity", return_value=None),
        patch.object(coord, "_get_temperature", return_value=15.0),
        patch.object(coord, "_is_nighttime", return_value=False),
        patch("custom_components.zambretti_sager.coordinator._LOGGER.info") as mock_log_info,
    ):
        await coord._async_update_data()
        assert mock_log_info.call_count == 0

    # Cycle 3: Sharp pressure drop -> forecast/trend changes -> log emitted
    pressure_state.state = "1000.0"
    with (
        patch.object(
            coord, "_fetch_history_pressures", return_value={3: 1015.0, 6: 1020.0, 12: 1020.0}
        ),
        patch.object(coord, "_get_wind_direction", return_value=None),
        patch.object(coord, "_get_wind_speed", return_value=None),
        patch.object(coord, "_get_humidity", return_value=None),
        patch.object(coord, "_get_temperature", return_value=15.0),
        patch.object(coord, "_is_nighttime", return_value=False),
        patch("custom_components.zambretti_sager.coordinator._LOGGER.info") as mock_log_info,
    ):
        await coord._async_update_data()
        assert mock_log_info.call_count == 1
        assert "Forecast changed" in mock_log_info.call_args[0][0]


def test_pressure_watcher_callbacks():
    """Test _start_pressure_watcher attaches listener and calls async_request_refresh on change."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.barometer"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.async_request_refresh = MagicMock()

    captured_callback = None

    def mock_track_change(hass, entity_ids, callback_fn):
        nonlocal captured_callback
        captured_callback = callback_fn
        return MagicMock()

    with patch(
        "custom_components.zambretti_sager.coordinator.async_track_state_change_event",
        side_effect=mock_track_change,
    ):
        coord._start_pressure_watcher()
        assert captured_callback is not None
        assert coord._unsub_state_listener is not None

        # Calling _start_pressure_watcher again is a no-op
        coord._start_pressure_watcher()

        # Simulate event with unavailable state -> does not refresh
        mock_event_unavail = MagicMock()
        mock_event_unavail.data = {"new_state": MagicMock(state="unavailable")}
        captured_callback(mock_event_unavail)
        assert coord.async_request_refresh.call_count == 0

        # Simulate event with valid state -> calls async_request_refresh directly
        mock_event_valid = MagicMock()
        mock_event_valid.data = {"new_state": MagicMock(state="1013.25")}
        captured_callback(mock_event_valid)
        assert coord.async_request_refresh.call_count == 1

        # Stop watcher
        coord._stop_pressure_watcher()
        assert coord._unsub_state_listener is None


def test_coordinator_temperature_fallback_units():
    """Test temperature conversion fallback to Fahrenheit, Kelvin, and non-numeric states."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.temp_id = "sensor.t"

    # Non-numeric state returns fallback 15.0
    mock_hass.states.get.return_value = MagicMock(state="unknown")
    assert coord._get_temperature() == 15.0
    mock_hass.states.get.return_value = MagicMock(state="not_a_float")
    assert coord._get_temperature() == 15.0

    # Fahrenheit conversion via fallback
    with patch(
        "homeassistant.util.unit_conversion.TemperatureConverter.convert",
        side_effect=Exception("Failed"),
    ):
        mock_hass.states.get.return_value = MagicMock(
            state="68.0", attributes={"unit_of_measurement": "°F"}
        )
        assert pytest.approx(coord._get_temperature(), 0.1) == 20.0

        mock_hass.states.get.return_value = MagicMock(
            state="293.15", attributes={"unit_of_measurement": "K"}
        )
        assert pytest.approx(coord._get_temperature(), 0.1) == 20.0


def test_coordinator_wind_speed_fallback_units():
    """Test wind speed converter fallbacks for km/h, mph, knots, fps, and attributes."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.wind_speed_id = "sensor.ws"

    # State unavailable returns None
    mock_hass.states.get.return_value = MagicMock(state="unavailable")
    assert coord._get_wind_speed() is None

    # State is non-numeric but attribute has speed
    mock_hass.states.get.return_value = MagicMock(
        state="strong", attributes={"wind_speed": "12.0", "unit_of_measurement": "m/s"}
    )
    assert pytest.approx(coord._get_wind_speed()) == 12.0

    # Fallback conversions when SpeedConverter raises exception
    with patch(
        "homeassistant.util.unit_conversion.SpeedConverter.convert", side_effect=Exception("Failed")
    ):
        # km/h
        mock_hass.states.get.return_value = MagicMock(
            state="36.0", attributes={"unit_of_measurement": "km/h"}
        )
        assert pytest.approx(coord._get_wind_speed(), 0.1) == 10.0

        # mph
        mock_hass.states.get.return_value = MagicMock(
            state="10.0", attributes={"unit_of_measurement": "mph"}
        )
        assert pytest.approx(coord._get_wind_speed(), 0.1) == 4.47

        # knots
        mock_hass.states.get.return_value = MagicMock(
            state="10.0", attributes={"unit_of_measurement": "knots"}
        )
        assert pytest.approx(coord._get_wind_speed(), 0.1) == 5.14

        # fps
        mock_hass.states.get.return_value = MagicMock(
            state="10.0", attributes={"unit_of_measurement": "fps"}
        )
        assert pytest.approx(coord._get_wind_speed(), 0.1) == 3.05


def test_coordinator_wind_direction_compass_and_attr():
    """Test wind direction parsing compass strings and attributes."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    coord.wind_id = "sensor.wind"

    # Numeric state directly
    mock_hass.states.get.return_value = MagicMock(state="180.0", attributes={})
    assert coord._get_wind_direction() == 180.0

    # Non-numeric state but attribute has wind_bearing
    mock_hass.states.get.return_value = MagicMock(
        state="South", attributes={"wind_bearing": "180.0"}
    )
    assert coord._get_wind_direction() == 180.0

    # Compass string state
    mock_hass.states.get.return_value = MagicMock(state="NE", attributes={})
    assert coord._get_wind_direction() == 45.0

    # Unavailable
    mock_hass.states.get.return_value = MagicMock(state="unavailable", attributes={})
    assert coord._get_wind_direction() is None


def test_coordinator_humidity_branches():
    """Test humidity sensor reading and fallbacks."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)

    # No humidity ID
    coord.humidity_id = None
    assert coord._get_humidity() is None

    # Unavailable state
    coord.humidity_id = "sensor.h"
    mock_hass.states.get.return_value = MagicMock(state="unavailable")
    assert coord._get_humidity() is None

    # Invalid string state
    mock_hass.states.get.return_value = MagicMock(state="invalid")
    assert coord._get_humidity() is None

    # Valid numeric state
    mock_hass.states.get.return_value = MagicMock(state="65.5")
    assert coord._get_humidity() == 65.5


def test_coordinator_sea_level_detection_and_warning():
    """Test sea level detection via attributes and warning logged only once."""
    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p", "use_sea_level_correction": True}
    mock_entry.options = {}

    coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
    mock_hass.states.get.return_value = MagicMock(
        state="1013.25", attributes={"sensor_type": "mslp"}
    )

    assert coord._is_likely_sea_level_sensor() is True

    # Corrector warns once
    with patch("custom_components.zambretti_sager.coordinator._LOGGER.warning") as mock_warn:
        corrector = coord._create_pressure_corrector()
        assert corrector(1013.25) == 1013.25
        assert mock_warn.call_count == 1

        # Second call does not warn again
        corrector2 = coord._create_pressure_corrector()
        assert corrector2(1013.25) == 1013.25
        assert mock_warn.call_count == 1


@pytest.mark.asyncio
async def test_async_create_coordinator():
    """Test async_create_coordinator factory."""
    from custom_components.zambretti_sager.coordinator import async_create_coordinator

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.title = "Test Weather"
    mock_entry.data = {"pressure_sensor": "sensor.p", "latitude": 51.5, "longitude": -0.1}
    mock_entry.options = {}

    with (
        patch(
            "custom_components.zambretti_sager.coordinator.async_resolve_elevation",
            return_value=50.0,
        ),
        patch(
            "custom_components.zambretti_sager.coordinator.ZambrettiSagerCoordinator.async_config_entry_first_refresh",
        ) as mock_refresh,
    ):
        coord = await async_create_coordinator(mock_hass, mock_entry)
        assert coord.altitude == 50.0
        mock_refresh.assert_called_once()
        mock_hass.config_entries.async_update_entry.assert_called_once_with(
            mock_entry, data={**mock_entry.data, "elevation": 50.0}
        )


@pytest.mark.asyncio
async def test_coordinator_invalid_pressure_and_compat_fallbacks():
    """Test UpdateFailed translation kwargs and older HA TypeError fallbacks."""
    from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

    mock_hass = MagicMock()
    mock_entry = MagicMock()
    mock_entry.entry_id = "test_entry"
    mock_entry.data = {"pressure_sensor": "sensor.p"}
    mock_entry.options = {}

    # 1. Test super().__init__ TypeError fallback when config_entry kwarg is unsupported
    orig_init = DataUpdateCoordinator.__init__

    def legacy_init(self, hass, logger, *, name, update_interval=None):
        orig_init(self, hass, logger, name=name, update_interval=update_interval)

    with patch.object(DataUpdateCoordinator, "__init__", legacy_init):
        coord = ZambrettiSagerCoordinator(mock_hass, mock_entry, altitude=100.0)
        assert coord.pressure_id == "sensor.p"

    # 2. Invalid pressure state raises translated UpdateFailed
    mock_hass.states.get.return_value = MagicMock(
        entity_id="sensor.p",
        state="not_a_number",
        attributes={"unit_of_measurement": "hPa"},
    )
    with pytest.raises(UpdateFailed) as exc_info:
        await coord._async_update_data()
    assert getattr(exc_info.value, "translation_key", None) == "invalid_pressure"

    # 3. Legacy UpdateFailed without translation kwargs falls back cleanly
    class LegacyUpdateFailed(Exception):
        def __init__(self, message: str) -> None:
            super().__init__(message)

    with (
        patch("custom_components.zambretti_sager.coordinator.UpdateFailed", LegacyUpdateFailed),
        pytest.raises(LegacyUpdateFailed),
    ):
        await coord._async_update_data()
