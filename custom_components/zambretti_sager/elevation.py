"""Elevation resolution service: Local-First resolution with external API fallback."""

from __future__ import annotations

import logging

try:
    import aiohttp
except ImportError:  # pragma: no cover
    aiohttp = None  # type: ignore[assignment]

from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession

_LOGGER = logging.getLogger(__name__)

_ELEVATION_CACHE: dict[tuple[float, float], float] = {}


async def get_elevation_from_api(
    hass: HomeAssistant, latitude: float, longitude: float
) -> float | None:
    """Fetch elevation above sea level via Open-Elevation or Open-Meteo API.

    Caches results in memory to avoid repetitive HTTP requests across reloads.
    """
    cache_key = (round(float(latitude), 4), round(float(longitude), 4))
    if cache_key in _ELEVATION_CACHE:
        return _ELEVATION_CACHE[cache_key]

    session = async_get_clientsession(hass)
    timeout = aiohttp.ClientTimeout(total=10.0, connect=5.0) if aiohttp is not None else 10.0

    # 1. Try Open-Elevation API
    url_open_elevation = (
        f"https://api.open-elevation.com/api/v1/lookup?locations={latitude},{longitude}"
    )
    try:
        async with session.get(url_open_elevation, timeout=timeout) as response:
            if response.status == 200:
                data = await response.json()
                results = data.get("results")
                if results and "elevation" in results[0]:
                    elevation = float(results[0]["elevation"])
                    _ELEVATION_CACHE[cache_key] = elevation
                    return elevation
    except Exception as err:
        _LOGGER.debug("Failed to get elevation from Open-Elevation API: %s", err)

    # 2. Try Open-Meteo API fallback
    url_open_meteo = (
        f"https://api.open-meteo.com/v1/elevation?latitude={latitude}&longitude={longitude}"
    )
    try:
        async with session.get(url_open_meteo, timeout=timeout) as response:
            if response.status == 200:
                data = await response.json()
                elevations = data.get("elevation")
                if elevations and isinstance(elevations, list) and len(elevations) > 0:
                    elevation = float(elevations[0])
                    _ELEVATION_CACHE[cache_key] = elevation
                    return elevation
    except Exception as err:
        _LOGGER.debug("Failed to get elevation from Open-Meteo API: %s", err)

    return None


# Backward compatibility alias
get_elevation = get_elevation_from_api


async def async_resolve_elevation(
    hass: HomeAssistant,
    latitude: float | None = None,
    longitude: float | None = None,
    configured_elevation: float | None = None,
    fallback_elevation: float | None = None,
) -> float | None:
    """Resolve station elevation using local-first strategy with external API fallback.

    1. If a configured elevation is already stored, return it immediately without network I/O.
    2. If coordinates match Home Assistant's home location and HA elevation is configured,
       use the local HA elevation immediately without external HTTP requests.
    3. If custom coordinates are provided, query external elevation APIs (cached in-memory).
    4. Fall back to Home Assistant's configured elevation or explicitly provided fallback.
    """
    # 1. Configured / persisted elevation from entry
    if configured_elevation is not None:
        try:
            val = float(configured_elevation)
            _LOGGER.debug("Using configured elevation from entry: %.1f m", val)
            return val
        except (ValueError, TypeError):
            pass

    # 2. Local-First: Check if coordinates match Home Assistant's home location
    ha_lat = getattr(getattr(hass, "config", None), "latitude", None)
    ha_lon = getattr(getattr(hass, "config", None), "longitude", None)
    ha_elevation = getattr(getattr(hass, "config", None), "elevation", None)

    if (
        latitude is not None
        and longitude is not None
        and ha_lat is not None
        and ha_lon is not None
        and ha_elevation is not None
    ):
        try:
            lat_f = float(latitude)
            lon_f = float(longitude)
            if abs(lat_f - float(ha_lat)) < 0.005 and abs(lon_f - float(ha_lon)) < 0.005:
                elev_val = float(ha_elevation)
                _LOGGER.info(
                    "Coordinates match Home Assistant home location, using local elevation: %.1f m",
                    elev_val,
                )
                return elev_val
        except (ValueError, TypeError):
            pass

    # 3. External API lookup using map coordinates
    if latitude is not None and longitude is not None:
        try:
            lat_f = float(latitude)
            lon_f = float(longitude)
            _LOGGER.debug("Looking up elevation for coordinates (%.4f, %.4f)", lat_f, lon_f)
            elevation = await get_elevation_from_api(hass, lat_f, lon_f)
            if elevation is not None:
                _LOGGER.info("Retrieved altitude from external API: %.1f m", elevation)
                return elevation
            _LOGGER.warning(
                "External elevation lookup failed for (%.4f, %.4f), checking fallback elevation",
                lat_f,
                lon_f,
            )
        except (ValueError, TypeError) as err:
            _LOGGER.warning("Invalid coordinates (%s, %s): %s", latitude, longitude, err)

    # 4. Fallback to explicitly passed fallback elevation or HA config elevation
    for candidate in (
        fallback_elevation,
        ha_elevation,
    ):
        if candidate is not None:
            try:
                val = float(candidate)
                _LOGGER.info("Using fallback elevation: %.1f m", val)
                return val
            except (ValueError, TypeError):
                pass

    _LOGGER.warning("Could not determine altitude, sea level correction will use raw pressure")
    return None
