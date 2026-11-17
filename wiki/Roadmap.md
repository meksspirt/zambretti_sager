# Roadmap

Current project status and development plans.

---

## Current status — unreleased development ✅

| Component | Status |
|---|---|
| Zambretti/Sager integration | ✅ Stable |
| 19 sensors + 4 alert binary sensors | ✅ New |
| Ensemble consensus + confidence | ✅ New |
| Dew-point snow/fog probabilities | ✅ New |
| 24-hour forecast verification ledger | ✅ New |
| Adaptive damping calibration | ✅ New |
| Config Flow + Options Flow | ✅ Done |
| Sea level correction | ✅ Done |
| Lovelace Weather Card | ✅ Done |
| Animated SVG icons | ✅ v1.9.7+ |
| Pressure sparkline | ✅ v1.9.5+ |
| Night mode | ✅ v1.9.5+ |
| Wind speed + units | ✅ v1.9.7+ |
| Localization (21 locales) | ✅ Done |
| HACS | ✅ Published |
| CI (hassfest + hacs) | ✅ Configured |

---

## Completed

- [x] Core Zambretti algorithm (32 states)
- [x] Sager algorithm
- [x] Extended forecasts 6h / 12h / 24h
- [x] Precipitation probability
- [x] Config Flow with map
- [x] Sea level pressure correction
- [x] Lovelace custom card
- [x] Animated weather icons
- [x] Card night mode
- [x] Pressure sparkline
- [x] Wind speed support
- [x] EN, RU, FR translations
- [x] Fix unavailable sensors after restart
- [x] Fix SVG animation jitter
- [x] Multiple integration instances
- [x] Numeric pressure/trend/confidence sensors
- [x] Alert binary sensors with configurable thresholds
- [x] Ensemble consensus and model divergence
- [x] Dew-point snow and fog probabilities
- [x] Persistent forecast verification ledger
- [x] Adaptive damping calibration
- [x] Device triggers and forecast bus events
- [x] 21-locale translation parity

---

## Planned

- [ ] **HACS default repository** — submit to HACS default repo
- [ ] **Card themes** — custom color schemes
- [ ] **Ledger chart** — visualize forecast accuracy over time
- [ ] **Optional notifications blueprint** for storm and frost alerts

---

## Ideas (backlog)

- Multi-sensor pressure averaging
- Forecast history export
- inHg / mmHg unit support
- Comparison with Met.no / OpenWeatherMap forecasts
- Mobile-friendly responsive card

---

## How to influence the roadmap

1. ⭐ Star the [GitHub repo](https://github.com/meksspirt/zambretti_sager)
2. 💬 [Open an Issue](https://github.com/meksspirt/zambretti_sager/issues) with a suggestion
3. 🔧 Submit a Pull Request
4. 🌍 Help translate to a new language

---

## Version history

Full changelog: [CHANGELOG.md](https://github.com/meksspirt/zambretti_sager/blob/main/CHANGELOG.md)

| Version | Date | Highlights |
|---|---|---|
| 1.9.8 | 2026-06-21 | Fix SVG jitter (patch render) |
| 1.9.7 | 2026-06-21 | Wind speed, animated icons rework |
| 1.9.6 | 2026-06-21 | French translation |
| 1.9.5 | 2026-06-21 | Sparkline, night mode, bugfixes |
| 1.9.0 | 2026-06-16 | Major card update |
| 1.0.0 | — | Initial release |
