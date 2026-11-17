"""Constants for the Zambretti & Sager integration."""

from __future__ import annotations

from typing import Final

# Re-export algorithmic functions and tables for backward compatibility
from .algorithms import (
    _SAGER_WIND_TABLE,
    SAGER_TREND_RAPID,
    SAGER_TREND_SLOW,
    WIND_COMPASS,
    WIND_QUADRANTS,
    ZAMBRETTI_MAPPING,
    _get_wind_modifier,
    calculate_extrapolations,
    calculate_precipitation_probability,
    calculate_sager_forecast,
    calculate_zambretti_index,
    classify_pressure_trend,
    get_trend_label,
    wind_degrees_to_compass,
)

DOMAIN: Final[str] = "zambretti_sager"

VERSION: Final[str] = "2.2.0"

# Frontend (Lovelace card)
URL_BASE: Final[str] = "/zambretti_sager_card"

JSMODULES: Final[list[dict[str, str]]] = [
    {
        "name": "Zambretti Weather Card",
        "filename": "zambretti-weather-card.js",
        "version": VERSION,
    },
]

# Config entry keys
CONF_PRESSURE_SENSOR: Final[str] = "pressure_sensor"
CONF_WIND_SENSOR: Final[str] = "wind_sensor"
CONF_WIND_SPEED_SENSOR: Final[str] = "wind_speed_sensor"
CONF_TEMPERATURE_SENSOR: Final[str] = "temperature_sensor"
CONF_HUMIDITY_SENSOR: Final[str] = "humidity_sensor"
CONF_LATITUDE: Final[str] = "latitude"
CONF_LONGITUDE: Final[str] = "longitude"
CONF_LOCATION: Final[str] = "location"
CONF_USE_SEA_LEVEL: Final[str] = "use_sea_level_correction"
CONF_ELEVATION: Final[str] = "elevation"
CONF_RAIN_SENSOR: Final[str] = "rain_sensor"

# Alert / calibration thresholds (configurable via the options flow)
CONF_FALLING_RAPID_THRESHOLD: Final[str] = "falling_rapid_threshold"
CONF_STORM_PRECIP_THRESHOLD: Final[str] = "storm_precip_threshold"
CONF_FROST_TEMP_THRESHOLD: Final[str] = "frost_temp_threshold"
CONF_FOG_HUMIDITY_THRESHOLD: Final[str] = "fog_humidity_threshold"

DEFAULT_FALLING_RAPID_THRESHOLD: Final[float] = 1.6
DEFAULT_STORM_PRECIP_THRESHOLD: Final[int] = 75
DEFAULT_FROST_TEMP_THRESHOLD: Final[float] = 2.0
DEFAULT_FOG_HUMIDITY_THRESHOLD: Final[float] = 95.0

# Home Assistant bus events
EVENT_FORECAST_CHANGED: Final[str] = f"{DOMAIN}_forecast_changed"
EVENT_HORIZON_CHANGED: Final[str] = f"{DOMAIN}_forecast_horizon_changed"
EVENT_PRESSURE_DROP: Final[str] = f"{DOMAIN}_pressure_drop_alert"

# Keywords in entity_id or attributes that suggest the sensor already reports
# sea-level pressure (MSLP/QNH), so we shouldn't apply altitude correction again
SEA_LEVEL_SENSOR_HINTS: Final[tuple[str, ...]] = (
    "sea_level",
    "sealevel",
    "mslp",
    "relative",
    "qnh",
    "barometric",
)

__all__ = [
    "CONF_ELEVATION",
    "CONF_FALLING_RAPID_THRESHOLD",
    "CONF_FOG_HUMIDITY_THRESHOLD",
    "CONF_FROST_TEMP_THRESHOLD",
    "CONF_HUMIDITY_SENSOR",
    "CONF_LATITUDE",
    "CONF_LOCATION",
    "CONF_LONGITUDE",
    "CONF_PRESSURE_SENSOR",
    "CONF_RAIN_SENSOR",
    "CONF_STORM_PRECIP_THRESHOLD",
    "CONF_TEMPERATURE_SENSOR",
    "CONF_USE_SEA_LEVEL",
    "CONF_WIND_SENSOR",
    "CONF_WIND_SPEED_SENSOR",
    "DEFAULT_FALLING_RAPID_THRESHOLD",
    "DEFAULT_FOG_HUMIDITY_THRESHOLD",
    "DEFAULT_FROST_TEMP_THRESHOLD",
    "DEFAULT_STORM_PRECIP_THRESHOLD",
    "DOMAIN",
    "EVENT_FORECAST_CHANGED",
    "EVENT_HORIZON_CHANGED",
    "EVENT_PRESSURE_DROP",
    "JSMODULES",
    "SAGER_TREND_RAPID",
    "SAGER_TREND_SLOW",
    "SEA_LEVEL_SENSOR_HINTS",
    "URL_BASE",
    "VERSION",
    "WIND_COMPASS",
    "WIND_QUADRANTS",
    "ZAMBRETTI_MAPPING",
    "_SAGER_WIND_TABLE",
    "_get_wind_modifier",
    "calculate_extrapolations",
    "calculate_precipitation_probability",
    "calculate_sager_forecast",
    "calculate_zambretti_index",
    "classify_pressure_trend",
    "get_trend_label",
    "wind_degrees_to_compass",
]
