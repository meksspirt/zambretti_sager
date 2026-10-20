"""Unit tests for Zambretti, Sager, and weather forecasting algorithms."""

from __future__ import annotations

from custom_components.zambretti_sager.const import (
    ZAMBRETTI_MAPPING,
    calculate_extrapolations,
    calculate_precipitation_probability,
    calculate_sager_forecast,
    calculate_zambretti_index,
    classify_pressure_trend,
    get_trend_label,
    wind_degrees_to_compass,
)


def test_classify_pressure_trend():
    """Test classification of pressure trends."""
    assert classify_pressure_trend(4.0) == "rising_rapidly"
    assert classify_pressure_trend(1.5) == "rising_rapidly"
    assert classify_pressure_trend(1.0) == "rising_slowly"
    assert classify_pressure_trend(0.7) == "rising_slowly"
    assert classify_pressure_trend(0.5) == "steady"
    assert classify_pressure_trend(0.0) == "steady"
    assert classify_pressure_trend(-0.5) == "steady"
    assert classify_pressure_trend(-0.7) == "falling_slowly"
    assert classify_pressure_trend(-1.0) == "falling_slowly"
    assert classify_pressure_trend(-1.5) == "falling_rapidly"
    assert classify_pressure_trend(-4.5) == "falling_rapidly"


def test_get_trend_label():
    """Test trend label formatting."""
    assert get_trend_label(3.5) == "↑↑ Rising Fast"
    assert get_trend_label(1.0) == "↑ Rising"
    assert get_trend_label(0.0) == "→ Steady"
    assert get_trend_label(-1.0) == "↓ Falling"
    assert get_trend_label(-3.5) == "↓↓ Falling Fast"


def test_calculate_zambretti_index():
    """Test Zambretti index calculation for various trends and pressures."""
    # High pressure, rising trend -> index 20 (Settled Fine)
    idx_high_rising = calculate_zambretti_index(1030.0, 2.5)
    assert 20 <= idx_high_rising <= 32
    assert idx_high_rising == 20

    # Very high pressure, rising trend (e.g. 1036 hPa) -> index 20 (Settled Fine, never 19 Stormy)
    assert calculate_zambretti_index(1036.0, 2.0) == 20

    # Very high pressure, steady trend (e.g. 1036 hPa) -> index 10 (Settled Fine, never 9 Rain)
    assert calculate_zambretti_index(1036.0, 0.0) == 10

    # Low pressure, falling trend -> index 9 (Very Unsettled Rain)
    idx_low_falling = calculate_zambretti_index(970.0, -3.0)
    assert 1 <= idx_low_falling <= 9
    assert idx_low_falling == 9

    # Normal pressure, steady
    idx_normal_steady = calculate_zambretti_index(1013.25, 0.0)
    assert 10 <= idx_normal_steady <= 19
    assert idx_normal_steady == 12

    # Group boundary clamping tests:
    # Rising group is strictly [20, 32]
    assert calculate_zambretti_index(1200.0, 5.0) == 20
    assert calculate_zambretti_index(700.0, 5.0) == 32
    # Falling group is strictly [1, 9]
    assert calculate_zambretti_index(1200.0, -5.0) == 1
    assert calculate_zambretti_index(700.0, -5.0) == 9
    # Steady group is strictly [10, 19]
    assert calculate_zambretti_index(1200.0, 0.0) == 10
    assert calculate_zambretti_index(700.0, 0.0) == 19

    # All indices 1-32 map to valid keys or stable
    for z in range(1, 33):
        assert z in ZAMBRETTI_MAPPING


def test_extrapolations_at_high_pressure():
    """Verify that extrapolations at high pressure do not erroneously predict storms."""
    # Current pressure 1034.0 hPa rising from 1033.0 hPa (user issue scenario)
    res = calculate_extrapolations(p_now=1034.0, p_3h=1033.0, p_6h=1032.0, p_12h=1032.0)
    for horizon, forecast in res.items():
        assert forecast.predicted_pressure >= 1034.0
        # High pressure must predict fine weather, never stormy/rain
        assert forecast.forecast_state in ("settled_fine", "fine_weather"), (
            f"Horizon {horizon}h predicted {forecast.forecast_state} at {forecast.predicted_pressure} hPa!"
        )


def test_calculate_precipitation_probability():
    """Test precipitation probability calculation and boundary clamping."""
    # Low pressure + falling fast + high humidity -> high probability (capped at 100)
    prob_high = calculate_precipitation_probability(980.0, -4.0, humidity=95.0)
    assert prob_high == 100

    # High pressure + rising fast + low humidity -> low probability (floored at 0)
    prob_low = calculate_precipitation_probability(1035.0, 4.0, humidity=20.0)
    assert prob_low == 0

    # Moderate conditions
    prob_mid = calculate_precipitation_probability(1012.0, 0.0, humidity=50.0)
    assert 0 <= prob_mid <= 100

    # None humidity works safely
    prob_no_hum = calculate_precipitation_probability(1010.0, -2.0, humidity=None)
    assert 0 <= prob_no_hum <= 100


def test_wind_degrees_to_compass():
    """Test conversion of degrees to 8-point compass directions."""
    assert wind_degrees_to_compass(None) is None
    assert wind_degrees_to_compass(0.0) == "N"
    assert wind_degrees_to_compass(360.0) == "N"
    assert wind_degrees_to_compass(45.0) == "NE"
    assert wind_degrees_to_compass(90.0) == "E"
    assert wind_degrees_to_compass(135.0) == "SE"
    assert wind_degrees_to_compass(180.0) == "S"
    assert wind_degrees_to_compass(225.0) == "SW"
    assert wind_degrees_to_compass(270.0) == "W"
    assert wind_degrees_to_compass(315.0) == "NW"
    assert wind_degrees_to_compass(350.0) == "N"
    assert wind_degrees_to_compass(10.0) == "N"


def test_calculate_sager_forecast():
    """Test Sager forecast table lookup."""
    # Very high pressure
    res_high = calculate_sager_forecast(1035.0, 2.0, 45.0)
    assert res_high is not None
    assert res_high.startswith("sager_")

    # Low pressure
    res_low = calculate_sager_forecast(995.0, -2.0, 225.0)
    assert res_low is not None
    assert res_low.startswith("sager_")

    # Missing wind direction falls back to standard lookup without error
    res_no_wind = calculate_sager_forecast(1013.0, 0.0, None)
    assert res_no_wind is not None
    assert res_no_wind.startswith("sager_")


def test_calculate_extrapolations():
    """Test 6h, 12h, and 24h pressure and forecast extrapolations with synoptic damping."""
    # Pressure rising from 1010 to 1012 in 3 hours (+2.0 hPa / 3h)
    res = calculate_extrapolations(p_now=1012.0, p_3h=1010.0, p_6h=1008.0, p_12h=1004.0)

    assert 6 in res
    assert 12 in res
    assert 24 in res

    # 6h: delta = +2.0 * (2.0 ** 0.65) ≈ +3.1 -> predicted = 1015.1
    assert res[6].predicted_pressure == 1015.1
    assert res[6].forecast_state in ZAMBRETTI_MAPPING.values()

    # 12h: delta = +2.0 * (4.0 ** 0.65) ≈ +4.9 -> predicted = 1016.9
    assert res[12].predicted_pressure == 1016.9

    # 24h: delta = +2.0 * (8.0 ** 0.65) ≈ +7.7 -> predicted = 1019.7
    assert res[24].predicted_pressure == 1019.7


def test_calculate_extrapolations_physical_clamping():
    """Test that extreme pressure extrapolations clamp to physical bounds (950..1060 hPa)."""
    # Extreme collapse: 970 dropping 15 hPa in 3h
    res_drop = calculate_extrapolations(p_now=970.0, p_3h=985.0)
    assert res_drop[24].predicted_pressure == 950.0

    # Extreme surge: 1045 rising 15 hPa in 3h
    res_surge = calculate_extrapolations(p_now=1045.0, p_3h=1030.0)
    assert res_surge[24].predicted_pressure == 1060.0


def test_southern_hemisphere_adjustments():
    """Test hemisphere inversion in Sager and Zambretti algorithms."""
    # In Sager, for fair zone + steady trend:
    # Northern hemisphere (lat > 0): S wind gives sager_fair_tending_to_deteriorate, N gives sager_fair_no_change
    res_nh_s = calculate_sager_forecast(1025.0, 0.0, wind_degrees=180.0, latitude=50.0)
    res_nh_n = calculate_sager_forecast(1025.0, 0.0, wind_degrees=0.0, latitude=50.0)
    assert res_nh_s == "sager_fair_tending_to_deteriorate"
    assert res_nh_n == "sager_fair_no_change"

    # Southern hemisphere (lat < 0): N wind brings warm equatorial air (deteriorating), S wind brings polar air (no change)
    res_sh_n = calculate_sager_forecast(1025.0, 0.0, wind_degrees=0.0, latitude=-35.0)
    res_sh_s = calculate_sager_forecast(1025.0, 0.0, wind_degrees=180.0, latitude=-35.0)
    assert res_sh_n == "sager_fair_tending_to_deteriorate"
    assert res_sh_s == "sager_fair_no_change"

    # Zambretti seasonal test:
    # Month 1 (January): winter in NH, summer in SH
    # Steady 1014 hPa:
    idx_nh_jan = calculate_zambretti_index(1014.0, 0.0, month=1, latitude=50.0)
    idx_sh_jan = calculate_zambretti_index(1014.0, 0.0, month=1, latitude=-35.0)
    # Summer effective pressure is higher, resulting in a lower/finer Zambretti index
    assert idx_sh_jan <= idx_nh_jan
