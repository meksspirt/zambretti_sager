"""Forecast engine: pure domain service for computing weather forecasts."""

from __future__ import annotations

from dataclasses import dataclass
import datetime

from .algorithms import (
    DAMPING_EXPONENT,
    ZAMBRETTI_MAPPING,
    calculate_apparent_temperature,
    calculate_barometric_stress,
    calculate_cloud_base,
    calculate_consensus_forecast,
    calculate_dew_point,
    calculate_extrapolations,
    calculate_fog_probability,
    calculate_forecast_confidence,
    calculate_precipitation_probability,
    calculate_sager_forecast,
    calculate_snow_probability,
    calculate_zambretti_index,
    classify_wmo_pressure_tendency,
    get_trend_label,
    wind_degrees_to_compass,
)


@dataclass
class ForecastData:
    """Snapshot of data and computed forecasts."""

    available: bool
    p_now: float | None = None  # Current sea-level pressure (hPa)
    p_3h: float | None = None  # Pressure 3 hours ago
    p_6h: float | None = None  # Pressure 6 hours ago
    p_12h: float | None = None  # Pressure 12 hours ago
    p_24h: float | None = None  # Pressure 24 hours ago
    raw_pressure: float | None = None  # Station pressure as reported (hPa)
    wind_degrees: float | None = None  # Wind direction in degrees
    wind_direction: str | None = None  # Wind compass (e.g. "NW")
    wind_speed: float | None = None  # Wind speed (m/s)
    humidity: float | None = None  # Relative humidity (%)
    dew_point: float | None = None  # Dew point (°C)
    apparent_temperature: float | None = None  # Feels-like temperature (°C)
    cloud_base: int | None = None  # Estimated LCL cloud base (m)
    barometric_stress: int | None = None  # Biometeorological stress index 0-100%
    altitude: float | None = None  # Station altitude (meters)
    temperature: float = 15.0  # Current temperature (°C)
    temperature_available: bool = False  # True when a real temperature sensor is configured
    is_night: bool = False  # True if sun is below horizon
    rain: bool | None = None  # True when a rain sensor reports precipitation
    last_updated: datetime.datetime | None = None  # UTC timestamp of this snapshot

    # Pre-calculated forecast fields
    delta_3h: float | None = None  # Pressure delta over 3h
    pressure_change_24h: float | None = None  # Pressure delta over 24h
    trend_label: str = "→ Steady"  # Trend string for attributes
    trend_rate_3h: float | None = None  # Least-squares pressure rate (hPa/3h)
    trend_r2: float | None = None  # Regression coefficient of determination
    wmo_tendency_code: int | None = None  # WMO 3-hour tendency code (0-8)
    zambretti_state: str | None = None  # Current Zambretti forecast translation key
    sager_state: str | None = None  # Current Sager forecast translation key
    consensus_state: str | None = None  # Weighted Zambretti/Sager/regression consensus
    model_divergence: int | None = None  # 0-100 disagreement between models
    confidence: int | None = None  # Forecast confidence 0-100
    zambretti_6h: str | None = None  # 6h Zambretti forecast translation key
    predicted_p_6h: float | None = None  # Predicted pressure in 6h
    zambretti_12h: str | None = None  # 12h Zambretti forecast translation key
    predicted_p_12h: float | None = None  # Predicted pressure in 12h
    zambretti_24h: str | None = None  # 24h Zambretti forecast translation key
    predicted_p_24h: float | None = None  # Predicted pressure in 24h
    precip_probability: int | None = None  # Precipitation probability 0-100%
    snow_probability: int | None = None  # Snow probability 0-100%
    fog_probability: int | None = None  # Fog probability 0-100%

    # Forecast verification (ledger)
    forecast_accuracy: int | None = None  # Verified hit rate 0-100%
    last_forecast_hit: str | None = None  # "hit" / "miss"
    calibration_samples: int = 0  # Number of verified forecasts used for calibration
    adaptive_damping: float = DAMPING_EXPONENT  # Calibrated extrapolation damping exponent
    wind_factor: float = 1.0  # Calibrated wind adjustment multiplier
    seasonal_factor: float = 1.0  # Calibrated seasonal adjustment multiplier
    precip_bias: float = 0.0  # Calibrated precipitation probability offset (%)
    pressure_bias: float = 0.0  # Calibrated 24h pressure offset (hPa)


@dataclass(frozen=True)
class WeatherObservations:
    """Snapshot of raw weather observations to evaluate."""

    p_now: float
    p_3h: float
    p_6h: float | None = None
    p_12h: float | None = None
    p_24h: float | None = None
    p_1_5h: float | None = None
    raw_pressure: float | None = None
    wind_degrees: float | None = None
    wind_speed: float | None = None
    humidity: float | None = None
    temperature: float = 15.0
    temperature_available: bool = False
    altitude: float | None = None
    latitude: float | None = None
    is_night: bool = False
    rain: bool | None = None
    pressure_age_seconds: float | None = None
    trend_rate_3h: float | None = None
    trend_r2: float | None = None
    calibration_damping: float = DAMPING_EXPONENT
    calibration_wind_factor: float = 1.0
    calibration_seasonal_factor: float = 1.0
    calibration_precip_bias: float = 0.0
    calibration_pressure_bias: float = 0.0
    timestamp: datetime.datetime | None = None


class ForecastEngine:
    """Pure domain service for generating forecasts from barometric trends."""

    @staticmethod
    def compute(obs: WeatherObservations) -> ForecastData:
        """Calculate forecasts, trends, extrapolations, and probabilities."""
        delta_3h = round(obs.p_now - obs.p_3h, 2)
        trend_label = get_trend_label(delta_3h)

        month = obs.timestamp.month if obs.timestamp else None
        zambretti_index = calculate_zambretti_index(
            obs.p_now,
            delta_3h,
            month=month,
            wind_degrees=obs.wind_degrees,
            latitude=obs.latitude,
            seasonal_factor=obs.calibration_seasonal_factor,
            wind_factor=obs.calibration_wind_factor,
        )
        zambretti_state = ZAMBRETTI_MAPPING.get(zambretti_index, "stable")

        sager_state = calculate_sager_forecast(
            obs.p_now,
            delta_3h,
            obs.wind_degrees,
            latitude=obs.latitude,
        )
        wind_direction = wind_degrees_to_compass(obs.wind_degrees)

        # Regression-based model: smoothed least-squares trend over recent history.
        regression_state: str | None = None
        if obs.trend_rate_3h is not None:
            regression_index = calculate_zambretti_index(
                obs.p_now,
                obs.trend_rate_3h,
                month=month,
                wind_degrees=obs.wind_degrees,
                latitude=obs.latitude,
                seasonal_factor=obs.calibration_seasonal_factor,
                wind_factor=obs.calibration_wind_factor,
            )
            regression_state = ZAMBRETTI_MAPPING.get(regression_index, "stable")

        consensus_state, model_divergence = calculate_consensus_forecast(
            zambretti_state,
            sager_state,
            regression_state,
        )

        extrapolations = calculate_extrapolations(
            obs.p_now,
            obs.p_3h,
            obs.p_6h,
            obs.p_12h,
            month=month,
            wind_degrees=obs.wind_degrees,
            latitude=obs.latitude,
            trend_rate_3h=obs.trend_rate_3h,
            damping=obs.calibration_damping,
            seasonal_factor=obs.calibration_seasonal_factor,
            wind_factor=obs.calibration_wind_factor,
            p_24h=obs.p_24h,
            trend_r2=obs.trend_r2,
            pressure_bias=obs.calibration_pressure_bias,
        )

        precip_prob = calculate_precipitation_probability(
            obs.p_now,
            delta_3h,
            obs.humidity,
            temperature=obs.temperature if obs.temperature_available else None,
            wind_speed=obs.wind_speed,
            precip_bias=obs.calibration_precip_bias,
        )
        snow_prob = calculate_snow_probability(
            precip_prob,
            obs.temperature if obs.temperature_available else None,
        )
        fog_prob = calculate_fog_probability(
            obs.temperature if obs.temperature_available else None,
            obs.humidity,
            obs.wind_speed,
            is_night=obs.is_night,
        )
        dew_point = calculate_dew_point(
            obs.temperature if obs.temperature_available else None,
            obs.humidity,
        )
        apparent_temperature = calculate_apparent_temperature(
            obs.temperature if obs.temperature_available else None,
            obs.humidity,
            obs.wind_speed,
        )
        cloud_base = calculate_cloud_base(
            obs.temperature if obs.temperature_available else None,
            dew_point,
        )
        pressure_change_24h = round(obs.p_now - obs.p_24h, 2) if obs.p_24h is not None else None
        barometric_stress = calculate_barometric_stress(
            delta_3h,
            pressure_change_24h,
            obs.trend_r2,
        )
        wmo_tendency = classify_wmo_pressure_tendency(obs.p_3h, obs.p_1_5h, obs.p_now)

        confidence = calculate_forecast_confidence(
            p_now=obs.p_now,
            p_6h=obs.p_6h,
            p_12h=obs.p_12h,
            p_24h=obs.p_24h,
            wind_degrees=obs.wind_degrees,
            humidity=obs.humidity,
            pressure_age_seconds=obs.pressure_age_seconds,
            zambretti_state=zambretti_state,
            sager_state=sager_state,
            trend_r2=obs.trend_r2,
            model_divergence=model_divergence,
        )

        f6 = extrapolations[6]
        f12 = extrapolations[12]
        f24 = extrapolations[24]

        return ForecastData(
            available=True,
            p_now=round(obs.p_now, 1),
            p_3h=round(obs.p_3h, 1),
            p_6h=round(obs.p_6h, 1) if obs.p_6h is not None else None,
            p_12h=round(obs.p_12h, 1) if obs.p_12h is not None else None,
            p_24h=round(obs.p_24h, 1) if obs.p_24h is not None else None,
            raw_pressure=round(obs.raw_pressure, 1) if obs.raw_pressure is not None else None,
            wind_degrees=round(obs.wind_degrees, 1) if obs.wind_degrees is not None else None,
            wind_direction=wind_direction,
            wind_speed=round(obs.wind_speed, 1) if obs.wind_speed is not None else None,
            humidity=round(obs.humidity, 1) if obs.humidity is not None else None,
            dew_point=round(dew_point, 1) if dew_point is not None else None,
            apparent_temperature=apparent_temperature,
            cloud_base=cloud_base,
            barometric_stress=barometric_stress,
            altitude=round(obs.altitude, 1) if obs.altitude is not None else None,
            temperature=round(obs.temperature, 1),
            temperature_available=obs.temperature_available,
            is_night=obs.is_night,
            rain=obs.rain,
            last_updated=obs.timestamp,
            delta_3h=delta_3h,
            pressure_change_24h=pressure_change_24h,
            trend_label=trend_label,
            trend_rate_3h=obs.trend_rate_3h,
            trend_r2=obs.trend_r2,
            wmo_tendency_code=wmo_tendency,
            zambretti_state=zambretti_state,
            sager_state=sager_state,
            consensus_state=consensus_state,
            model_divergence=model_divergence,
            confidence=confidence,
            zambretti_6h=f6.forecast_state,
            predicted_p_6h=f6.predicted_pressure,
            zambretti_12h=f12.forecast_state,
            predicted_p_12h=f12.predicted_pressure,
            zambretti_24h=f24.forecast_state,
            predicted_p_24h=f24.predicted_pressure,
            precip_probability=precip_prob,
            snow_probability=snow_prob,
            fog_probability=fog_prob,
            adaptive_damping=obs.calibration_damping,
            wind_factor=obs.calibration_wind_factor,
            seasonal_factor=obs.calibration_seasonal_factor,
            precip_bias=obs.calibration_precip_bias,
            pressure_bias=obs.calibration_pressure_bias,
        )
