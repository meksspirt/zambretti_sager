"""Algorithmic functions for Zambretti, Sager, and weather forecasting."""

from __future__ import annotations

from collections.abc import Sequence
from dataclasses import dataclass
import datetime
import math
from typing import Final

# Zambretti algorithm mapping: pressure trend index (1–32) → translation key
# The original Zambretti algorithm has 32 forecast states grouped by
# pressure trend: Falling (1-9), Steady (10-19), Rising (20-32)
ZAMBRETTI_MAPPING: Final[dict[int, str]] = {
    # Falling pressure (worsening weather)
    1: "settled_fine",
    2: "fine_weather",
    3: "fine_becoming_less_settled",
    4: "fairly_fine_showery_later",
    5: "showery_becoming_more_unsettled",
    6: "unsettled_rain_later",
    7: "rain_at_times_worse_later",
    8: "rain_at_times_becoming_very_unsettled",
    9: "very_unsettled_rain",
    # Steady pressure
    10: "settled_fine",
    11: "fine_weather",
    12: "fine_possibly_showers",
    13: "fairly_fine_showers_likely",
    14: "showery_bright_intervals",
    15: "changeable_some_rain",
    16: "unsettled_rain_at_times",
    17: "rain_at_frequent_intervals",
    18: "very_unsettled_rain",
    19: "stormy_much_rain",
    # Rising pressure (improving weather)
    20: "settled_fine",
    21: "fine_weather",
    22: "becoming_fine",
    23: "fairly_fine_improving",
    24: "fairly_fine_possibly_showers_early",
    25: "showery_early_improving",
    26: "changeable_mending",
    27: "rather_unsettled_clearing_later",
    28: "unsettled_probably_improving",
    29: "unsettled_short_fine_intervals",
    30: "very_unsettled_finer_at_times",
    31: "stormy_possibly_improving",
    32: "stormy_much_rain",
}

# Synoptic damping exponent for multi-hour barometric trend decay
DAMPING_EXPONENT: Final[float] = 0.65
MIN_PHYSICAL_PRESSURE: Final[float] = 950.0
MAX_PHYSICAL_PRESSURE: Final[float] = 1060.0


def _clamp_pressure(pressure: float) -> float:
    """Clamp pressure within physical atmospheric limits at sea level."""
    return max(MIN_PHYSICAL_PRESSURE, min(MAX_PHYSICAL_PRESSURE, pressure))


# Sager algorithm pressure trend thresholds (hPa over ~3 hours)
SAGER_TREND_RAPID: Final[float] = 1.4
SAGER_TREND_SLOW: Final[float] = 0.7

# 8-point wind compass directions
WIND_COMPASS: Final[tuple[str, ...]] = ("N", "NE", "E", "SE", "S", "SW", "W", "NW")

# Wind direction quadrants for Sager algorithm refinement
WIND_QUADRANTS: Final[dict[str, str]] = {
    "N": "northerly",
    "NE": "northerly",
    "E": "easterly",
    "SE": "easterly",
    "S": "southerly",
    "SW": "southerly",
    "W": "westerly",
    "NW": "westerly",
}

# Sager wind-enhanced forecast table.
# First key = pressure zone ("fair", "unsettled", "changeable")
# Second key = trend from classify_pressure_trend()
# Third key = wind modifier or None (backward compatible fallback)
_SAGER_WIND_TABLE: Final[dict[str, dict[str, dict[str | None, str]]]] = {
    "fair": {
        "rising_rapidly": {
            None: "sager_fair_improving",
            "northerly": "sager_fair_improving",
            "easterly": "sager_fair_improving",
            "southerly": "sager_fair_tending_to_deteriorate",
            "westerly": "sager_variable_slowly_improving",
        },
        "rising_slowly": {
            None: "sager_fair_improving",
            "northerly": "sager_fair_improving",
            "easterly": "sager_fair_improving",
            "southerly": "sager_fair_tending_to_deteriorate",
            "westerly": "sager_variable_slowly_improving",
        },
        "falling_rapidly": {
            None: "sager_fair_tending_to_deteriorate",
            "northerly": "sager_fair_tending_to_deteriorate",
            "easterly": "sager_variable_slowly_deteriorating",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_changeable_becoming_more_unsettled",
        },
        "falling_slowly": {
            None: "sager_fair_tending_to_deteriorate",
            "northerly": "sager_fair_tending_to_deteriorate",
            "easterly": "sager_variable_slowly_deteriorating",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_changeable_becoming_more_unsettled",
        },
        "steady": {
            None: "sager_fair_no_change",
            "northerly": "sager_fair_no_change",
            "easterly": "sager_variable_some_change",
            "southerly": "sager_fair_tending_to_deteriorate",
            "westerly": "sager_variable_some_change",
        },
    },
    "unsettled": {
        "rising_rapidly": {
            None: "sager_unsettled_probably_improving",
            "northerly": "sager_unsettled_probably_improving",
            "easterly": "sager_unsettled_probably_improving",
            "southerly": "sager_unsettled_rain_at_times",
            "westerly": "sager_variable_slowly_improving",
        },
        "rising_slowly": {
            None: "sager_unsettled_probably_improving",
            "northerly": "sager_unsettled_probably_improving",
            "easterly": "sager_unsettled_probably_improving",
            "southerly": "sager_unsettled_rain_at_times",
            "westerly": "sager_variable_slowly_improving",
        },
        "falling_rapidly": {
            None: "sager_unsettled_rain_likely",
            "northerly": "sager_unsettled_rain_at_times",
            "easterly": "sager_unsettled_rain_at_times",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_unsettled_rain_likely",
        },
        "falling_slowly": {
            None: "sager_unsettled_rain_likely",
            "northerly": "sager_unsettled_rain_at_times",
            "easterly": "sager_unsettled_rain_at_times",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_unsettled_rain_likely",
        },
        "steady": {
            None: "sager_unsettled_rain_at_times",
            "northerly": "sager_unsettled_rain_at_times",
            "easterly": "sager_variable_some_change",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_changeable_becoming_more_unsettled",
        },
    },
    "changeable": {
        "rising_rapidly": {
            None: "sager_changeable_becoming_fairer",
            "northerly": "sager_changeable_becoming_fairer",
            "easterly": "sager_changeable_becoming_fairer",
            "southerly": "sager_variable_slowly_improving",
            "westerly": "sager_variable_slowly_improving",
        },
        "falling_rapidly": {
            None: "sager_changeable_becoming_more_unsettled",
            "northerly": "sager_changeable_becoming_more_unsettled",
            "easterly": "sager_variable_slowly_deteriorating",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_changeable_becoming_more_unsettled",
        },
        "rising_slowly": {
            None: "sager_variable_slowly_improving",
            "northerly": "sager_variable_slowly_improving",
            "easterly": "sager_variable_some_change",
            "southerly": "sager_fair_tending_to_deteriorate",
            "westerly": "sager_variable_some_change",
        },
        "falling_slowly": {
            None: "sager_variable_slowly_deteriorating",
            "northerly": "sager_variable_slowly_deteriorating",
            "easterly": "sager_variable_some_change",
            "southerly": "sager_unsettled_rain_likely",
            "westerly": "sager_unsettled_rain_at_times",
        },
        "steady": {
            None: "sager_variable_some_change",
            "northerly": "sager_fair_no_change",
            "easterly": "sager_variable_some_change",
            "southerly": "sager_fair_tending_to_deteriorate",
            "westerly": "sager_changeable_becoming_more_unsettled",
        },
    },
}

# Exhaustive list of valid Zambretti forecast string states (for SensorDeviceClass.ENUM)
ZAMBRETTI_OPTIONS: Final[list[str]] = list(
    dict.fromkeys(list(ZAMBRETTI_MAPPING.values()) + ["stable"])
)

# Exhaustive list of valid Sager forecast string states (for SensorDeviceClass.ENUM)
SAGER_OPTIONS: Final[list[str]] = list(
    dict.fromkeys(
        val
        for trend_map in _SAGER_WIND_TABLE.values()
        for wind_map in trend_map.values()
        for val in wind_map.values()
    )
)

# Coarse condition severity (0 = settled/fine, 5 = stormy) used by the
# confidence score, the consensus model and forecast verification.
ZAMBRETTI_SEVERITY: Final[dict[str, int]] = {
    "settled_fine": 0,
    "fine_weather": 0,
    "stable": 0,
    "fine_becoming_less_settled": 1,
    "fine_possibly_showers": 1,
    "fairly_fine_improving": 1,
    "fairly_fine_possibly_showers_early": 1,
    "becoming_fine": 1,
    "fairly_fine_showery_later": 2,
    "fairly_fine_showers_likely": 2,
    "showery_bright_intervals": 2,
    "changeable_mending": 2,
    "showery_early_improving": 2,
    "unsettled_short_fine_intervals": 2,
    "changeable_some_rain": 2,
    "showery_becoming_more_unsettled": 3,
    "unsettled_rain_later": 3,
    "unsettled_rain_at_times": 3,
    "rather_unsettled_clearing_later": 3,
    "unsettled_probably_improving": 3,
    "very_unsettled_finer_at_times": 3,
    "rain_at_times_worse_later": 3,
    "rain_at_frequent_intervals": 3,
    "rain_at_times_becoming_very_unsettled": 4,
    "very_unsettled_rain": 4,
    "stormy_possibly_improving": 4,
    "stormy_much_rain": 5,
}

SAGER_SEVERITY: Final[dict[str, int]] = {
    "sager_fair_improving": 0,
    "sager_fair_no_change": 0,
    "sager_fair_tending_to_deteriorate": 1,
    "sager_variable_slowly_improving": 1,
    "sager_variable_some_change": 1,
    "sager_changeable_becoming_fairer": 1,
    "sager_variable_slowly_deteriorating": 2,
    "sager_unsettled_probably_improving": 2,
    "sager_changeable_becoming_more_unsettled": 3,
    "sager_unsettled_rain_at_times": 3,
    "sager_unsettled_rain_likely": 4,
}

# WMO 3-hour pressure tendency codes (WMO Manual on Codes, code table 0200).
WMO_TENDENCY_DESCRIPTIONS: Final[dict[int, str]] = {
    0: "Increasing, then decreasing; pressure same or lower than 3 hours ago",
    1: "Increasing, then steady; or increasing, then increasing more slowly",
    2: "Increasing steadily or unsteadily",
    3: "Falling or steady, then increasing; or increasing then increasing more rapidly",
    4: "Steady",
    5: "Decreasing, then increasing; pressure same or higher than 3 hours ago",
    6: "Decreasing, then steady; or decreasing, then decreasing more slowly",
    7: "Decreasing steadily or unsteadily",
    8: "Steady or increasing, then decreasing; or decreasing then decreasing more rapidly",
}

WMO_STEADY_EPSILON: Final[float] = 0.3


def zambretti_severity(state: str | None) -> int | None:
    """Return the coarse severity (0-5) of a Zambretti state."""
    if state is None:
        return None
    return ZAMBRETTI_SEVERITY.get(state)


def sager_severity(state: str | None) -> int | None:
    """Return the coarse severity (0-5) of a Sager state."""
    if state is None:
        return None
    return SAGER_SEVERITY.get(state)


def classify_wmo_pressure_tendency(
    p_3h: float | None,
    p_1_5h: float | None = None,
    p_now: float | None = None,
) -> int | None:
    """Classify the 3-hour pressure tendency using the WMO 0-8 code table.

    Uses the net 3-hour change and, when available, the pressure 1.5 hours ago
    to distinguish accelerating, decelerating and reversible tendencies.

    Args:
        p_3h: Pressure 3 hours ago (hPa).
        p_1_5h: Optional pressure 1.5 hours ago (hPa).
        p_now: Current pressure (hPa).

    Returns:
        WMO tendency code 0-8, or None when data is insufficient.
    """
    if p_3h is None or p_now is None:
        return None

    net = p_now - p_3h
    eps = WMO_STEADY_EPSILON

    if p_1_5h is None:
        if net > eps:
            return 2
        if net < -eps:
            return 7
        return 4

    first = p_1_5h - p_3h
    second = p_now - p_1_5h

    if net > eps:
        if first < -eps and second > eps:
            return 3
        if second < first:
            return 1
        return 2

    if net < -eps:
        if first > eps and second < -eps:
            return 8
        if second > first:
            return 6
        return 7

    # Net change is within the steady band: shape decides between 0, 4 and 5.
    if first > eps and second < -eps:
        return 0
    if first < -eps and second > eps:
        return 5
    return 4


def calculate_dew_point(temperature: float | None, humidity: float | None) -> float | None:
    """Return the dew point in °C using the Magnus formula."""
    if temperature is None or humidity is None:
        return None
    humidity = max(1.0, min(100.0, humidity))
    a, b = 17.62, 243.12
    gamma = math.log(humidity / 100.0) + (a * temperature) / (b + temperature)
    denominator = a - gamma
    if denominator == 0:
        return None
    return round((b * gamma) / denominator, 2)


def calculate_snow_probability(
    precipitation_probability: int | None,
    temperature: float | None,
) -> int | None:
    """Estimate the chance that precipitation falls as snow (0-100%)."""
    if precipitation_probability is None or temperature is None:
        return None
    if temperature <= 1.0:
        return int(max(0, min(100, precipitation_probability)))
    if temperature >= 3.5:
        return 0
    factor = (3.5 - temperature) / 2.5
    return int(round(max(0.0, min(100.0, precipitation_probability * factor))))


def calculate_fog_probability(
    temperature: float | None,
    humidity: float | None,
    wind_speed: float | None = None,
) -> int | None:
    """Estimate fog probability (0-100%) from humidity, dew point spread and wind."""
    if temperature is None or humidity is None:
        return None

    dew_point = calculate_dew_point(temperature, humidity)
    if dew_point is None:
        return None
    spread = temperature - dew_point

    score = 0
    if humidity >= 98:
        score += 45
    elif humidity >= 95:
        score += 35
    elif humidity >= 90:
        score += 20
    elif humidity >= 85:
        score += 10

    if spread <= 0.5:
        score += 35
    elif spread <= 1.5:
        score += 25
    elif spread <= 3.0:
        score += 12
    elif spread >= 6.0:
        score -= 10

    if wind_speed is not None:
        if wind_speed < 1.0:
            score += 15
        elif wind_speed < 3.0:
            score += 5
        elif wind_speed > 6.0:
            score -= 20

    return int(round(max(0.0, min(100.0, float(score)))))


def linear_pressure_trend(
    entries: Sequence[tuple[datetime.datetime, float]],
    now: datetime.datetime,
    hours: int = 6,
) -> tuple[float | None, float | None]:
    """Fit a least-squares line to recent pressure samples.

    Args:
        entries: Chronologically sorted (timestamp, pressure) pairs.
        now: Reference time.
        hours: Look-back window in hours.

    Returns:
        Tuple of (slope in hPa per 3 hours, R²). Both are None when fewer than
        three points or less than one hour of data is available.
    """
    cutoff = now - datetime.timedelta(hours=hours)
    points = [(t, p) for t, p in entries if t >= cutoff]
    if len(points) < 3:
        return None, None

    first_ts = points[0][0]
    span_hours = (points[-1][0] - first_ts).total_seconds() / 3600.0
    if span_hours < 1.0:
        return None, None

    xs = [(t - first_ts).total_seconds() / 3600.0 for t, _ in points]
    ys = [p for _, p in points]
    n = len(points)
    sum_x = sum(xs)
    sum_y = sum(ys)
    sum_xx = sum(x * x for x in xs)
    sum_xy = sum(x * y for x, y in zip(xs, ys, strict=True))
    denominator = n * sum_xx - sum_x * sum_x
    if denominator == 0:
        return None, None

    slope = (n * sum_xy - sum_x * sum_y) / denominator
    intercept = (sum_y - slope * sum_x) / n

    mean_y = sum_y / n
    ss_tot = sum((y - mean_y) ** 2 for y in ys)
    ss_res = sum((y - (slope * x + intercept)) ** 2 for x, y in zip(xs, ys, strict=True))
    r_squared = 1.0 if ss_tot <= 1e-9 else max(0.0, min(1.0, 1.0 - ss_res / ss_tot))

    return round(slope * 3.0, 3), round(r_squared, 2)


def calculate_forecast_confidence(
    *,
    p_now: float | None,
    p_6h: float | None,
    p_12h: float | None,
    p_24h: float | None,
    wind_degrees: float | None,
    humidity: float | None,
    pressure_age_seconds: float | None,
    zambretti_state: str | None = None,
    sager_state: str | None = None,
    trend_r2: float | None = None,
    model_divergence: int | None = None,
) -> int:
    """Estimate forecast confidence (0-100) from data completeness and agreement."""
    score = 40.0

    if p_now is not None:
        score += 10
    if p_6h is not None:
        score += 10
    if p_12h is not None:
        score += 10
    if p_24h is not None:
        score += 10
    if wind_degrees is not None:
        score += 7
    if humidity is not None:
        score += 5
    if trend_r2 is not None:
        if trend_r2 >= 0.5:
            score += 5
        elif trend_r2 < 0.2:
            score -= 5

    z_sev = zambretti_severity(zambretti_state)
    s_sev = sager_severity(sager_state)
    if z_sev is not None and s_sev is not None:
        difference = abs(z_sev - s_sev)
        if difference == 0:
            score += 5
        elif difference >= 2:
            score -= 10.0 * min(difference, 3)

    if model_divergence is not None:
        score -= min(20.0, model_divergence * 0.2)

    if pressure_age_seconds is not None:
        if pressure_age_seconds > 7200:
            score -= 35
        elif pressure_age_seconds > 1800:
            score -= 20
        elif pressure_age_seconds > 900:
            score -= 10

    if p_now is not None and not (MIN_PHYSICAL_PRESSURE <= p_now <= MAX_PHYSICAL_PRESSURE):
        score -= 15

    return int(round(max(0.0, min(100.0, score))))


def calculate_consensus_forecast(
    zambretti_state: str | None,
    sager_state: str | None,
    regression_state: str | None = None,
) -> tuple[str | None, int | None]:
    """Blend Zambretti, Sager and regression-based forecasts by severity.

    Returns:
        Tuple of (consensus Zambretti state, model divergence 0-100).
    """
    candidates: list[tuple[str, int, float, int]] = []
    z_sev = zambretti_severity(zambretti_state)
    s_sev = sager_severity(sager_state)
    r_sev = zambretti_severity(regression_state)

    if zambretti_state is not None and z_sev is not None:
        candidates.append((zambretti_state, z_sev, 0.4, 0))
    if sager_state is not None and s_sev is not None:
        candidates.append((sager_state, s_sev, 0.3, 1))
    if regression_state is not None and r_sev is not None:
        candidates.append((regression_state, r_sev, 0.3, 2))

    if not candidates:
        return None, None

    total_weight = sum(weight for _, _, weight, _ in candidates)
    target = sum(sev * weight for _, sev, weight, _ in candidates) / total_weight
    consensus_state = min(candidates, key=lambda item: (abs(item[1] - target), item[3]))[0]

    severities = [sev for _, sev, _, _ in candidates]
    divergence = int(round((max(severities) - min(severities)) / 5.0 * 100.0))
    return consensus_state, divergence


def calculate_precipitation_probability(
    p_now: float,
    delta_hpa: float,
    humidity: float | None = None,
    temperature: float | None = None,
    wind_speed: float | None = None,
) -> int:
    """Calculate precipitation probability percentage.

    Combines pressure level, 3-hour trend, relative humidity and (when
    available) the dew point spread. ``wind_speed`` is accepted for future
    tuning but does not change the result yet.
    """
    if p_now < 1000:
        base_prob = 90
    elif p_now < 1005:
        base_prob = 70
    elif p_now < 1010:
        base_prob = 50
    elif p_now < 1015:
        base_prob = 30
    elif p_now < 1020:
        base_prob = 15
    else:
        base_prob = 5

    if delta_hpa < -3.0:
        trend_modifier = 30
    elif delta_hpa < -1.6:
        trend_modifier = 15
    elif delta_hpa > 3.0:
        trend_modifier = -30
    elif delta_hpa > 1.6:
        trend_modifier = -15
    else:
        trend_modifier = 0

    humidity_modifier = 0
    if humidity is not None:
        if humidity >= 90:
            humidity_modifier = 15
        elif humidity >= 80:
            humidity_modifier = 10
        elif humidity >= 70:
            humidity_modifier = 5
        elif humidity <= 30:
            humidity_modifier = -15
        elif humidity <= 40:
            humidity_modifier = -10

    dew_point_modifier = 0
    if temperature is not None and humidity is not None:
        dew_point = calculate_dew_point(temperature, humidity)
        if dew_point is not None:
            spread = temperature - dew_point
            if spread <= 1.0:
                dew_point_modifier = 10
            elif spread <= 3.0:
                dew_point_modifier = 5
            elif spread >= 10.0:
                dew_point_modifier = -10
            elif spread >= 6.0:
                dew_point_modifier = -5

    return round(
        max(0, min(100, base_prob + trend_modifier + humidity_modifier + dew_point_modifier))
    )


def classify_pressure_trend(delta_hpa: float) -> str:
    """Classify pressure trend for the Sager algorithm.

    Args:
        delta_hpa: Pressure change in hPa over the measurement period.

    Returns:
        One of: "rising_rapidly", "rising_slowly", "steady",
                "falling_slowly", "falling_rapidly".
    """
    if delta_hpa >= SAGER_TREND_RAPID:
        return "rising_rapidly"
    if delta_hpa >= SAGER_TREND_SLOW:
        return "rising_slowly"
    if delta_hpa <= -SAGER_TREND_RAPID:
        return "falling_rapidly"
    if delta_hpa <= -SAGER_TREND_SLOW:
        return "falling_slowly"
    return "steady"


def get_trend_label(delta_hpa: float) -> str:
    """Return human-readable trend label for attributes."""
    trend = classify_pressure_trend(delta_hpa)
    return {
        "rising_rapidly": "↑↑ Rising Fast",
        "rising_slowly": "↑ Rising",
        "steady": "→ Steady",
        "falling_slowly": "↓ Falling",
        "falling_rapidly": "↓↓ Falling Fast",
    }.get(trend, "→ Steady")


def calculate_zambretti_index(
    p_now: float,
    delta_hpa: float,
    month: int | None = None,
    wind_degrees: float | None = None,
    latitude: float | None = None,
) -> int:
    """Calculate Zambretti index (1–32) from pressure, trend, season, and wind.

    Accounts for:
      - 3 pressure trend windows: falling (1-9), steady (10-19), rising (20-32)
      - Seasonal offset: summer tends finer (+1 hPa equiv), winter tends unsettled (-1 hPa equiv),
        with inverted seasons in the Southern Hemisphere (latitude < 0)
      - Wind direction refinement: polar/continental winds boost effective pressure (+1.5 hPa),
        equatorial/oceanic winds reduce effective pressure (-1.5 hPa)
    """
    p_eff = p_now

    # Seasonal adjustment
    if month is not None:
        is_southern = latitude is not None and latitude < 0
        is_summer = month in (6, 7, 8) if not is_southern else month in (12, 1, 2)
        is_winter = month in (12, 1, 2) if not is_southern else month in (6, 7, 8)
        if is_summer:
            p_eff += 1.0
        elif is_winter:
            p_eff -= 1.0

    # Wind direction adjustment
    if wind_degrees is not None:
        compass = wind_degrees_to_compass(wind_degrees)
        quadrant = WIND_QUADRANTS.get(compass)
        if quadrant:
            if latitude is not None and latitude < 0:
                if quadrant == "northerly":
                    p_eff -= 1.5  # Warm/moist air from equator in SH
                elif quadrant == "southerly":
                    p_eff += 1.5  # Cold/dry polar air in SH
            else:
                if quadrant == "southerly":
                    p_eff -= 1.5  # Warm/moist oceanic air in NH
                elif quadrant == "northerly":
                    p_eff += 1.5  # Cold/dry continental air in NH

    if delta_hpa <= -1.6:  # Falling
        z = round(127 - 0.12 * p_eff)
        return max(1, min(z, 9))
    elif delta_hpa >= 1.6:  # Rising
        z = round(185 - 0.16 * p_eff)
        return max(20, min(z, 32))
    else:  # Steady
        z = round(144 - 0.13 * p_eff)
        return max(10, min(z, 19))


def wind_degrees_to_compass(degrees: float | None) -> str | None:
    """Convert wind direction in degrees to 8-point compass string (N, NE, E, ...)."""
    if degrees is None:
        return None
    index = round(degrees / 45) % 8
    return WIND_COMPASS[index]


def _get_wind_modifier(wind_degrees: float | None, latitude: float | None = None) -> str | None:
    """Convert wind direction to a Sager wind quadrant modifier, accounting for hemisphere."""
    if wind_degrees is None:
        return None
    compass = wind_degrees_to_compass(wind_degrees)
    quadrant = WIND_QUADRANTS.get(compass)
    if quadrant and latitude is not None and latitude < 0:
        # Invert meridional quadrant for Southern Hemisphere
        if quadrant == "northerly":
            return "southerly"
        if quadrant == "southerly":
            return "northerly"
    return quadrant


def calculate_sager_forecast(
    pressure_hpa: float,
    delta_hpa: float,
    wind_degrees: float | None = None,
    latitude: float | None = None,
) -> str:
    """Calculate Sager forecast with wind direction refinement and hemisphere support.

    Uses pressure zone, 3-hour trend, optional wind direction, and latitude to select
    the most appropriate forecast state. In the Southern Hemisphere (latitude < 0),
    the meridional wind influence is inverted.

    Args:
        pressure_hpa: Current pressure (preferably sea-level corrected) in hPa.
        delta_hpa: Pressure change over ~3 hours.
        wind_degrees: Optional wind direction in degrees.
        latitude: Station latitude in degrees (used for hemisphere determination).

    Returns:
        Translation key for the Sager forecast state.
    """
    trend = classify_pressure_trend(delta_hpa)
    modifier = _get_wind_modifier(wind_degrees, latitude=latitude)

    if pressure_hpa > 1020:
        zone = "fair"
    elif pressure_hpa < 1005:
        zone = "unsettled"
    else:
        zone = "changeable"

    row = _SAGER_WIND_TABLE[zone][trend]
    return row.get(modifier, row[None])


@dataclass(frozen=True)
class ExtrapolatedForecast:
    """Predicted pressure and forecast state for a future time horizon."""

    predicted_pressure: float
    forecast_state: str


def calculate_extrapolations(
    p_now: float,
    p_3h: float,
    p_6h: float | None = None,
    p_12h: float | None = None,
    month: int | None = None,
    wind_degrees: float | None = None,
    latitude: float | None = None,
    trend_rate_3h: float | None = None,
    damping: float = DAMPING_EXPONENT,
) -> dict[int, ExtrapolatedForecast]:
    """Calculate extrapolated pressure and Zambretti states for 6h, 12h, and 24h horizons.

    Applies non-linear synoptic damping (alpha ≈ 0.65 by default) to prevent
    unrealistically extreme pressure deviations on longer horizons, and clamps
    to physical bounds. When a least-squares ``trend_rate_3h`` (hPa/3h) is
    supplied, it replaces the noisy two-point rates for all horizons. The
    damping exponent may be adapted by the forecast verification ledger.
    """
    alpha = min(1.0, max(0.3, damping))

    if trend_rate_3h is not None:
        rate_3h = trend_rate_3h
        rate_12_3h = trend_rate_3h
        rate_24_3h = trend_rate_3h
    else:
        rate_3h = p_now - p_3h

        p_ref_12 = p_6h if p_6h is not None else p_3h
        h_12 = 6 if p_6h is not None else 3
        rate_12_3h = (p_now - p_ref_12) / h_12 * 3

        if p_12h is not None:
            p_ref_24 = p_12h
            h_24 = 12
        elif p_6h is not None:
            p_ref_24 = p_6h
            h_24 = 6
        else:
            p_ref_24 = p_3h
            h_24 = 3
        rate_24_3h = (p_now - p_ref_24) / h_24 * 3

    # 6h extrapolation: (6/3)^alpha
    delta_6h = rate_3h * (2.0**alpha)
    predicted_p_6h = round(_clamp_pressure(p_now + delta_6h), 1)
    zambretti_6h = ZAMBRETTI_MAPPING.get(
        calculate_zambretti_index(
            predicted_p_6h,
            rate_3h,
            month=month,
            wind_degrees=wind_degrees,
            latitude=latitude,
        ),
        "stable",
    )

    # 12h extrapolation: (12/3)^alpha
    delta_12h = rate_12_3h * (4.0**alpha)
    predicted_p_12h = round(_clamp_pressure(p_now + delta_12h), 1)
    zambretti_12h = ZAMBRETTI_MAPPING.get(
        calculate_zambretti_index(
            predicted_p_12h,
            rate_12_3h,
            month=month,
            wind_degrees=wind_degrees,
            latitude=latitude,
        ),
        "stable",
    )

    # 24h extrapolation: (24/3)^alpha
    delta_24h = rate_24_3h * (8.0**alpha)
    predicted_p_24h = round(_clamp_pressure(p_now + delta_24h), 1)
    zambretti_24h = ZAMBRETTI_MAPPING.get(
        calculate_zambretti_index(
            predicted_p_24h,
            rate_24_3h,
            month=month,
            wind_degrees=wind_degrees,
            latitude=latitude,
        ),
        "stable",
    )

    return {
        6: ExtrapolatedForecast(predicted_p_6h, zambretti_6h),
        12: ExtrapolatedForecast(predicted_p_12h, zambretti_12h),
        24: ExtrapolatedForecast(predicted_p_24h, zambretti_24h),
    }
