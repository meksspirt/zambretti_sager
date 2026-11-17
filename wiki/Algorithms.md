# Forecasting Algorithms

The integration uses two classic barometric pressure forecasting methods — no external weather APIs required.

---

## Zambretti Algorithm

Developed by **Negretti and Zambra** in the early 1900s. Used in mechanical barometer forecasters.

### How it works

1. Measures **pressure change** over the last **~3 hours** (ΔP in hPa)
2. ΔP is classified into one of three trends:

| Trend | ΔP (hPa over ~3 h) |
|---|---|
| **Falling** | ≤ −1.6 |
| **Steady** | −1.6 … +1.6 |
| **Rising** | ≥ +1.6 |

3. Based on the trend and current pressure, one of **32 weather descriptions** is selected

### Extended forecasts (6h / 12h / 24h)

For future forecasts, the integration:

- Reads historical pressure from the **recorder** for the corresponding interval
- Scales the trend proportionally to the forecast horizon
- When history is insufficient, uses the best available window and extrapolates

### Data sources

- Current pressure — from the configured sensor
- History — from the **Home Assistant Recorder** database
- When no history is available, ΔP = 0 (steady) and sensors show a forecast immediately

---

## Sager Algorithm

Developed by meteorologist **Raymond Sager**. Simpler approach using pressure, trend, and wind direction.

### Pressure zones

| Pressure | Zone |
|---|---|
| **> 1020 hPa** | Fair |
| **< 1005 hPa** | Unsettled |
| **1005–1020 hPa** | Changeable |

### Trend classification (Sager)

| Trend | ΔP (hPa) |
|---|---|
| Rising rapidly | ≥ +1.4 |
| Rising slowly | ≥ +0.7 |
| Steady | −0.7 … +0.7 |
| Falling slowly | ≤ −0.7 |
| Falling rapidly | ≤ −1.4 |

### Forecast matrix

**Fair (> 1020 hPa):**
- Rising → Fair, improving
- Falling → Fair, tending to deteriorate
- Steady → Fair, no important change

**Unsettled (< 1005 hPa):**
- Falling → Unsettled, rain likely
- Rising → Unsettled, probably improving
- Steady → Unsettled, rain at times

**Changeable (1005–1020 hPa):**
- Rising rapidly → Changeable, becoming fairer
- Falling rapidly → Changeable, more unsettled
- Rising slowly → Variable, slowly improving
- Falling slowly → Variable, slowly deteriorating
- Steady → Variable, some change

### Wind direction

Wind is converted from degrees to compass points: **N, NE, E, SE, S, SW, W, NW**

---

## Precipitation probability

Calculated based on:

- **Pressure trend** — falling pressure increases probability
- **Current pressure** — low pressure increases probability
- **Humidity** (if sensor configured) — high humidity increases probability

Result: a value from **0–100%**.

---

## Sea level correction

If the sensor measures absolute pressure at altitude *h* meters, forecasts will be inaccurate without correction.

### Barometric formula

```
P_sea = P_abs / (1 − (0.0065 × h) / (T + 0.0065 × h + 273.15))^5.257
```

Where:
- `P_abs` — absolute pressure (hPa)
- `h` — altitude above sea level (m)
- `T` — temperature (°C)

Altitude is determined via the **Open-Elevation API** using map coordinates.

---

## Ensemble consensus

Three estimators vote on the forecast severity (0 = settled, 5 = stormy):

| Model | Weight | Basis |
|---|---|---|
| Zambretti | 0.4 | 3-hour pressure change and current pressure |
| Sager | 0.3 | 6-hour trend, pressure zone, and wind quadrant |
| Least-squares regression | 0.3 | Smoothed 6-hour pressure slope and R² |

The weighted severity selects the nearest available Zambretti state (`consensus_state`). The spread between the three severities becomes `sensor.model_divergence` (0–100%). A wide spread lowers `sensor.forecast_confidence`.

## Confidence score

`forecast_confidence` starts at 40 points and adjusts for:

- available 6h, 12h, and 24h pressure history,
- wind direction and humidity availability,
- regression quality (R²),
- agreement between Zambretti and Sager,
- model divergence,
- pressure sample age (stale samples are penalised),
- physically implausible pressure values.

The result is clamped to 0–100%.

## Dew-point refinement

Using the Magnus formula:

```text
γ = ln(RH / 100) + (17.62 × T) / (243.12 + T)
Td = (243.12 × γ) / (17.62 − γ)
```

The dew-point spread (`T − Td`) adjusts precipitation probability. `snow_probability` scales rain probability by temperature (full probability at ≤ 1 °C, zero at ≥ 3.5 °C, linear in between). `fog_probability` combines high humidity, a small dew-point spread, and low wind.

## WMO tendency code

The integration reports the WMO 3-hour pressure tendency code (`0–8`) using the net 3-hour change and, when available, the 1.5-hour pressure to distinguish accelerating, decelerating, and reversible tendencies.

## Forecast verification ledger

Each forecast is recorded at most once every six hours and verified 24 hours later. A hit requires:

- 24-hour pressure error ≤ 2 hPa,
- observed severity within one step of the forecast,
- optional rain sensor agreement with the predicted rain probability (≥ 50% = rain).

The ledger keeps the most recent 200 records and reports a rolling hit rate over up to 60 verified forecasts.

## Adaptive calibration

Verified 24-hour trends adjust the damping exponent used by `calculate_extrapolations`:

- actual change larger than predicted → damping +0.02,
- actual change smaller than predicted → damping −0.02,
- clamped to `[0.45, 0.85]`; flat trends (< 1 hPa predicted) are ignored.

The current value is exposed as `sensor.adaptive_damping`.

---

## Limitations

| Limitation | Explanation |
|---|---|
| Local forecast | Algorithms do not account for fronts, satellites, or radar |
| Trend delay | Requires ~3 hours of pressure history for an accurate trend |
| Altitude | Open-Elevation is queried once at startup |
| Accuracy | Works best with a stable, reliable pressure sensor |

> Zambretti and Sager are **short-term** forecasts (hours, not days). For multi-day forecasts, use standard HA weather integrations.

---

## History

- **Zambretti** — Negretti & Zambra, ~1915, mechanical barometer forecasters
- **Sager** — Raymond Sager, simplified table for field meteorologists
