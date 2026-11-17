"""Unit tests for Zambretti, Sager, and weather forecasting algorithms."""

from __future__ import annotations

import datetime

import pytest

from custom_components.zambretti_sager.algorithms import (
    DAMPING_EXPONENT,
    calculate_consensus_forecast,
    calculate_dew_point,
    calculate_fog_probability,
    calculate_forecast_confidence,
    calculate_snow_probability,
    classify_wmo_pressure_tendency,
    linear_pressure_trend,
    sager_severity,
    zambretti_severity,
)
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

    # Zambretti wind quadrant in SH
    idx_sh_n_wind = calculate_zambretti_index(1011.0, 0.0, wind_degrees=0.0, latitude=-35.0)
    idx_sh_s_wind = calculate_zambretti_index(1011.0, 0.0, wind_degrees=180.0, latitude=-35.0)
    assert idx_sh_n_wind != idx_sh_s_wind


def test_precipitation_probability_additional_brackets():
    """Test precipitation probability humidity and pressure bracket boundaries."""
    # Pressure 1008 hPa (bracket 1005 <= p < 1010)
    prob = calculate_precipitation_probability(1008.0, 0.0, humidity=85.0)
    assert 50 <= prob <= 70

    # Humidity 75%
    prob_75 = calculate_precipitation_probability(1025.0, 0.0, humidity=75.0)
    assert prob_75 == 10

    # Humidity 35%
    prob_35 = calculate_precipitation_probability(1025.0, 0.0, humidity=35.0)
    assert prob_35 == 0


def test_extrapolations_fallback_to_6h():
    """Test 24h extrapolation uses p_6h when p_12h is None."""
    res = calculate_extrapolations(p_now=1010.0, p_3h=1012.0, p_6h=1014.0, p_12h=None)
    assert res[24].predicted_pressure < 1010.0


def test_wmo_pressure_tendency_codes():
    """Test the WMO 0-8 tendency classification including shape disambiguation."""
    assert classify_wmo_pressure_tendency(None, None, 1010.0) is None
    assert classify_wmo_pressure_tendency(1010.0, None, 1013.0) == 2
    assert classify_wmo_pressure_tendency(1013.0, None, 1010.0) == 7
    assert classify_wmo_pressure_tendency(1010.0, None, 1010.0) == 4
    # Increasing, then decreasing, returning to the three-hour value.
    assert classify_wmo_pressure_tendency(1010.0, 1014.0, 1010.0) == 0
    # Decreasing, then increasing, returning to the three-hour value.
    assert classify_wmo_pressure_tendency(1014.0, 1009.0, 1014.0) == 5
    # Increasing faster in the second half.
    assert classify_wmo_pressure_tendency(1010.0, 1011.0, 1015.0) == 2
    # Decreasing fast then slowing.
    assert classify_wmo_pressure_tendency(1015.0, 1011.0, 1009.0) == 6


def test_dew_point_and_snow_probability():
    """Test Magnus dew point and temperature-dependent snow probability."""
    assert calculate_dew_point(None, 80.0) is None
    dew_point = calculate_dew_point(20.0, 50.0)
    assert dew_point is not None
    assert pytest.approx(dew_point, abs=0.5) == 9.3

    assert calculate_snow_probability(80, None) is None
    assert calculate_snow_probability(80, -2.0) == 80
    assert calculate_snow_probability(80, 0.0) == 80
    assert calculate_snow_probability(80, 5.0) == 0
    mixed = calculate_snow_probability(80, 2.25)
    assert mixed is not None and 0 < mixed < 80


def test_fog_probability_uses_dew_point_spread_and_wind():
    """Test fog probability under saturated, dry, and windy conditions."""
    assert calculate_fog_probability(None, 90.0) is None
    saturated = calculate_fog_probability(5.0, 100.0, wind_speed=0.5)
    assert saturated is not None and saturated >= 80
    dry = calculate_fog_probability(20.0, 40.0, wind_speed=10.0)
    assert dry == 0
    windy = calculate_fog_probability(5.0, 100.0, wind_speed=10.0)
    assert windy is not None and windy < saturated


def test_linear_pressure_trend_fit():
    """Test least-squares slope and R² over a perfectly linear series."""
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    entries = [
        (now - datetime.timedelta(hours=hours), 1010.0 + (6 - hours) * 1.0)
        for hours in range(6, 0, -1)
    ]
    slope, r2 = linear_pressure_trend(entries, now, hours=6)
    assert slope is not None and pytest.approx(slope, abs=0.01) == 3.0
    assert r2 == 1.0

    # Too few points
    assert linear_pressure_trend(entries[:2], now, hours=6) == (None, None)


def test_forecast_confidence_range_and_penalties():
    """Test confidence scoring bounds and missing-data penalties."""
    full = calculate_forecast_confidence(
        p_now=1013.0,
        p_6h=1012.0,
        p_12h=1011.0,
        p_24h=1010.0,
        wind_degrees=180.0,
        humidity=60.0,
        pressure_age_seconds=60.0,
        zambretti_state="fine_weather",
        sager_state="sager_fair_no_change",
        trend_r2=0.9,
        model_divergence=0,
    )
    sparse = calculate_forecast_confidence(
        p_now=1013.0,
        p_6h=None,
        p_12h=None,
        p_24h=None,
        wind_degrees=None,
        humidity=None,
        pressure_age_seconds=3 * 3600,
        zambretti_state="fine_weather",
        sager_state="sager_unsettled_rain_likely",
        trend_r2=None,
        model_divergence=80,
    )
    assert 0 <= sparse < full <= 100


def test_consensus_and_severity():
    """Test severity lookup and weighted consensus selection."""
    assert zambretti_severity("settled_fine") == 0
    assert zambretti_severity("stormy_much_rain") == 5
    assert zambretti_severity(None) is None
    assert sager_severity("sager_unsettled_rain_likely") == 4
    assert sager_severity("unknown") is None

    consensus, divergence = calculate_consensus_forecast(
        "fine_weather", "sager_fair_no_change", "settled_fine"
    )
    assert consensus == "fine_weather"
    assert divergence == 0

    consensus2, divergence2 = calculate_consensus_forecast(
        "settled_fine", "sager_unsettled_rain_likely", None
    )
    assert consensus2 in {"settled_fine", "sager_unsettled_rain_likely"}
    assert divergence2 is not None and divergence2 > 0

    assert calculate_consensus_forecast(None, None, None) == (None, None)


def test_extrapolations_use_regression_rate_and_damping():
    """Test regression-rate override and adaptive damping influence."""
    baseline = calculate_extrapolations(1010.0, 1008.0)
    smoothed = calculate_extrapolations(1010.0, 1008.0, trend_rate_3h=-1.0)
    damped = calculate_extrapolations(1010.0, 1008.0, trend_rate_3h=-1.0, damping=0.45)

    assert smoothed[6].predicted_pressure != baseline[6].predicted_pressure
    assert damped[24].predicted_pressure > smoothed[24].predicted_pressure
    assert -10.0 <= damped[24].predicted_pressure - 1010.0 <= 0.0

    # Damping is clamped to a sane range.
    extreme = calculate_extrapolations(1010.0, 1020.0, damping=5.0)
    assert extreme[24].predicted_pressure <= 1010.0
    assert extreme[24].predicted_pressure >= 950.0
    assert DAMPING_EXPONENT == 0.65


def test_precipitation_probability_uses_wind_speed():
    """Test strong winds increase and calm high pressure slightly reduces rain odds."""
    base = calculate_precipitation_probability(1008.0, -1.0, humidity=70.0)
    breezy = calculate_precipitation_probability(1008.0, -1.0, humidity=70.0, wind_speed=9.0)
    gale = calculate_precipitation_probability(1008.0, -1.0, humidity=70.0, wind_speed=14.0)
    assert base < breezy < gale

    high_base = calculate_precipitation_probability(1018.0, 0.5, humidity=60.0)
    high_calm = calculate_precipitation_probability(1018.0, 0.5, humidity=60.0, wind_speed=0.5)
    assert high_calm < high_base

    biased = calculate_precipitation_probability(1018.0, 0.5, humidity=60.0, precip_bias=8.0)
    assert biased == high_base + 8


def test_falling_storm_wmo_monotonic_and_fog_night():
    """Test index 9 maps to storm, WMO 1/6 reject reversals, and night fog reaches 100%."""
    from custom_components.zambretti_sager.const import ZAMBRETTI_MAPPING

    assert ZAMBRETTI_MAPPING[9] == "stormy_much_rain"
    # WMO: +3h rising then -1h falling (net +2 > 0.3) is NOT monotonic code 1
    assert classify_wmo_pressure_tendency(1000.0, 1003.0, 1002.0) == 2
    # WMO: -3h falling then +1h rising (net -2 < -0.3) is NOT monotonic code 6
    assert classify_wmo_pressure_tendency(1002.0, 999.0, 1000.0) == 7

    day_fog = calculate_fog_probability(5.0, 100.0, is_night=False)
    night_fog = calculate_fog_probability(5.0, 100.0, is_night=True)
    assert day_fog == 90
    assert night_fog == 100


def test_apparent_temperature_cloud_base_and_barometric_stress():
    """Test Wind Chill, Heat Index, Espy LCL cloud base, and barometric stress."""
    from custom_components.zambretti_sager.algorithms import (
        calculate_apparent_temperature,
        calculate_barometric_stress,
        calculate_cloud_base,
    )

    assert calculate_apparent_temperature(None) is None
    # Wind chill at 0 °C and 5 m/s (18 km/h)
    chill = calculate_apparent_temperature(0.0, humidity=60.0, wind_speed=5.0)
    assert chill is not None and chill < 0.0
    # Heat index at 32 °C and 70% RH
    heat = calculate_apparent_temperature(32.0, humidity=70.0, wind_speed=1.0)
    assert heat is not None and heat > 35.0
    # Mild temperature returns dry-bulb
    assert calculate_apparent_temperature(18.4, humidity=50.0, wind_speed=2.0) == 18.4

    assert calculate_cloud_base(None, 10.0) is None
    assert calculate_cloud_base(20.0, 12.0) == 1000
    assert calculate_cloud_base(10.0, 12.0) == 0

    assert calculate_barometric_stress(None) is None
    calm = calculate_barometric_stress(0.1, 0.5, 0.9)
    storm = calculate_barometric_stress(-4.0, -16.0, 0.3)
    assert calm is not None and storm is not None
    assert 0 <= calm < 20 and storm >= 85
