# Zambretti & Sager Weather Forecaster

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
![Version](https://img.shields.io/badge/version-2.3.0-blue.svg)

A Home Assistant custom integration that provides local weather forecasting using the classic Zambretti and Sager barometric algorithms — no cloud weather API subscription required.

<p align="center">
  <img src="https://raw.githubusercontent.com/meksspirt/zambretti_sager/main/logo.png" alt="Zambretti & Sager Logo" width="400">
</p>

---

## 🚀 Quick Install

Click the button below to install directly via HACS:

[![Install with HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=meksspirt&repository=zambretti_sager&category=integration)

Or open HACS → **Integrations** → **Custom repositories** → add `https://github.com/meksspirt/zambretti_sager` (category: Integration).

After installation, click here to start setup:

[![Open in Home Assistant](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=zambretti_sager)

---

## Features

<p align="center">
  <img src="https://raw.githubusercontent.com/meksspirt/zambretti_sager/main/card-screenshot.png" alt="Zambretti Weather Card" width="400">
</p>

The integration includes a built-in **Lovelace card** (Full, Compact Tile, and Vintage Aneroid Barometer modes) with a visual configuration editor, animated weather icons, night mode, wind compass/Beaufort info, precipitation probability gauge, and a 24-hour pressure sparkline. It is registered automatically — no manual Lovelace resource setup needed in Storage mode.

- **Zambretti Forecast** — 27 localized forecast states derived from the 32-point Zambretti scale and 3-hour barometric trends
- **Sager Weathercaster** — wind-refined synoptic forecast based on pressure zone, 6-hour trend, and wind quadrant
- **Extended Forecasts** — synoptic damped barometric extrapolations for **+6h**, **+12h**, and **+24h**
- **Native `weather` Entity** — standard Home Assistant `weather` entity with hourly (`+6h`, `+12h`, `+24h`) and daily (`+24h`) forecast services
- **Precipitation Probability** — 0–100% rain probability combining Zambretti index, pressure drop rate, wind quadrant, relative humidity, and dew-point spread
- **Dew-Point Refinement** — `snow_probability` and `fog_probability` derived from temperature, humidity, and wind
- **Ensemble Consensus** — weighted Zambretti + Sager + least-squares regression consensus with `model_divergence` and a 0–100% `forecast_confidence` score
- **Forecast Verification Ledger** — every issued forecast is persisted and checked 24 hours later against pressure (and an optional rain sensor), exposing `forecast_accuracy_24h` and `last_forecast_hit`
- **Adaptive Calibration** — the extrapolation damping exponent self-tunes from verified forecasts, so the model learns your station
- **Alert Binary Sensors** — `pressure_falling_rapidly`, `storm_warning`, `frost_risk`, and `fog_risk`, all with configurable thresholds
- **Device Triggers & Events** — bus events for forecast, horizon, and pressure-drop changes, usable in automations and device triggers
- **Sea Level Pressure Correction** — automatic hypsometric altitude & temperature compensation (with automatic MSLP/QNH sensor detection to prevent double conversion)
- **Local-First Altitude Resolution** — uses your Home Assistant configured elevation when coordinates match home, caches resolved altitude in the config entry, and falls back to Open-Elevation / Open-Meteo
- **Night Mode** — automatic moon/stars icon and night condition (`clear-night`) when the sun is below the horizon
- **Localization** — 20 languages supported in both Home Assistant backend translations and the Lovelace card / visual editor

## Installation

### ⚡ One-Click HACS Install

[![Install with HACS](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=meksspirt&repository=zambretti_sager&category=integration)

Then configure:

[![Open in Home Assistant](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=zambretti_sager)

### Manual HACS Installation

1. Open HACS → **Integrations**
2. Click the three dots → **Custom repositories**
3. Add `https://github.com/meksspirt/zambretti_sager` with category **Integration**
4. Click **Download**
5. Restart Home Assistant

### Manual Installation

1. Copy `custom_components/zambretti_sager` to your Home Assistant `custom_components` directory
2. Restart Home Assistant

## Configuration

1. Go to **Settings** → **Devices & Services**
2. Click **Add Integration** and search for **Zambretti and Sager**
3. Complete the setup form:
   - **Pressure Sensor** *(required)* — barometric pressure sensor (`hPa`, `mbar`, `mmHg`, `inHg`, `Pa`, `kPa`)
   - **Wind Direction Sensor** *(optional)* — wind bearing in degrees (`0–360°`) or 16-point compass string (`N`, `NW`, etc.)
   - **Wind Speed Sensor** *(optional)* — dedicated wind speed sensor (`m/s`, `km/h`, `mph`, `kn`, `ft/s`)
   - **Temperature Sensor** *(optional)* — outdoor temperature sensor (`°C`, `°F`, `K`) for accurate sea-level pressure reduction
   - **Humidity Sensor** *(optional)* — outdoor relative humidity (`%`) to refine precipitation probability
   - **Enable Sea Level Pressure Correction** — enable if your barometer reports absolute station pressure above sea level
   - **Location** — select your weather station coordinates on the map
4. Click **Submit**

You can update sensors or coordinates at any time via **Configure** (Options Flow) or **Reconfigure** on the integration entry.

## Entities Created

Each configured station creates **19 sensors**, **4 binary sensors**, and **1 weather entity** grouped under a single service device:

| Entity | Domain | Category | Description |
|---|---|---|---|
| **Zambretti Forecast** | `sensor` | Primary | Current Zambretti weather prediction (`enum`, 27 states) + diagnostic pressure/wind attributes |
| **Sager Forecast** | `sensor` | Primary | Wind-enhanced Sager Weathercaster prediction (`enum`, 11 states) |
| **Zambretti Forecast 6h** | `sensor` | Primary | Extrapolated Zambretti prediction for +6 hours |
| **Zambretti Forecast 12h** | `sensor` | Primary | Extrapolated Zambretti prediction for +12 hours |
| **Zambretti Forecast 24h** | `sensor` | Primary | Extrapolated Zambretti prediction for +24 hours |
| **Precipitation Probability** | `sensor` | Primary | Estimated chance of precipitation (`0–100%`) |
| **Snow Probability** | `sensor` | Primary | Chance that precipitation falls as snow (`0–100%`) |
| **Fog Probability** | `sensor` | Primary | Fog likelihood from humidity, dew-point spread, and wind (`0–100%`) |
| **Forecast Confidence** | `sensor` | Primary | Data completeness and model agreement score (`0–100%`) |
| **Sea Level Pressure** | `sensor` | Primary | Sea-level corrected pressure (`hPa`) |
| **Station Pressure** | `sensor` | Diagnostic | Raw station pressure as reported by the sensor (`hPa`) |
| **Pressure Trend (3h)** | `sensor` | Primary | Pressure change over 3 hours (`hPa`) |
| **Pressure Change (24h)** | `sensor` | Primary | Pressure change over 24 hours (`hPa`) |
| **WMO Pressure Tendency** | `sensor` | Diagnostic | WMO tendency code `0–8` |
| **Model Divergence** | `sensor` | Diagnostic | Disagreement between Zambretti, Sager, and regression models (`0–100%`) |
| **Forecast Accuracy (24h)** | `sensor` | Diagnostic | Verified 24-hour forecast hit rate (`0–100%`) |
| **Last Forecast Hit** | `sensor` | Diagnostic | `hit` or `miss` for the most recent verified forecast |
| **Adaptive Damping** | `sensor` | Diagnostic | Self-calibrated extrapolation damping exponent |
| **Last Update** | `sensor` | Diagnostic | Timestamp of the most recent forecast calculation |
| **Pressure Falling Rapidly** | `binary_sensor` | Diagnostic | Rapid 3-hour pressure drop alert |
| **Storm Warning** | `binary_sensor` | Diagnostic | High precipitation probability with stormy or rapidly falling conditions |
| **Frost Risk** | `binary_sensor` | Diagnostic | Temperature at or below the configured frost threshold |
| **Fog Risk** | `binary_sensor` | Diagnostic | High humidity combined with a high fog probability |
| **Weather Station** | `weather` | Primary | Native Home Assistant weather entity with current conditions, hourly (`+6h`/`+12h`/`+24h`) and daily (`+24h`) forecasts |

## How It Works

### Zambretti Algorithm

Analyzes barometric pressure trends over the past 3 hours (`ΔP = P_now − P_3h`):

- **Falling** (`ΔP ≤ −1.6 hPa`) — worsening weather
- **Steady** (`−1.6 < ΔP < +1.6 hPa`) — stable conditions
- **Rising** (`ΔP ≥ +1.6 hPa`) — improving weather

Adjusted for season (hemisphere-aware via latitude) and wind direction, mapping to the classical Zambretti forecast scale.

### Sager Algorithm

Combines sea-level pressure zone, 6-hour pressure trend, and wind direction quadrant (`northerly`, `easterly`, `southerly`, `westerly`) for synoptic refinement.

### Sea Level Pressure Correction

When enabled for an absolute barometer, station pressure is reduced to Mean Sea Level Pressure (MSLP) using the international barometric formula:

```text
P_sea = P_abs / (1 − (0.0065 × h) / (T + 0.0065 × h + 273.15))^5.257
```

### Ensemble Consensus and Confidence

Zambretti, Sager, and a least-squares pressure-regression model each produce a forecast severity. The integration blends them by weight (Zambretti 0.4, Sager 0.3, regression 0.3) and reports:

- `consensus_state` — the nearest blended Zambretti state
- `sensor.model_divergence` — disagreement between the three models (0–100%)
- `sensor.forecast_confidence` — completeness, regression quality, model agreement, pressure freshness, and physical plausibility (0–100%)

### Forecast Verification Ledger

Every six hours the current forecast is stored in Home Assistant storage. After 24 hours it is verified against the observed pressure and the current forecast state; if a rain sensor is configured, its state is checked against the predicted rain probability. A record counts as a hit when:

- the 24-hour pressure error is ≤ 2 hPa,
- the observed severity is within one step of the predicted severity,
- and, when available, the rain prediction matches the rain sensor.

The ledger keeps up to 200 records and exposes `sensor.forecast_accuracy_24h` and `sensor.last_forecast_hit`.

### Adaptive Calibration

Verified forecasts also tune the extrapolation damping exponent (`adaptive_damping`, default `0.65`). If actual pressure changes are consistently larger than predicted, damping rises (up to `0.85`); if they are consistently smaller, it falls (down to `0.45`). This lets the +6h/+12h/+24h extrapolations learn your station's local synoptic behaviour.

### Alerts and Automations

Four binary sensors expose threshold-based alerts. Their thresholds are configurable in **Configure**:

| Alert | Trigger |
|---|---|
| `pressure_falling_rapidly` | 3-hour pressure drop at or below `falling_rapid_threshold` (default 1.6 hPa) |
| `storm_warning` | Precipitation probability at or above `storm_precip_threshold` (default 75%) together with a stormy consensus or rapid fall |
| `frost_risk` | Measured temperature at or below `frost_temp_threshold` (default 2 °C) |
| `fog_risk` | Humidity at or above `fog_humidity_threshold` (default 95%) and fog probability ≥ 50% |

The integration also fires bus events `zambretti_sager_forecast_changed`, `zambretti_sager_forecast_horizon_changed`, and `zambretti_sager_pressure_drop_alert`. These are available as **device triggers** in automations.

## Removal

1. Go to **Settings** → **Devices & Services** → **Zambretti and Sager**.
2. Click the three-dot menu next to the station entry and select **Delete**.
   - When the last entry is deleted, the integration automatically removes its registered Lovelace card resource from Home Assistant storage.
3. To uninstall the files completely:
   - **HACS:** Open **HACS** → **Zambretti and Sager** → three-dot menu → **Remove**, then restart Home Assistant.
   - **Manual install:** Delete the `custom_components/zambretti_sager` folder and restart Home Assistant.

## Localization

The setup UI, entity states, and Lovelace card + visual editor are available in **20 languages**:

🇬🇧 English · 🇩🇪 Deutsch (DE / AT) · 🇪🇸 Español · 🇫🇷 Français · 🇮🇹 Italiano · 🇳🇱 Nederlands · 🇵🇱 Polski · 🇵🇹 Português · 🇷🇺 Русский · 🇺🇦 Українська · 🇨🇳 简体中文 · 🇹🇼 繁體中文 · 🇯🇵 日本語 · 🇰🇷 한국어 · 🇨🇿 Čeština · 🇸🇪 Svenska · 🇩🇰 Dansk · 🇳🇴 Norsk · 🇭🇺 Magyar · 🇹🇷 Türkçe

## Requirements

- Home Assistant `2024.1.0` or newer
- A barometric pressure sensor
- Optional: wind direction, wind speed, outdoor temperature, and outdoor humidity sensors

## Troubleshooting

**Entities show `Unavailable` at startup**
Wait until your barometric pressure sensor reports a valid numeric reading — the coordinator subscribes to state changes and updates immediately once the barometer comes online.

**Inaccurate forecasts at high altitude**
Enable **Sea Level Pressure Correction**, verify your station coordinates on the map, and configure an outdoor temperature sensor. If your barometer already reports relative/MSLP pressure, keep Sea Level Pressure Correction disabled.

## Credits

- **Zambretti Algorithm** — developed by Negretti & Zambra (1915)
- **Sager Algorithm** — developed by meteorologist Raymond M. Sager
- **Integration Author** — Maksym ([@meksspirt](https://github.com/meksspirt))

## License

MIT License — see [LICENSE](LICENSE) for details.

## Support

Found a bug or have a suggestion? [Open an issue](https://github.com/meksspirt/zambretti_sager/issues) on GitHub.
