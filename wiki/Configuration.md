# Configuration

The integration is configured through a **Config Flow** — the setup wizard in the Home Assistant UI.

---

## Initial setup wizard

**Settings → Devices & Services → Add Integration → Zambretti and Sager**

| Parameter | Required | Description |
|---|---|---|
| **Pressure sensor** | ✅ | Atmospheric pressure sensor (hPa). Supports `device_class: atmospheric_pressure` or `pressure` |
| **Wind direction sensor** | ❌ | Wind direction in degrees. Improves the Sager forecast |
| **Wind speed sensor** | ❌ | Wind speed. Used in the card and sensor attributes |
| **Temperature sensor** | ❌ | Temperature for accurate sea level pressure correction |
| **Humidity sensor** | ❌ | Humidity for precipitation probability calculation |
| **Rain sensor** | ❌ | Optional binary/rain sensor used by the forecast verification ledger |
| **Rapid drop threshold** | ❌ | 3-hour pressure fall that triggers `pressure_falling_rapidly` (default 1.6 hPa) |
| **Storm precipitation threshold** | ❌ | Precipitation probability for `storm_warning` (default 75%) |
| **Frost temperature threshold** | ❌ | Temperature for `frost_risk` (default 2 °C) |
| **Fog humidity threshold** | ❌ | Humidity required with the fog model for `fog_risk` (default 95%) |
| **Location (map)** | ✅ | Weather station coordinates — used for altitude detection |
| **Sea level correction** | ❌ | Enable if your pressure sensor measures absolute (station) pressure |

By default, the map is pre-filled with coordinates from your Home Assistant configuration.

---

## Sea level pressure correction

Enable this if your sensor measures **absolute** (station) pressure rather than mean sea level pressure (MSLP/QNH).

When enabled, the integration:

1. Fetches **altitude** from the [Open-Elevation API](https://open-elevation.com) using map coordinates
2. Applies the **barometric formula** with temperature compensation (if a temperature sensor is configured):

```
P_sea = P_abs / (1 − (0.0065 × h) / (T + 0.0065 × h + 273.15))^5.257
```

> Altitude is fetched **once** at integration startup. Make sure HA has internet access.

If your sensor already reports sea level pressure (names often include `sea_level`, `mslp`, `qnh`), you can **leave correction disabled**.

---

## Multiple instances

You can add multiple integration instances for different weather stations. Each instance is tied to a **unique pressure sensor**.

---

## Changing settings

**Settings → Devices & Services → Zambretti and Sager → Configure**

You can change:

- Sensors (pressure, wind, temperature, humidity, rain)
- Alert thresholds (rapid fall, storm precipitation, frost temperature, fog humidity)
- Map coordinates
- Sea level correction toggle

After changing the pressure sensor, pressure trend history will start accumulating from scratch.

---

## Alert thresholds

All four alert thresholds are optional and default to meteorologically conservative values:

| Option | Default | Used by |
|---|---|---|
| `falling_rapid_threshold` | `1.6` hPa/3h | `binary_sensor.pressure_falling_rapidly` |
| `storm_precip_threshold` | `75` % | `binary_sensor.storm_warning` |
| `frost_temp_threshold` | `2.0` °C | `binary_sensor.frost_risk` |
| `fog_humidity_threshold` | `95.0` % | `binary_sensor.fog_risk` |

Because options trigger an integration reload, changing a threshold immediately recreates the alert entities with the new values.

---

## Forecast verification ledger

The ledger stores issued forecasts in `.storage/zambretti_sager.<entry_id>.ledger` at most once every six hours. After 24 hours each record is verified and contributes to `sensor.forecast_accuracy_24h` and the adaptive damping exponent. Deleting the config entry removes the whole device and its stored forecasts.

---

## Integration dependencies

From `manifest.json`:

| Dependency | Purpose |
|---|---|
| `recorder` | Pressure history for trend calculation |
| `frontend` | Lovelace card registration |
| `http` | HTTP service for card static files |
| `lovelace` | Dashboard integration |

Make sure **recorder** is enabled and storing states from your pressure sensor.
