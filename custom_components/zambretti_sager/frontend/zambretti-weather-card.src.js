/**
 * Zambretti & Sager Weather Card  v2.1.1
 * Lovelace custom card for Home Assistant (Self-contained standalone bundle)
 */

console.info(
  `%c ZAMBRETTI & SAGER WEATHER CARD %c v2.1.1 `,
  'color: white; background: #d97706; font-weight: 700; border-radius: 3px 0 0 3px; padding: 2px 5px;',
  'color: #92400e; background: #fef3c7; font-weight: 700; border-radius: 0 3px 3px 0; padding: 2px 5px;'
);


import { getLabels, getPrecipLabel, getVintageLabels } from './zambretti-card-i18n.js';

// ── Condition map ─────────────────────────────────────────────────────────
/** Maps Zambretti state keys to generic weather condition strings used for icon routing and theming. */
const ZAMBRETTI_CONDITION = {
  settled_fine:"sunny", fine_weather:"sunny",
  fine_becoming_less_settled:"partlycloudy", fairly_fine_showery_later:"partlycloudy",
  showery_becoming_more_unsettled:"rainy", unsettled_rain_later:"cloudy",
  rain_at_times_worse_later:"rainy", rain_at_times_becoming_very_unsettled:"pouring",
  very_unsettled_rain:"pouring", fine_possibly_showers:"partlycloudy",
  fairly_fine_showers_likely:"partlycloudy", showery_bright_intervals:"rainy",
  changeable_some_rain:"cloudy", unsettled_rain_at_times:"rainy",
  rain_at_frequent_intervals:"pouring", stormy_much_rain:"lightning-rainy",
  becoming_fine:"partlycloudy", fairly_fine_improving:"partlycloudy",
  fairly_fine_possibly_showers_early:"partlycloudy", showery_early_improving:"rainy",
  changeable_mending:"cloudy", rather_unsettled_clearing_later:"cloudy",
  unsettled_probably_improving:"cloudy", unsettled_short_fine_intervals:"cloudy",
  very_unsettled_finer_at_times:"pouring", stormy_possibly_improving:"lightning-rainy",
  stable:"partlycloudy",
};

// ── SVG weather icons ─────────────────────────────────────────────────────
// FIX: sun — all rays + disc wrapped in ONE <g> with ONE animateTransform
// so disc and rays rotate together without jitter.
/** Inline animated SVG icons keyed by weather condition string. */
const WEATHER_ICONS = {

  sunny:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="rotate"
        from="0 32 32" to="360 32 32" dur="20s"
        repeatCount="indefinite" calcMode="linear"/>
      <circle cx="32" cy="32" r="12" fill="#FFD700"/>
      <g stroke="#FFD700" stroke-width="2.5" stroke-linecap="round">
        <line x1="32" y1="6"  x2="32" y2="13"/>
        <line x1="32" y1="51" x2="32" y2="58"/>
        <line x1="6"  y1="32" x2="13" y2="32"/>
        <line x1="51" y1="32" x2="58" y2="32"/>
        <line x1="13.8" y1="13.8" x2="18.9" y2="18.9"/>
        <line x1="45.1" y1="45.1" x2="50.2" y2="50.2"/>
        <line x1="50.2" y1="13.8" x2="45.1" y2="18.9"/>
        <line x1="18.9" y1="45.1" x2="13.8" y2="50.2"/>
      </g>
    </g>
  </svg>`,

  night_clear:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 10a22 22 0 1 1-22 24 16 16 0 0 0 22-24z" fill="#E8E8C8"/>
    <circle cx="44" cy="16" r="1.8" fill="#FFF" opacity="0.5">
      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="14" cy="12" r="1.2" fill="#FFF" opacity="0.4">
      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="52" cy="8"  r="1.0" fill="#FFF" opacity="0.35">
      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="10" cy="46" r="1.4" fill="#FFF" opacity="0.3">
      <animate attributeName="opacity" values="0.15;0.55;0.15" dur="4.0s" repeatCount="indefinite"/>
    </circle>
    <circle cx="54" cy="42" r="0.9" fill="#FFF" opacity="0.3">
      <animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.1s" repeatCount="indefinite"/>
    </circle>
  </svg>`,

  partlycloudy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="rotate"
        from="0 22 26" to="360 22 26" dur="24s"
        repeatCount="indefinite" calcMode="linear"/>
      <circle cx="22" cy="26" r="9" fill="#FFD700" opacity="0.95"/>
    </g>
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="0,0;4,0;0,0" dur="9s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="36" cy="36" rx="16" ry="10" fill="#B0BEC5"/>
      <ellipse cx="26" cy="34" rx="12" ry="9"  fill="#CFD8DC"/>
      <ellipse cx="44" cy="37" rx="10" ry="7"  fill="#B0BEC5"/>
    </g>
  </svg>`,

  cloudy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-5,0;5,0;-5,0" dur="12s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="30" rx="20" ry="12" fill="#90A4AE"/>
      <ellipse cx="22" cy="34" rx="14" ry="10" fill="#B0BEC5"/>
      <ellipse cx="44" cy="35" rx="13" ry="9"  fill="#90A4AE"/>
    </g>
  </svg>`,

  rainy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-3,0;3,0;-3,0" dur="8s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="24" rx="18" ry="11" fill="#78909C"/>
      <ellipse cx="22" cy="28" rx="13" ry="9"  fill="#90A4AE"/>
      <ellipse cx="42" cy="28" rx="12" ry="8"  fill="#78909C"/>
    </g>
    <g fill="#64B5F6">
      <line x1="22" y1="38" x2="20" y2="50" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="38;40;38" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite"/>
      </line>
      <line x1="32" y1="36" x2="30" y2="48" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="36;38;36" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.4s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="42" y1="38" x2="40" y2="50" stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
        <animate attributeName="y1" values="38;40;38" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" begin="0.6s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,

  pouring:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-2,0;3,0;-2,0" dur="7s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="22" rx="18" ry="11" fill="#546E7A"/>
      <ellipse cx="22" cy="26" rx="13" ry="9"  fill="#607D8B"/>
      <ellipse cx="42" cy="26" rx="12" ry="8"  fill="#546E7A"/>
    </g>
    <g stroke="#42A5F5" stroke-width="2.2" stroke-linecap="round">
      <line x1="20" y1="36" x2="17" y2="50">
        <animate attributeName="y1" values="36;38;36" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite"/>
      </line>
      <line x1="29" y1="34" x2="26" y2="48">
        <animate attributeName="y1" values="34;36;34" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" begin="0.2s" repeatCount="indefinite"/>
      </line>
      <line x1="38" y1="36" x2="35" y2="50">
        <animate attributeName="y1" values="36;38;36" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="50;52;50" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.0s" begin="0.1s" repeatCount="indefinite"/>
      </line>
      <line x1="47" y1="34" x2="44" y2="48">
        <animate attributeName="y1" values="34;36;34" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="y2" values="48;50;48" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1;0;1" dur="0.85s" begin="0.45s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,

  "lightning-rainy":`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-2,0;2,0;-2,0" dur="6s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="20" rx="18" ry="11" fill="#37474F"/>
      <ellipse cx="22" cy="25" rx="13" ry="9"  fill="#455A64"/>
      <ellipse cx="42" cy="25" rx="12" ry="8"  fill="#37474F"/>
    </g>
    <polygon points="34,32 27,44 33,44 28,55 39,40 33,40" fill="#FFD740">
      <animate attributeName="opacity" values="1;0.2;1;0.2;1" dur="2.8s" repeatCount="indefinite"/>
    </polygon>
    <g stroke="#64B5F6" stroke-width="2" stroke-linecap="round">
      <line x1="20" y1="38" x2="18" y2="48">
        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
      </line>
      <line x1="46" y1="37" x2="44" y2="47">
        <animate attributeName="opacity" values="1;0;1" dur="0.9s" begin="0.5s" repeatCount="indefinite"/>
      </line>
    </g>
  </svg>`,

  snowy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g>
      <animateTransform attributeName="transform" type="translate"
        values="-3,0;3,0;-3,0" dur="10s" repeatCount="indefinite" calcMode="linear"/>
      <ellipse cx="32" cy="24" rx="18" ry="11" fill="#B0BEC5"/>
      <ellipse cx="22" cy="28" rx="13" ry="9"  fill="#CFD8DC"/>
      <ellipse cx="42" cy="28" rx="12" ry="8"  fill="#B0BEC5"/>
    </g>
    <g fill="white">
      <circle cx="20" cy="40" r="2.2">
        <animate attributeName="cy" values="40;56;40" dur="2.0s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.0s" repeatCount="indefinite"/>
      </circle>
      <circle cx="30" cy="37" r="1.6">
        <animate attributeName="cy" values="37;53;37" dur="2.3s" begin="0.4s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.3s" begin="0.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="40" r="2.0">
        <animate attributeName="cy" values="40;56;40" dur="1.8s" begin="0.8s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="1.8s" begin="0.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="37" r="1.4">
        <animate attributeName="cy" values="37;53;37" dur="2.5s" begin="0.2s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="1;0;1" dur="2.5s" begin="0.2s" repeatCount="indefinite"/>
      </circle>
    </g>
  </svg>`,

  windy:`<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#90A4AE" stroke-width="2.5" stroke-linecap="round" fill="none">
      <path d="M4 18 Q18 11 32 18 Q46 25 60 18">
        <animate attributeName="d"
          values="M4 18 Q18 11 32 18 Q46 25 60 18;M4 18 Q18 25 32 18 Q46 11 60 18;M4 18 Q18 11 32 18 Q46 25 60 18"
          dur="3.0s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      <path d="M4 30 Q18 23 32 30 Q46 37 60 30">
        <animate attributeName="d"
          values="M4 30 Q18 23 32 30 Q46 37 60 30;M4 30 Q18 37 32 30 Q46 23 60 30;M4 30 Q18 23 32 30 Q46 37 60 30"
          dur="3.5s" begin="0.5s" repeatCount="indefinite" calcMode="linear"/>
      </path>
      <path d="M4 42 Q18 35 32 42 Q46 49 60 42">
        <animate attributeName="d"
          values="M4 42 Q18 35 32 42 Q46 49 60 42;M4 42 Q18 49 32 42 Q46 35 60 42;M4 42 Q18 35 32 42 Q46 49 60 42"
          dur="2.8s" begin="1.0s" repeatCount="indefinite" calcMode="linear"/>
      </path>
    </g>
  </svg>`,
};

// ── Icon key routing ──────────────────────────────────────────────────────
/** Maps Zambretti state keys to icon keys, same as ZAMBRETTI_CONDITION but kept separate for clarity. */
const ZAMBRETTI_TO_ICON = {
  settled_fine:"sunny", fine_weather:"sunny",
  fine_becoming_less_settled:"partlycloudy", fairly_fine_showery_later:"partlycloudy",
  showery_becoming_more_unsettled:"rainy", unsettled_rain_later:"cloudy",
  rain_at_times_worse_later:"rainy", rain_at_times_becoming_very_unsettled:"pouring",
  very_unsettled_rain:"pouring", fine_possibly_showers:"partlycloudy",
  fairly_fine_showers_likely:"partlycloudy", showery_bright_intervals:"rainy",
  changeable_some_rain:"cloudy", unsettled_rain_at_times:"rainy",
  rain_at_frequent_intervals:"pouring", stormy_much_rain:"lightning-rainy",
  becoming_fine:"partlycloudy", fairly_fine_improving:"partlycloudy",
  fairly_fine_possibly_showers_early:"partlycloudy", showery_early_improving:"rainy",
  changeable_mending:"cloudy", rather_unsettled_clearing_later:"cloudy",
  unsettled_probably_improving:"cloudy", unsettled_short_fine_intervals:"cloudy",
  very_unsettled_finer_at_times:"pouring", stormy_possibly_improving:"lightning-rainy",
  stable:"partlycloudy",
};

/**
 * Returns the icon key for a given Zambretti state, switching to night_clear
 * when it's nighttime and the state is settled_fine / fine_weather.
 * @param {string} zambrettiState
 * @param {boolean} isNight
 * @returns {string}
 */
function getWeatherIconKey(zambrettiState, isNight) {
  if (zambrettiState === "settled_fine" || zambrettiState === "fine_weather") {
    return isNight ? "night_clear" : "sunny";
  }
  return ZAMBRETTI_TO_ICON[zambrettiState] || "partlycloudy";
}

/**
 * Safely escapes HTML special characters in any value to prevent XSS.
 * @param {*} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Returns an accessible inline SVG weather icon string with role="img" and aria-label.
 * @param {string} iconKey
 * @param {string} [label]
 * @returns {string}
 */
function renderWeatherIconSvg(iconKey, label = "") {
  const rawSvg = WEATHER_ICONS[iconKey] || WEATHER_ICONS.partlycloudy;
  if (!label) {
    return rawSvg.replace('<svg ', '<svg role="img" ');
  }
  const safeLabel = escapeHtml(label);
  return rawSvg.replace('<svg ', `<svg role="img" aria-label="${safeLabel}" `);
}

// ── Themes ────────────────────────────────────────────────────────────────
/** Background gradient definitions keyed by weather condition. */
const CONDITION_THEME = {
  sunny:            {bg:"linear-gradient(135deg,#FF8C00 0%,#FFA500 40%,#FFD700 100%)"},
  night_clear:      {bg:"linear-gradient(135deg,#070B14 0%,#0F172A 50%,#1E293B 100%)"},
  partlycloudy:     {bg:"linear-gradient(135deg,#FF8C00 0%,#BBDEFB 50%,#FFFFFF 100%)"},
  cloudy:           {bg:"linear-gradient(135deg,#606C76 0%,#7E8A95 50%,#A2AEB8 100%)"},
  rainy:            {bg:"linear-gradient(135deg,#425363 0%,#54677A 50%,#70879C 100%)"},
  pouring:          {bg:"linear-gradient(135deg,#1C242D 0%,#2B3745 50%,#3F5063 100%)"},
  "lightning-rainy":{bg:"linear-gradient(135deg,#23153A 0%,#43286B 50%,#6943A3 100%)"},
  snowy:            {bg:"linear-gradient(135deg,#B8C6D4 0%,#DDE5ED 50%,#F4F7FA 100%)"},
  windy:            {bg:"linear-gradient(135deg,#5F9EA0 0%,#87B6B8 50%,#B4D3D4 100%)"},
};
/** Fallback theme used when no condition-specific theme matches. */
const DEFAULT_THEME = {bg:"linear-gradient(135deg,#1565C0 0%,#1976D2 100%)"};
/** Returns the theme object for a given condition key, falling back to DEFAULT_THEME. */
function getTheme(c){ return CONDITION_THEME[c] || DEFAULT_THEME; }

// ── Alpha helper: appends alpha channel to all 6-digit hex colors in a CSS string ──
/**
 * Appends an alpha (opacity) suffix to every 6-digit hex color in a CSS gradient string.
 * No-op when alphaPct is 100 or invalid.
 * @param {string} bgString  CSS background value (e.g. linear-gradient with hex stops)
 * @param {number} alphaPct  Opacity percentage 0–100
 * @returns {string}
 */
function applyAlpha(bgString, alphaPct) {
  if (alphaPct === undefined || alphaPct >= 100 || typeof alphaPct !== 'number' || isNaN(alphaPct)) return bgString;
  const a = Math.max(0, Math.min(100, alphaPct));
  const hex = Math.round((a / 100) * 255).toString(16).padStart(2, "0").toUpperCase();
  // Replace every 6-digit hex color in the string with hex + alpha
  return bgString.replace(/#([0-9a-fA-F]{6})(?![0-9a-fA-F])/gi, `#$1${hex}`);
}

// ── Short label helper ────────────────────────────────────────────────────
/**
 * Returns a short (max 2-word) version of a forecast label for compact display.
 * @param {string} key   i18n key
 * @param {object} labels  label map
 * @returns {string}
 */
function shortLabel(key, labels) {
  const full = labels[key] || key || "—";
  return full.split(/[,\s]+/).filter(Boolean).slice(0, 2).join(" ");
}

// ── Unique ID counter for SVG gradients ──────────────────────────────────
/** Monotonic counter used to generate unique SVG gradient/clipPath IDs per render. */
let _gradientIdCounter = 0;

// ── Wind direction degrees → compass string ───────────────────────────────
/**
 * Converts a wind direction in degrees to an 8-point compass string (N, NE, E, …).
 * @param {number|null} deg
 * @returns {string}
 */
function degToCompass(deg) {
  if (deg === null || deg === undefined) return "";
  const dirs = ["N","NE","E","SE","S","SW","W","NW"];
  return dirs[Math.round((deg % 360) / 45) % 8];
}

// ── Format wind speed with correct unit ──────────────────────────────────
// sensorUnit: the native unit reported by the HA sensor (e.g. "km/h", "m/s", "mph")
// displayUnit: the unit the user wants to see on the card
/**
 * Converts a raw wind speed value from the sensor's native unit to the user's
 * chosen display unit and returns a formatted string (e.g. "SW 12 km/h").
 * @param {number|string|null} speed  Raw sensor value
 * @param {string} displayUnit  Target unit: "m/s" | "km/h" | "mph" | "kn"
 * @param {string} sensorUnit   Native sensor unit
 * @returns {string|null}
 */
function formatWind(speed, displayUnit, sensorUnit) {
  if (speed === null || speed === undefined) return null;
  const n = parseFloat(speed);
  if (isNaN(n)) return null;

  // Normalise sensor unit string (HA uses "km/h", card config uses "km/h")
  const src = (sensorUnit || "m/s").toLowerCase().replace(" ", "");
  const dst = (displayUnit || "m/s").toLowerCase().replace(" ", "");

  // Convert the raw value to m/s first, then to the desired display unit
  let ms;
  if (src === "km/h" || src === "kmh") {
    ms = n / 3.6;
  } else if (src === "mph") {
    ms = n / 2.23694;
  } else if (src === "kn" || src === "kt" || src === "knots") {
    ms = n / 1.94384;
  } else {
    ms = n; // already m/s
  }

  if (dst === "mph") {
    return `${(ms * 2.23694).toFixed(1)} mph`;
  }
  if (dst === "km/h" || dst === "kmh") {
    return `${Math.round(ms * 3.6)} km/h`;
  }
  if (dst === "kn" || dst === "kt") {
    return `${(ms * 1.94384).toFixed(1)} kn`;
  }
  return `${ms.toFixed(1)} m/s`; // default m/s
}

// ── Vintage Aneroid Brass Barometer Dial ──────────────────────────────────
/**
 * Render a classic nautical / steampunk aneroid barometer SVG dial.
 *
 * @param {number|null} pNow      Current sea-level pressure in hPa
 * @param {number|null} p3h       Pressure 3 hours ago in hPa
 * @param {number|null} delta3h   Pressure change in hPa
 * @param {object} vLabels        Localized vintage terms map
 * @param {object} options        { showSubdial, compact }
 * @returns {string} SVG markup string
 */
function vintageBarometerDial(pNow, p3h, delta3h, vLabels = {}, options = {}) {
  const pVal = (pNow != null && !isNaN(pNow)) ? pNow : 1013.25;
  const p3hVal = (p3h != null && !isNaN(p3h)) ? p3h : pVal;
  const deltaVal = (delta3h != null && !isNaN(delta3h)) ? delta3h : (pVal - p3hVal);

  const MIN_P = 960;
  const MAX_P = 1060;
  const MIN_ANGLE = -120;
  const MAX_ANGLE = 120;

  function pToAngle(p) {
    const clamped = Math.max(MIN_P, Math.min(MAX_P, p));
    return MIN_ANGLE + ((clamped - MIN_P) / (MAX_P - MIN_P)) * (MAX_ANGLE - MIN_ANGLE);
  }

  function dToAngle(delta) {
    const clamped = Math.max(-4, Math.min(4, delta));
    return (clamped / 4) * 45;
  }

  const mainAngle = pToAngle(pVal);
  const refAngle = pToAngle(p3hVal);
  const trendAngle = dToAngle(deltaVal);

  const showSubdial = options.showSubdial !== false;
  const gid = "vb" + (++_gradientIdCounter);
  const cx = 200, cy = 200;

  // Scale Ticks & Numbers
  let ticksHtml = "";
  let numbersHtml = "";
  for (let p = 960; p <= 1060; p += 1) {
    const angle = pToAngle(p);
    const rad = (angle - 90) * (Math.PI / 180);
    const isMajor = (p % 10 === 0);
    const isMedium = (p % 5 === 0);

    const rOuter = 168;
    const rInner = isMajor ? 152 : (isMedium ? 157 : 162);
    const strokeWidth = isMajor ? 1.6 : (isMedium ? 1.0 : 0.6);

    const x1 = (cx + rOuter * Math.cos(rad)).toFixed(1);
    const y1 = (cy + rOuter * Math.sin(rad)).toFixed(1);
    const x2 = (cx + rInner * Math.cos(rad)).toFixed(1);
    const y2 = (cy + rInner * Math.sin(rad)).toFixed(1);

    ticksHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#2e200c" stroke-width="${strokeWidth}" stroke-linecap="round"/>`;

    if (isMajor) {
      const rText = 138;
      const tx = (cx + rText * Math.cos(rad)).toFixed(1);
      const ty = (cy + rText * Math.sin(rad) + 3.5).toFixed(1);
      numbersHtml += `<text x="${tx}" y="${ty}" font-size="9" font-weight="800" fill="#1c1204">${p}</text>`;
    }
  }

  // Inner secondary scale: mmHg (720 to 795)
  for (let mm = 720; mm <= 795; mm += 5) {
    const pEq = mm * 1.33322;
    if (pEq >= MIN_P && pEq <= MAX_P) {
      const angle = pToAngle(pEq);
      const rad = (angle - 90) * (Math.PI / 180);
      const x1 = (cx + 143 * Math.cos(rad)).toFixed(1);
      const y1 = (cy + 143 * Math.sin(rad)).toFixed(1);
      const x2 = (cx + 148 * Math.cos(rad)).toFixed(1);
      const y2 = (cy + 148 * Math.sin(rad)).toFixed(1);
      ticksHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7d6739" stroke-width="0.8"/>`;
      if (mm % 10 === 0) {
        const tx = (cx + 125 * Math.cos(rad)).toFixed(1);
        const ty = (cy + 125 * Math.sin(rad) + 2.5).toFixed(1);
        numbersHtml += `<text x="${tx}" y="${ty}" font-size="7" font-weight="700" fill="#5e491c">${mm}</text>`;
      }
    }
  }

  const stormLbl = escapeHtml(vLabels.storm || "STORMY");
  const rainLbl = escapeHtml(vLabels.rain || "RAIN");
  const changeLbl = escapeHtml(vLabels.change || "CHANGE");
  const fairLbl = escapeHtml(vLabels.fair || "FAIR");
  const dryLbl = escapeHtml(vLabels.very_dry || "VERY DRY");
  const fallingLbl = escapeHtml(vLabels.falling || "FALLING");
  const steadyLbl = escapeHtml(vLabels.steady || "STEADY");
  const risingLbl = escapeHtml(vLabels.rising || "RISING");
  const deltaLbl = escapeHtml(vLabels.delta_3h || "Δ 3 HOURS");
  const aneroidLbl = escapeHtml(vLabels.aneroid || "ANEROID BAROMETER");
  const compLbl = escapeHtml(vLabels.compensated || "Compensated for Temperature");
  const dialAria = escapeHtml(`${vLabels.aneroid || "ANEROID BAROMETER"}: ${pVal.toFixed(1)} hPa, Δ3h ${deltaVal >= 0 ? '+' : ''}${deltaVal.toFixed(1)} hPa`);

  return `<svg role="img" aria-label="${dialAria}" viewBox="0 0 400 400" class="vintage-dial-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${gid}_bezel" cx="50%" cy="50%" r="50%">
        <stop offset="85%" stop-color="#4a3718" />
        <stop offset="92%" stop-color="#cfab56" />
        <stop offset="96%" stop-color="#fdf3a9" />
        <stop offset="98%" stop-color="#8a6721" />
        <stop offset="100%" stop-color="#2a1d08" />
      </radialGradient>
      <linearGradient id="${gid}_brass" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#d4af37" />
        <stop offset="25%" stop-color="#fff2a3" />
        <stop offset="50%" stop-color="#99731d" />
        <stop offset="75%" stop-color="#ffd966" />
        <stop offset="100%" stop-color="#5e440e" />
      </linearGradient>
      <radialGradient id="${gid}_parchment" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fffdf5" />
        <stop offset="65%" stop-color="#f5eed7" />
        <stop offset="88%" stop-color="#e6dcbc" />
        <stop offset="100%" stop-color="#c4b48d" />
      </radialGradient>
      <linearGradient id="${gid}_steel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1c2536" />
        <stop offset="50%" stop-color="#2b3b54" />
        <stop offset="100%" stop-color="#0f1622" />
      </linearGradient>
      <linearGradient id="${gid}_gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#e5c158" />
        <stop offset="50%" stop-color="#fff5b8" />
        <stop offset="100%" stop-color="#9a741c" />
      </linearGradient>
      <filter id="${gid}_shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
      </filter>
    </defs>

    <!-- Outer Brass Bezel -->
    <circle cx="200" cy="200" r="196" fill="url(#${gid}_bezel)" stroke="#1a1103" stroke-width="2" />
    
    <!-- Brass Screws -->
    <g fill="#ffd966" stroke="#4a3718" stroke-width="1">
      <circle cx="200" cy="10" r="3.5" />
      <circle cx="200" cy="390" r="3.5" />
      <circle cx="10" cy="200" r="3.5" />
      <circle cx="390" cy="200" r="3.5" />
      <circle cx="66" cy="66" r="3.5" />
      <circle cx="334" cy="66" r="3.5" />
      <circle cx="66" cy="334" r="3.5" />
      <circle cx="334" cy="334" r="3.5" />
    </g>

    <!-- Inner Stepped Brass Rim -->
    <circle cx="200" cy="200" r="176" fill="none" stroke="url(#${gid}_brass)" stroke-width="8" />
    <circle cx="200" cy="200" r="172" fill="none" stroke="#2a1e09" stroke-width="1.5" />

    <!-- Parchment Dial Face -->
    <circle cx="200" cy="200" r="170" fill="url(#${gid}_parchment)" />
    <circle cx="200" cy="200" r="170" fill="none" stroke="#8c7849" stroke-width="1" opacity="0.6" />
    <circle cx="200" cy="200" r="148" fill="none" stroke="#a08955" stroke-width="0.8" stroke-dasharray="2 2" opacity="0.7" />
    <circle cx="200" cy="200" r="115" fill="none" stroke="#a08955" stroke-width="0.6" opacity="0.5" />

    <!-- Weather Condition Arc Labels -->
    <g font-family="'Cinzel', Georgia, serif" font-weight="800" text-anchor="middle" fill="#2d1f0e">
      <text transform="translate(110, 275) rotate(-45)" font-size="11" letter-spacing="1">${stormLbl}</text>
      <text transform="translate(96, 185) rotate(-22)" font-size="11.5" letter-spacing="1.5">${rainLbl}</text>
      <text transform="translate(200, 94)" font-size="13" font-weight="900" letter-spacing="2.5" fill="#1f1406">${changeLbl}</text>
      <text transform="translate(304, 185) rotate(22)" font-size="11.5" letter-spacing="1.5">${fairLbl}</text>
      <text transform="translate(290, 275) rotate(45)" font-size="11" letter-spacing="1">${dryLbl}</text>
    </g>

    <!-- Center Inscription -->
    <g text-anchor="middle">
      <text x="200" y="145" font-family="'Cinzel', Georgia, serif" font-size="11" font-weight="bold" fill="#523d1c" letter-spacing="3">${aneroidLbl}</text>
      <path d="M 140 152 Q 200 156 260 152" fill="none" stroke="#7a5d2e" stroke-width="0.8" />
      <text x="200" y="166" font-family="'Playfair Display', Georgia, serif" font-style="italic" font-size="9" fill="#755a2f">${compLbl}</text>
    </g>

    <!-- Sub-Dial: 3h Pressure Trend Indicator -->
    ${showSubdial ? `
    <g class="v-subdial" transform="translate(200, 260)">
      <circle cx="0" cy="0" r="32" fill="#f4ebd0" stroke="#8a7346" stroke-width="1.2" />
      <circle cx="0" cy="0" r="30" fill="none" stroke="#b09b6c" stroke-width="0.5" stroke-dasharray="1.5 1.5" />
      <text x="-18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#8f2d18" text-anchor="middle">${fallingLbl}</text>
      <text x="0" y="-19" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#4d3b20" text-anchor="middle">${steadyLbl}</text>
      <text x="18" y="16" font-family="'Cinzel', Georgia, serif" font-size="6.5" font-weight="bold" fill="#1b5e20" text-anchor="middle">${risingLbl}</text>
      <text x="0" y="11" font-family="sans-serif" font-size="6" fill="#7a6745" text-anchor="middle">${deltaLbl}</text>
      <line x1="-24" y1="0" x2="-20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="0" y1="-24" x2="0" y2="-20" stroke="#4a391e" stroke-width="0.8"/>
      <line x1="24" y1="0" x2="20" y2="0" stroke="#4a391e" stroke-width="0.8"/>
      <g class="v-needle-trend" style="transform-origin:0px 0px; transform:rotate(${trendAngle.toFixed(1)}deg);">
        <path d="M -1.5 6 L -0.6 -22 L 0.6 -22 L 1.5 6 Z" fill="#8f2d18" />
        <circle cx="0" cy="0" r="3" fill="#3a2a11" stroke="#ffd966" stroke-width="0.6"/>
      </g>
    </g>` : ""}

    <!-- Scale Ticks & Numbers -->
    <g stroke-linecap="round">${ticksHtml}</g>
    <g font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="700" fill="#2e200c" text-anchor="middle">${numbersHtml}</g>

    <!-- NEEDLE 1: Reference Marker (3 Hours Ago) - Gold/Brass -->
    <g class="v-needle-ref" style="transform-origin:200px 200px; transform:rotate(${refAngle.toFixed(1)}deg);" filter="url(#${gid}_shadow)">
      <path d="M 197 60 L 200 48 L 203 60 L 201 100 L 199 100 Z" fill="url(#${gid}_gold)" stroke="#664d12" stroke-width="0.7"/>
      <circle cx="200" cy="54" r="2.2" fill="#ffeaa7"/>
      <circle cx="200" cy="245" r="7" fill="none" stroke="url(#${gid}_gold)" stroke-width="1.8"/>
      <line x1="200" y1="200" x2="200" y2="238" stroke="url(#${gid}_gold)" stroke-width="1.8"/>
    </g>

    <!-- NEEDLE 2: Main Active Pressure Needle - Blued Steel -->
    <g class="v-needle-main" style="transform-origin:200px 200px; transform:rotate(${mainAngle.toFixed(1)}deg);" filter="url(#${gid}_shadow)">
      <path d="M 198.5 200 L 197 105 Q 194 92 195.5 82 Q 197 72 200 45 Q 203 72 204.5 82 Q 206 92 203 105 L 201.5 200 Z" fill="url(#${gid}_steel)"/>
      <line x1="200" y1="52" x2="200" y2="190" stroke="#718ba8" stroke-width="0.8" opacity="0.6"/>
      <polygon points="200,80 203.5,88 200,96 196.5,88" fill="#d4af37" stroke="#332408" stroke-width="0.5"/>
      <circle cx="200" cy="88" r="1.2" fill="#1b2838"/>
      <path d="M 198 200 L 196.5 240 Q 192 250 200 256 Q 208 250 203.5 240 L 202 200 Z" fill="url(#${gid}_steel)"/>
      <circle cx="200" cy="245" r="4.5" fill="#151d2a" stroke="#d4af37" stroke-width="0.8"/>
    </g>

    <!-- Central Brass Hub -->
    <g filter="url(#${gid}_shadow)">
      <circle cx="200" cy="200" r="18" fill="url(#${gid}_brass)" stroke="#3d2c0e" stroke-width="1.5"/>
      <circle cx="200" cy="200" r="15" fill="#a8842c" stroke="#523c10" stroke-width="1"/>
      <circle cx="200" cy="200" r="9" fill="url(#${gid}_bezel)" stroke="#2b1c05" stroke-width="1"/>
      <circle cx="200" cy="200" r="5" fill="#fdf0a6"/>
      <line x1="197" y1="197" x2="203" y2="203" stroke="#523c10" stroke-width="1"/>
    </g>

    <!-- Glass Reflection -->
    <circle cx="200" cy="200" r="170" fill="none" opacity="0.3" pointer-events="none"/>
  </svg>`;
}

// ── Precipitation gauge SVG ───────────────────────────────────────────────
/**
 * Renders a circular arc gauge SVG showing precipitation probability.
 * @param {number} pct  Value 0–100
 * @returns {string}  SVG markup string
 */
function precipWidget(pct, label = "") {
  const hasVal = pct != null && !Number.isNaN(pct);
  const safePct = hasVal ? Math.max(0, Math.min(100, pct)) : 0;
  const r=44, cx=60, cy=60, circ=2*Math.PI*r;
  const trackLen=circ*0.75, trackGap=circ-trackLen;
  const fillLen=trackLen*(safePct/100), fillGap=circ-fillLen;
  const rot=-225;
  const fillColor = safePct < 30 ? "#90CAF9" : safePct < 60 ? "#42A5F5" : "#1565C0";
  const gid = "pw" + (++_gradientIdCounter);
  const displayTxt = hasVal ? `${safePct}%` : "—";
  const aria = label ? `${label}: ${displayTxt}` : `Precipitation: ${displayTxt}`;
  return `<svg role="img" aria-label="${escapeHtml(aria)}" viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
    <defs>
      <linearGradient id="${gid}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${fillColor}" stop-opacity="0.75"/>
        <stop offset="100%" stop-color="${fillColor}" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
      stroke="rgba(255,255,255,0.20)" stroke-width="10"
      stroke-dasharray="${trackLen.toFixed(2)} ${trackGap.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${rot} ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
      stroke="url(#${gid})" stroke-width="10"
      stroke-dasharray="${fillLen.toFixed(2)} ${fillGap.toFixed(2)}"
      stroke-linecap="round" transform="rotate(${rot} ${cx} ${cy})"
      style="transition:stroke-dasharray .9s ease"/>
    <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
      fill="white" font-size="22" font-weight="900"
      font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">${displayTxt}</text>
  </svg>`;
}

// ── Forecast trend timeline ───────────────────────────────────────────────
/**
 * Render a horizontal strip of Zambretti forecast states over time.
 * Each step: small weather icon + time label. Steps separated by → arrows.
 * The last (current) step is highlighted.
 *
 * @param {Array<{t:Date, state:string, isCurrent?:boolean}>} steps  max 8
 * @param {object} labels  i18n map
 * @param {boolean} compact
 * @returns {string}  HTML string
 */
function forecastTimeline(steps, labels, compact) {
  if (!steps || steps.length === 0) {
    return `<div class="tl-empty">— no trend data yet —</div>`;
  }

  const iconSz = compact ? 28 : 34;

  // Format time: HH:MM
  function fmt(date) {
    return `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
  }

  const cells = steps.map((step, i) => {
    const isLast = i === steps.length - 1;
    const iconKey = ZAMBRETTI_TO_ICON[step.state] || "partlycloudy";
    // Short label: first word only (keeps it compact)
    const fullLabel = labels[step.state] || step.state || "—";
    const shortLbl  = fullLabel.split(/[,\s]+/)[0];
    const timeStr   = fmt(step.t);
    const curClass  = (step.isCurrent || isLast) ? " tl-current" : "";
    const svg = renderWeatherIconSvg(iconKey, `${timeStr}: ${fullLabel}`);

    const arrow = (!isLast)
      ? `<div class="tl-arrow">›</div>`
      : "";

    return `
      <div class="tl-step${curClass}">
        <div class="tl-icon" style="width:${iconSz}px;height:${iconSz}px">${svg}</div>
        <div class="tl-lbl">${escapeHtml(shortLbl)}</div>
        <div class="tl-time">${escapeHtml(timeStr)}</div>
      </div>
      ${arrow}`;
  }).join("");

  return `<div class="tl-inner">${cells}</div>`;
}

// ── History chart SVG ────────────────────────────────────────────────────
/**
 * Render a dual-axis SVG line chart:
 *   - blue line  = pressure (hPa), left axis
 *   - teal line  = precipitation probability (%), right axis
 *   - grey bars  = Zambretti condition label (bottom strip)
 *
 * @param {Array<{t:Date, p:number|null, precip:number|null, label:string|null}>} points
 *   Sorted oldest→newest, max 288 points (24h × 5-min intervals).
 * @param {object} labels  i18n label map for Zambretti keys
 * @param {boolean} compact  use compact sizing
 * @returns {string}  SVG markup string
 */
function historyChart(points, labels, compact) {
  if (!points || points.length < 2) {
    return `<div class="hchart-empty">— no history data yet —</div>`;
  }

  const W = 560, H = compact ? 150 : 200;
  const PAD = { top: 22, right: 16, bottom: 38, left: 56 };
  const cW = W - PAD.left - PAD.right;
  const cH = H - PAD.top - PAD.bottom;
  const FONT = compact ? 11 : 13;
  const FONT_FAMILY = "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif";
  const gid = "hc" + (++_gradientIdCounter);

  // ── Filter out nulls ───────────────────────────────────────────────────
  let pPoints  = points.filter(d => d.p    != null);
  let prPoints = points.filter(d => d.precip != null);

  // ── Spike filter (IQR) for pressure only ─────────────────────────────
  if (pPoints.length >= 4) {
    const sv = [...pPoints].map(d => d.p).sort((a, b) => a - b);
    const q1 = sv[Math.floor(sv.length * 0.25)];
    const q3 = sv[Math.floor(sv.length * 0.75)];
    const iqr = q3 - q1;
    pPoints = pPoints.filter(d => d.p >= q1 - 3*iqr && d.p <= q3 + 3*iqr);
  }
  // Note: no IQR filter for precip — 0–100% are all valid values

  // ── Pressure axis ─────────────────────────────────────────────────────
  let pMin = 980, pMax = 1040;
  if (pPoints.length) {
    const vals = pPoints.map(d => d.p);
    const lo = Math.min(...vals), hi = Math.max(...vals);
    const margin = Math.max(2, (hi - lo) * 0.15);
    pMin = Math.floor(lo - margin);
    pMax = Math.ceil(hi + margin);
  }

  // ── Time axis ─────────────────────────────────────────────────────────
  const tMin = points[0].t.getTime();
  const tMax = points[points.length - 1].t.getTime();
  const tRange = tMax - tMin || 1;

  function xOf(t)  { return PAD.left + ((t.getTime() - tMin) / tRange) * cW; }
  function yOfP(v) { return PAD.top  + (1 - (v - pMin) / (pMax - pMin)) * cH; }
  function yOfPr(v){ return PAD.top  + (1 - v / 100) * cH; }

  // ── Polyline paths ────────────────────────────────────────────────────
  function makePath(pts, yFn) {
    if (!pts.length) return "";
    return pts.map((d, i) => `${i === 0 ? "M" : "L"}${xOf(d.t).toFixed(1)},${yFn(i === 0 ? pts[0][yFn === yOfP ? "p" : "precip"] : d[yFn === yOfP ? "p" : "precip"]).toFixed(1)}`).join(" ");
  }
  // build paths properly
  const pPath  = pPoints.map((d, i)  => `${i===0?"M":"L"}${xOf(d.t).toFixed(1)},${yOfP(d.p).toFixed(1)}`).join(" ");
  const prPath = prPoints.map((d, i) => `${i===0?"M":"L"}${xOf(d.t).toFixed(1)},${yOfPr(d.precip).toFixed(1)}`).join(" ");

  // ── Area fill for pressure ─────────────────────────────────────────────
  const pAreaPath = pPoints.length ? (
    pPath +
    ` L${xOf(pPoints[pPoints.length-1].t).toFixed(1)},${(PAD.top+cH).toFixed(1)}` +
    ` L${xOf(pPoints[0].t).toFixed(1)},${(PAD.top+cH).toFixed(1)} Z`
  ) : "";

  // ── Y-axis ticks (pressure) ────────────────────────────────────────────
  const pTickCount = compact ? 3 : 4;
  const pStep = Math.ceil((pMax - pMin) / (pTickCount - 1) / 5) * 5;
  const pTicks = [];
  for (let v = Math.ceil(pMin / 5) * 5; v <= pMax; v += pStep) pTicks.push(v);

  // ── Y-axis ticks (precip %) ────────────────────────────────────────────
  const prTicks = [0, 25, 50, 75, 100];

  // ── X-axis time labels (every 6h) ─────────────────────────────────────
  const xLabels = [];
  {
    const start = new Date(tMin);
    // round up to next whole hour
    start.setMinutes(0, 0, 0);
    start.setHours(start.getHours() + 1);
    const cur = new Date(start);
    while (cur.getTime() <= tMax) {
      if (cur.getHours() % 6 === 0) {
        xLabels.push({ t: new Date(cur), label: `${String(cur.getHours()).padStart(2,"0")}:00` });
      }
      cur.setHours(cur.getHours() + 1);
    }
  }

  // ── Current time marker ───────────────────────────────────────────────
  const nowX = xOf(new Date(tMax));

  // ── Last pressure value annotation ───────────────────────────────────
  let lastPAnnot = "";
  if (pPoints.length) {
    const last = pPoints[pPoints.length - 1];
    const lx = xOf(last.t), ly = yOfP(last.p);
    // Always place label to the LEFT of the dot to avoid right-edge overflow
    lastPAnnot = `
      <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="5" fill="#90CAF9" stroke="#fff" stroke-width="1.5"/>
      <text x="${(lx - 8).toFixed(1)}" y="${(ly + 14).toFixed(1)}" text-anchor="middle"
        fill="#90CAF9" font-size="${FONT + 2}" font-weight="800"
        font-family="${FONT_FAMILY}">${last.p.toFixed(1)}</text>`;
  }
  let lastPrAnnot = "";
  if (prPoints.length) {
    const last = prPoints[prPoints.length - 1];
    const lx = xOf(last.t), ly = yOfPr(last.precip);
    // Place precip label above the dot
    lastPrAnnot = `
      <circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="4.5" fill="rgba(255,255,255,0.90)" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <text x="${(lx - 8).toFixed(1)}" y="${(ly - 10).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.85)" font-size="${FONT + 1}" font-weight="700"
        font-family="${FONT_FAMILY}">${last.precip.toFixed(0)}%</text>`;
  }

  // ── Precip area fill (bottom-anchored) ────────────────────────────────
  const prAreaPath = prPoints.length ? (
    prPath +
    ` L${xOf(prPoints[prPoints.length-1].t).toFixed(1)},${(PAD.top+cH).toFixed(1)}` +
    ` L${xOf(prPoints[0].t).toFixed(1)},${(PAD.top+cH).toFixed(1)} Z`
  ) : "";

  let chartAria = "24-hour pressure and precipitation chart";
  if (pPoints.length) {
    const pVals = pPoints.map(d => d.p);
    chartAria = `24-hour pressure and precipitation chart: pressure from ${Math.min(...pVals).toFixed(1)} to ${Math.max(...pVals).toFixed(1)} hPa`;
  }

  return `<svg role="img" aria-label="${escapeHtml(chartAria)}" viewBox="0 0 ${W} ${H}" class="history-chart-svg" xmlns="http://www.w3.org/2000/svg"
    style="width:100%;height:100%;display:block;overflow:visible;cursor:crosshair">
    <defs>
      <linearGradient id="${gid}_p" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="#90CAF9" stop-opacity="0.40"/>
        <stop offset="100%" stop-color="#90CAF9" stop-opacity="0.05"/>
      </linearGradient>
      <linearGradient id="${gid}_pr" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stop-color="rgba(255,255,255,0.22)" stop-opacity="1"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" stop-opacity="1"/>
      </linearGradient>
      <clipPath id="${gid}_clip">
        <rect x="${PAD.left}" y="${PAD.top}" width="${cW}" height="${cH}"/>
      </clipPath>
    </defs>

    <!-- Horizontal grid lines (pressure ticks) -->
    ${pTicks.map(v => {
      const y = yOfP(v).toFixed(1);
      return `<line x1="${PAD.left}" y1="${y}" x2="${PAD.left+cW}" y2="${y}"
        stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 5"/>`;
    }).join("")}
    <!-- Vertical grid lines (time ticks) -->
    ${xLabels.map(({t}) => {
      const x = xOf(t).toFixed(1);
      return `<line x1="${x}" y1="${PAD.top}" x2="${x}" y2="${PAD.top+cH}"
        stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="2 5"/>`;
    }).join("")}

    <g clip-path="url(#${gid}_clip)">
      <!-- Precip area fill -->
      ${prAreaPath ? `<path d="${prAreaPath}" fill="url(#${gid}_pr)"/>` : ""}
      <!-- Precip line: dashed white, visible on any background -->
      ${prPath ? `<path d="${prPath}" fill="none" stroke="rgba(255,255,255,0.72)"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        stroke-dasharray="5 4"/>` : ""}
      <!-- Pressure area fill -->
      ${pAreaPath ? `<path d="${pAreaPath}" fill="url(#${gid}_p)"/>` : ""}
      <!-- Pressure line: solid, on top -->
      ${pPath ? `<path d="${pPath}" fill="none" stroke="#90CAF9"
        stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>` : ""}
      ${lastPAnnot}
      ${lastPrAnnot}
    </g>

    <!-- Left Y-axis labels (pressure) -->
    ${pTicks.map(v => {
      const y = yOfP(v);
      if (y < PAD.top - 4 || y > PAD.top + cH + 4) return "";
      return `<text x="${PAD.left - 7}" y="${y.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.70)"
        font-size="${FONT}" font-family="${FONT_FAMILY}">${v}</text>`;
    }).join("")}

    <!-- Right Y-axis labels (precip %) — positioned inside right edge -->
    ${prTicks.map(v => {
      const y = yOfPr(v);
      if (y < PAD.top - 4 || y > PAD.top + cH + 4) return "";
      return `<text x="${(PAD.left + cW - 2).toFixed(1)}" y="${y.toFixed(1)}" text-anchor="end"
        dominant-baseline="middle" fill="rgba(255,255,255,0.45)"
        font-size="${FONT - 2}" font-family="${FONT_FAMILY}">${v}%</text>`;
    }).join("")}

    <!-- X-axis time labels -->
    ${xLabels.map(({t, label}) => {
      const x = xOf(t);
      if (x < PAD.left + 6 || x > PAD.left + cW - 6) return "";
      return `<text x="${x.toFixed(1)}" y="${(PAD.top+cH+15).toFixed(1)}" text-anchor="middle"
        fill="rgba(255,255,255,0.55)" font-size="${FONT}"
        font-family="${FONT_FAMILY}">${label}</text>`;
    }).join("")}

    <!-- Axis borders -->
    <line x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${PAD.top+cH}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
    <line x1="${PAD.left}" y1="${PAD.top+cH}" x2="${PAD.left+cW}" y2="${PAD.top+cH}"
      stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>

    <!-- Legend -->
    <circle cx="${PAD.left+7}" cy="${PAD.top-7}" r="4" fill="#90CAF9"/>
    <text x="${PAD.left+15}" y="${PAD.top-4}" fill="rgba(255,255,255,0.70)"
      font-size="${FONT}" font-family="${FONT_FAMILY}" dominant-baseline="middle">hPa</text>
    <circle cx="${PAD.left+52}" cy="${PAD.top-7}" r="4" fill="rgba(255,255,255,0.80)"/>
    <text x="${PAD.left+60}" y="${PAD.top-4}" fill="rgba(255,255,255,0.60)"
      font-size="${FONT}" font-family="${FONT_FAMILY}" dominant-baseline="middle">precip %</text>

    <!-- Interactive Scrub Cursor & Tooltip -->
    <g class="hchart-scrub-cursor" style="opacity:0; pointer-events:none; transition:opacity 0.15s ease-out;">
      <line class="hchart-scrub-line" x1="${PAD.left}" y1="${PAD.top}" x2="${PAD.left}" y2="${PAD.top+cH}" stroke="#FFD54F" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle class="hchart-scrub-dot-halo" cx="${PAD.left}" cy="${PAD.top}" r="8" fill="rgba(255,213,79,0.3)"/>
      <circle class="hchart-scrub-dot" cx="${PAD.left}" cy="${PAD.top}" r="4.5" fill="#FFD54F" stroke="#ffffff" stroke-width="1.5"/>
      <g class="hchart-scrub-tip" transform="translate(${PAD.left+40}, ${PAD.top+10})">
        <rect x="-38" y="-11" width="76" height="22" rx="6" fill="#0f172a" stroke="#FFD54F" stroke-width="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"/>
        <text class="hchart-scrub-tip-txt" x="0" y="3.5" fill="#ffffff" font-size="${FONT+1}" font-weight="700" text-anchor="middle" font-family="${FONT_FAMILY}">1014.2 hPa</text>
      </g>
    </g>
  </svg>`;
}

// ── Main card class ───────────────────────────────────────────────────────
/**
 * Main Lovelace card element.
 * Renders the weather card, handles hass state updates via full rebuild (_render)
 * or lightweight patch (_patch), and fetches 24h history for the chart/timeline.
 */
// ── Pressure Unit Converter ────────────────────────────────────────────────
/**
 * Normalizes pressure value to hPa based on the sensor's unit_of_measurement.
 * Supports hPa, mbar, mmHg, inHg, psi, Pa, kPa, bar.
 */
function normalizePressureToHpa(val, unit) {
  if (val == null) return null;
  const v = typeof val === "number" ? val : parseFloat(val);
  if (isNaN(v)) return null;
  const u = (unit || "hpa").trim().toLowerCase();
  switch (u) {
    case "hpa":
    case "mbar":
      return v;
    case "mmhg":
      return v * 1.33322387415;
    case "inhg":
      return v * 33.863886666667;
    case "psi":
      return v * 68.947572932;
    case "pa":
      return v / 100;
    case "kpa":
      return v * 10;
    case "bar":
      return v * 1000;
    default:
      return v;
  }
}

const DEFAULT_ENTITIES = {
  entity_zambretti: "sensor.zambretti_forecast",
  entity_sager:     "sensor.sager_forecast",
  entity_6h:        "sensor.zambretti_forecast_6h",
  entity_12h:       "sensor.zambretti_forecast_12h",
  entity_24h:       "sensor.zambretti_forecast_24h",
  entity_precip:    "sensor.precipitation_probability",
};

const TRANSLATION_KEY_MAP = {
  zambretti_forecast:        "entity_zambretti",
  sager_forecast:            "entity_sager",
  zambretti_forecast_6h:     "entity_6h",
  zambretti_forecast_12h:    "entity_12h",
  zambretti_forecast_24h:    "entity_24h",
  precipitation_probability: "entity_precip",
};

class ZambrettiWeatherCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode:"open"});
    this._config = {};
    this._historyPoints = null;   // cached chart data
    this._historyFetching = false;

    this.shadowRoot.addEventListener("click", (e) => {
      const target = e.target?.closest?.("[data-more-info]");
      if (target) {
        this._openMoreInfo(target.getAttribute("data-more-info"));
      }
    });
    this.shadowRoot.addEventListener("keydown", (e) => {
      const target = e.target?.closest?.("[data-more-info]");
      if (!target) return;
      if (e.key === "Enter") {
        e.preventDefault();
        this._openMoreInfo(target.getAttribute("data-more-info"));
      } else if (e.key === " ") {
        e.preventDefault();
      }
    });
    this.shadowRoot.addEventListener("keyup", (e) => {
      const target = e.target?.closest?.("[data-more-info]");
      if (target && e.key === " ") {
        e.preventDefault();
        this._openMoreInfo(target.getAttribute("data-more-info"));
      }
    });
  }

  /** Dispatches Home Assistant's native entity details dialog event. */
  _openMoreInfo(entityId) {
    if (!entityId || !this._hass?.states?.[entityId]) return;
    this.dispatchEvent(new CustomEvent("hass-more-info", {
      detail: { entityId },
      bubbles: true,
      composed: true,
    }));
  }

  /** Returns accessible interactive attributes when entityId exists in hass.states. */
  _moreInfoAttrs(entityId) {
    if (!entityId || !this._hass?.states?.[entityId]) return "";
    return `data-more-info="${escapeHtml(entityId)}" role="button" tabindex="0"`;
  }

  /** Returns the editor element used by the Lovelace card picker (lazy-loaded on demand). */
  static async getConfigElement() {
    await import(new URL("./zambretti-weather-card-editor.js?v=2.1.1", import.meta.url).href);
    return document.createElement("zambretti-weather-card-editor");
  }

  /** Returns a minimal default config for the card picker preview. */
  static getStubConfig(hass, entities, entitiesFallback) {
    const resolved = { ...DEFAULT_ENTITIES };

    // 1. Prefer Home Assistant entity registry metadata (platform + device_id + translation_key)
    const reg = hass?.entities;
    if (reg && typeof reg === "object") {
      const regEntries = Object.values(reg).filter(
        (e) => e && e.platform === "zambretti_sager" && typeof e.entity_id === "string" && e.entity_id.startsWith("sensor.")
      );
      if (regEntries.length > 0) {
        const primary = regEntries.find((e) => e.translation_key === "zambretti_forecast") || regEntries[0];
        const devId = primary.device_id;
        for (const e of regEntries) {
          if (devId && e.device_id && e.device_id !== devId) continue;
          const cfgKey = TRANSLATION_KEY_MAP[e.translation_key];
          if (cfgKey) resolved[cfgKey] = e.entity_id;
        }
      }
    }

    // 2. Fallback to state / entity-id suffix matching when registry isn't populated
    const allKeys = (Array.isArray(entities) && entities.length > 0)
      ? entities
      : (Array.isArray(entitiesFallback) && entitiesFallback.length > 0)
        ? entitiesFallback
        : (hass && hass.states ? Object.keys(hass.states) : []);

    if (allKeys.length > 0) {
      const findBySuffix = (...suffixes) => allKeys.find((k) => {
        if (typeof k !== "string" || !k.startsWith("sensor.")) return false;
        const slug = k.slice(7);
        return suffixes.some((s) => slug === s || slug.endsWith(`_${s}`));
      });
      if (!hass?.states?.[resolved.entity_zambretti]) {
        resolved.entity_zambretti = findBySuffix("zambretti_forecast", "zambretti") || resolved.entity_zambretti;
      }
      if (!hass?.states?.[resolved.entity_sager]) {
        resolved.entity_sager = findBySuffix("sager_forecast", "sager") || resolved.entity_sager;
      }
      if (!hass?.states?.[resolved.entity_6h]) {
        resolved.entity_6h = findBySuffix("zambretti_forecast_6h", "forecast_6h") || resolved.entity_6h;
      }
      if (!hass?.states?.[resolved.entity_12h]) {
        resolved.entity_12h = findBySuffix("zambretti_forecast_12h", "forecast_12h") || resolved.entity_12h;
      }
      if (!hass?.states?.[resolved.entity_24h]) {
        resolved.entity_24h = findBySuffix("zambretti_forecast_24h", "forecast_24h") || resolved.entity_24h;
      }
      if (!hass?.states?.[resolved.entity_precip]) {
        resolved.entity_precip = findBySuffix("precipitation_probability", "precip_probability") || resolved.entity_precip;
      }
    }

    return {
      ...resolved,
      entity_wind_speed:  "",
      card_style:   "modern",
      show_wind:    true,
      show_sager:   true,
      show_precip:  true,
      show_forecasts: true,
      show_trend:   false,
      show_history: false,
      language:     "auto",
      wind_unit:    "m/s",
      compact:      false,
      auto_theme:   true,
      theme_alpha:  100,
    };
  }

  /** Applies a new card config, resets render state and clears history cache if needed. */
  setConfig(config) {
    if (!config || typeof config !== "object") {
      throw new Error("Invalid configuration");
    }
    const prev = this._config || {};
    const next = {
      ...DEFAULT_ENTITIES,
      entity_wind_speed:  "",
      show_wind:      true,
      show_trend:     false,
      show_history:   false,
      language:       "auto",
      wind_unit:      "m/s",
      compact:        false,
      show_sager:     true,
      show_precip:    true,
      show_forecasts: true,
      auto_theme:     true,
      theme_alpha:    config.theme_alpha ?? 100,
      custom_bg:      "linear-gradient(135deg,#1565C0 0%,#1976D2 100%)",
      ...config,
    };

    // Fast path for live background / alpha sliders in the visual editor
    if (this._hass && this._rendered) {
      const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);
      let onlyBgChanged = true;
      for (const k of allKeys) {
        if (k === "custom_bg" || k === "theme_alpha") continue;
        if (prev[k] !== next[k]) {
          onlyBgChanged = false;
          break;
        }
      }
      if (onlyBgChanged) {
        this._config = next;
        const zState = this._state(next.entity_zambretti);
        const isNight = this._attr(next.entity_zambretti, "is_night", false);
        const condThemeKey = (isNight && (zState === "settled_fine" || zState === "fine_weather"))
          ? "night_clear" : (ZAMBRETTI_CONDITION[zState] || "partlycloudy");
        const themeBg = this._computeThemeBg(condThemeKey, next.card_style === "vintage");
        const cardEl = this.shadowRoot.querySelector("ha-card");
        if (cardEl) cardEl.style.background = themeBg;
        this._lastThemeBg = themeBg;
        return;
      }
    }

    this._rendered = false;
    this._entitiesResolved = false;
    // If history/trend toggle changed, reset cache
    if (next.show_history !== prev.show_history ||
        next.show_trend   !== prev.show_trend) {
      this._historyPoints  = null;
      this._timelineSteps  = null;
    }
    this._config = next;
    if (this._hass) {
      const resolved = this._resolveEntities(this._hass);
      if (Object.keys(resolved).length > 0) {
        this._config = { ...this._config, ...resolved };
      }
      this._entitiesResolved = true;
      this._render();
    }
  }

  // ── Auto-discover entity IDs via HA entity registry & slug fallback ──────
  /**
   * Resolves Zambretti & Sager sibling entities using hass.entities (platform,
   * device_id, translation_key) first, then falls back to station slug prefixes.
   * @param {object} h  hass object
   * @returns {object}
   */
  _resolveEntities(h) {
    const states = h?.states || {};
    const reg = h?.entities;
    const resolved = {};

    // 1. Resolve or validate entity_zambretti
    let zId = this._config.entity_zambretti;
    if (!zId || !states[zId]) {
      if (reg && typeof reg === "object") {
        const regZ = Object.values(reg).find(
          (e) => e && e.platform === "zambretti_sager" && e.translation_key === "zambretti_forecast" && states[e.entity_id]
        );
        if (regZ) zId = regZ.entity_id;
      }
      if (!zId || !states[zId]) {
        zId = Object.keys(states).find(id => {
          if (!id.startsWith("sensor.")) return false;
          const slug = id.slice(7);
          return slug === "zambretti_forecast" || slug.endsWith("_zambretti_forecast") || slug.endsWith("_zambretti");
        });
      }
    }
    if (zId) {
      resolved.entity_zambretti = zId;
    }

    // 2. Prefer device_id + translation_key in hass.entities for sibling sensors
    const zRegEntry = (zId && reg && typeof reg === "object") ? reg[zId] : null;
    if (zRegEntry && zRegEntry.device_id) {
      const devId = zRegEntry.device_id;
      for (const e of Object.values(reg)) {
        if (!e || e.platform !== "zambretti_sager" || e.device_id !== devId) continue;
        const cfgKey = TRANSLATION_KEY_MAP[e.translation_key];
        if (!cfgKey || cfgKey === "entity_zambretti") continue;
        const cur = this._config[cfgKey];
        const curDevId = cur && reg[cur] ? reg[cur].device_id : null;
        if (!cur || !states[cur] || (cur === DEFAULT_ENTITIES[cfgKey] && curDevId !== devId)) {
          if (states[e.entity_id]) resolved[cfgKey] = e.entity_id;
        }
      }
    }

    // Determine station prefix from zId, e.g. "sensor.dacha_zambretti_forecast" -> "sensor.dacha_"
    let prefix = "";
    if (zId) {
      if (zId.endsWith("_zambretti_forecast")) {
        prefix = zId.slice(0, -"_zambretti_forecast".length + 1);
      } else if (zId.endsWith("_zambretti")) {
        prefix = zId.slice(0, -"_zambretti".length + 1);
      } else if (zId === "sensor.zambretti_forecast" || zId === "sensor.zambretti") {
        prefix = "sensor.";
      }
    }

    const SIBLINGS = {
      entity_sager:     ["sager_forecast", "sager"],
      entity_6h:        ["zambretti_forecast_6h", "forecast_6h"],
      entity_12h:       ["zambretti_forecast_12h", "forecast_12h"],
      entity_24h:       ["zambretti_forecast_24h", "forecast_24h"],
      entity_precip:    ["precipitation_probability", "precip_probability"],
      entity_pressure:  ["pressure", "barometric_pressure"],
    };

    for (const [key, suffixes] of Object.entries(SIBLINGS)) {
      if (resolved[key]) continue;
      const cur = this._config[key];
      // If already configured and belongs to same prefix, keep it
      if (cur && states[cur] && (!prefix || cur.startsWith(prefix))) {
        resolved[key] = cur;
        continue;
      }
      // Look for sibling matching the station prefix
      let found = null;
      if (prefix) {
        for (const s of suffixes) {
          const candidate = `${prefix}${s}`;
          if (states[candidate]) {
            found = candidate;
            break;
          }
        }
      }
      // Fallback: search all sensors matching any suffix
      if (!found) {
        found = Object.keys(states).find(id => {
          if (!id.startsWith("sensor.")) return false;
          const slug = id.slice(7);
          return suffixes.some(s => slug === s || slug.endsWith(`_${s}`));
        });
      }
      if (found) resolved[key] = found;
    }
    return resolved;
  }

  set hass(h) {
    const oldHass = this._hass;
    this._hass = h;
    // Auto-resolve entity IDs on first load (handles "weather_station_" prefix etc.)
    if (!this._entitiesResolved) {
      const resolved = this._resolveEntities(h);
      if (Object.keys(resolved).length > 0) {
        this._config = {...this._config, ...resolved};
      }
      this._entitiesResolved = true;
    }
    // Check if key forecast sensor recovered from unavailable/unknown to an active state
    const zId = this._config.entity_zambretti;
    const oldZState = oldHass?.states?.[zId]?.state;
    const newZState = h?.states?.[zId]?.state;
    const recovered = (oldZState === "unavailable" || oldZState === "unknown" || !oldZState) &&
                      (newZState && newZState !== "unavailable" && newZState !== "unknown");

    // Kick off history fetch when show_history or show_trend is on
    if (this._config.show_history || this._config.show_trend) {
      this._scheduleHistoryFetch(recovered);
    }
    // Full rebuild only on first render or after config change.
    // Subsequent hass updates use _patch() to avoid destroying SVG animations.
    if (!this._rendered) {
      this._render();
    } else if (oldHass && h) {
      const watched = [
        this._config.entity_zambretti,
        this._config.entity_sager,
        this._config.entity_6h,
        this._config.entity_12h,
        this._config.entity_24h,
        this._config.entity_precip,
        this._config.entity_wind_speed,
        this._config.entity_pressure,
      ].filter(Boolean);

      const langChanged = (this._config.language === "auto" || !this._config.language) &&
                          oldHass.language !== h.language;
      const hasChanged = langChanged || watched.some(id => oldHass.states?.[id] !== h.states?.[id]);
      if (hasChanged) {
        if (langChanged) {
          this._rendered = false;
          this._render();
        } else {
          this._patch();
        }
      }
    } else {
      this._patch();
    }
  }

  // ── History fetch ─────────────────────────────────────────────────────
  /**
   * Triggers a history fetch if one isn't already running and the throttle
   * interval (5 min, or 15s if no data) has elapsed. Updates chart and timeline on completion.
   */
  _scheduleHistoryFetch(force = false) {
    if (this._historyFetching) return;
    const cfg = this._config;
    if (!cfg.show_history && !cfg.show_trend) return;
    if (typeof document !== "undefined" && document.hidden) {
      this._historyFetchPending = true;
      return;
    }
    const now = Date.now();
    const hasData = (Array.isArray(this._historyPoints) && this._historyPoints.length >= 2) ||
                    (Array.isArray(this._timelineSteps) && this._timelineSteps.length > 0);
    const throttleMs = hasData ? (5 * 60 * 1000) : (15 * 1000);
    if (!force && this._historyFetchedAt && (now - this._historyFetchedAt) < throttleMs) return;

    this._historyFetching = true;
    this._doFetchHistory().then(() => {
      this._historyFetching = false;
      this._historyFetchedAt = Date.now();
      // Re-render chart and/or timeline section only if visible
      if (this._rendered && (typeof document === "undefined" || !document.hidden)) {
        if (this._config.show_history) this._patchChart();
        if (this._config.show_trend)   this._patchTimeline();
      }
    }).catch(() => {
      this._historyFetching = false;
    });
  }

  /**
   * Fetches 24–48h of Zambretti state, pressure and precipitation history
   * via the HA WebSocket history API. Populates _historyPoints and _timelineSteps.
   */
  async _doFetchHistory() {
    if (!this._hass) return;
    const cfg = this._config;
    const endTime   = new Date();

    const zId      = cfg.entity_zambretti;
    const precipId = cfg.entity_precip;
    const pressureId = this._attr(zId, "pressure_sensor", null) || cfg.entity_pressure || null;

    if (!zId && !precipId && !pressureId) return;

    const showHistory = cfg.show_history !== false && !!cfg.show_history;
    const showTrend   = cfg.show_trend !== false && !!cfg.show_trend;
    if (!showHistory && !showTrend) return;

    // Only request entities that are actually needed for enabled UI sections
    const needZ = showTrend || (!pressureId && showHistory);
    const needPrecip = showHistory && cfg.show_precip !== false && !!precipId;
    const needPressure = showHistory && !!pressureId;

    if (!needZ && !needPrecip && !needPressure) return;

    // Chart uses 24h window; timeline uses 48h to catch more state changes
    const chartStart    = new Date(endTime.getTime() - 24 * 60 * 60 * 1000);
    const timelineStart = new Date(endTime.getTime() - 48 * 60 * 60 * 1000);

    try {
      const [zResult, prResult, pResult] = await Promise.all([
        // Zambretti: 48h, full format for timeline states or fallback pressure
        (needZ && zId) ? this._hass.callWS({
          type: "history/history_during_period",
          start_time: timelineStart.toISOString(),
          end_time:   endTime.toISOString(),
          entity_ids: [zId],
          minimal_response: false,
          no_attributes: false,
          significant_changes_only: false,
        }) : Promise.resolve({}),
        // Precip: 24h, minimal (only state value needed)
        (needPrecip && precipId) ? this._hass.callWS({
          type: "history/history_during_period",
          start_time: chartStart.toISOString(),
          end_time:   endTime.toISOString(),
          entity_ids: [precipId],
          minimal_response: true,
          no_attributes: true,
          significant_changes_only: false,
        }) : Promise.resolve({}),
        // Raw pressure sensor: 24h, minimal (dense real data from BMP280)
        (needPressure && pressureId) ? this._hass.callWS({
          type: "history/history_during_period",
          start_time: chartStart.toISOString(),
          end_time:   endTime.toISOString(),
          entity_ids: [pressureId],
          minimal_response: true,
          no_attributes: true,
          significant_changes_only: false,
        }) : Promise.resolve({}),
      ]);

      // ── Helpers ────────────────────────────────────────────────────────
      function bucket(t) { return Math.round(t.getTime() / (5 * 60 * 1000)); }

      // HA history_during_period returns entries in two possible shapes:
      //   Full format  (minimal_response=false): { state, last_updated, attributes:{...} }
      //   Minimal format (minimal_response=true): { s, lu, a:{...} }
      // Some HA versions also mix: { state, lu, attributes }
      function entryTime(entry) {
        if (entry.lu != null)       return new Date(entry.lu * 1000);
        if (entry.last_updated)     return new Date(entry.last_updated);
        return new Date();
      }
      function entryState(entry) {
        return entry.state ?? entry.s ?? null;
      }
      function entryAttrs(entry) {
        // Full format: entry.attributes  |  Minimal: entry.a
        return entry.attributes ?? entry.a ?? {};
      }

      // ── Build timeMap from pressure history (last 24h only for chart) ──
      const timeMap = new Map();
      const zHistory = zResult[zId] || [];
      const chartStartMs = chartStart.getTime();

      // Current sea-level pressure from Zambretti entity attributes (for delta alignment)
      const pSeaCurRaw = this._attr(zId, "pressure_hpa", null);
      const pSeaCur = (pSeaCurRaw != null && !isNaN(parseFloat(pSeaCurRaw))) ? parseFloat(pSeaCurRaw) : NaN;

      if (pressureId) {
        // ── Use raw pressure sensor with unit conversion & sea-level alignment ─
        const pHistory = pResult[pressureId] || [];
        const rawUnit = this._attr(pressureId, "unit_of_measurement", "hPa");
        const rawState = this._state(pressureId);
        const pRawCurHpa = normalizePressureToHpa(rawState, rawUnit);

        let seaDelta = 0;
        if (!isNaN(pSeaCur) && pRawCurHpa != null && !isNaN(pRawCurHpa)) {
          seaDelta = pSeaCur - pRawCurHpa;
        }

        for (const entry of pHistory) {
          const t   = entryTime(entry);
          if (t.getTime() < chartStartMs) continue;
          const key = bucket(t);
          const rawP = entryState(entry);
          const pHpa = normalizePressureToHpa(rawP, rawUnit);
          if (!timeMap.has(key)) timeMap.set(key, { t, p: null, precip: null });
          if (pHpa != null && !isNaN(pHpa)) timeMap.get(key).p = pHpa + seaDelta;
        }

        // Inject live current sea-level pressure at end time
        const liveP = !isNaN(pSeaCur) ? pSeaCur : (pRawCurHpa != null ? (pRawCurHpa + seaDelta) : null);
        if (liveP != null && !isNaN(liveP)) {
          const nowKey = bucket(endTime);
          if (!timeMap.has(nowKey)) timeMap.set(nowKey, { t: endTime, p: null, precip: null });
          timeMap.get(nowKey).p = liveP;
        }
      } else {
        // ── Fallback: pressure from zambretti sensor attributes ────────────
        for (const entry of zHistory) {
          const t    = entryTime(entry);
          if (t.getTime() < chartStartMs) continue;
          const key  = bucket(t);
          const attrs = entryAttrs(entry);
          const p    = parseFloat(attrs.pressure_hpa);
          if (!timeMap.has(key)) timeMap.set(key, { t, p: null, precip: null });
          if (!isNaN(p)) timeMap.get(key).p = p;
        }
        if (!isNaN(pSeaCur)) {
          const nowKey = bucket(endTime);
          if (!timeMap.has(nowKey)) timeMap.set(nowKey, { t: endTime, p: null, precip: null });
          timeMap.get(nowKey).p = pSeaCur;
        }
      }

      // ── Forward-fill pressure so line is continuous ────────────────────
      let sortedKeys = [...timeMap.keys()].sort((a, b) => a - b);
      let lastP = null;
      for (const key of sortedKeys) {
        const pt = timeMap.get(key);
        if (pt.p != null) { lastP = pt.p; }
        else if (lastP != null) { pt.p = lastP; }
      }
      // Backward-fill: fill leading nulls from the first known value
      let firstP = null;
      for (const key of sortedKeys) {
        if (timeMap.get(key).p != null) { firstP = timeMap.get(key).p; break; }
      }
      if (firstP != null) {
        for (const key of sortedKeys) {
          const pt = timeMap.get(key);
          if (pt.p != null) break;
          pt.p = firstP;
        }
      }

      // ── Precip: add its own time buckets + forward-fill across all buckets ─
      const prHistory = prResult[precipId] || [];
      const prRaw = prHistory
        .map(e => ({ t: entryTime(e), v: parseFloat(entryState(e)) }))
        .filter(x => !isNaN(x.v))
        .sort((a, b) => a.t - b.t);

      // Always inject the live current value as the last data point
      // so the line always ends at the actual current reading
      const livePrecip = parseFloat(this._hass?.states?.[precipId]?.state);
      if (!isNaN(livePrecip)) {
        const nowKey = bucket(endTime);
        if (!timeMap.has(nowKey)) timeMap.set(nowKey, { t: endTime, p: null, precip: null });
        timeMap.get(nowKey).precip = livePrecip;
        // Re-add to prRaw so forward-fill uses it
        prRaw.push({ t: endTime, v: livePrecip });
        prRaw.sort((a, b) => a.t - b.t);
      }

      if (prRaw.length) {
        // Add precip-only buckets into timeMap
        for (const { t, v } of prRaw) {
          if (t.getTime() < chartStartMs) continue;
          const key = bucket(t);
          if (!timeMap.has(key)) timeMap.set(key, { t, p: null, precip: null });
          timeMap.get(key).precip = v;
        }
        // Re-sort after possible new keys
        sortedKeys.length = 0;
        sortedKeys.push(...[...timeMap.keys()].sort((a, b) => a - b));
        // Re-run pressure fills on new sorted keys
        lastP = null;
        for (const key of sortedKeys) {
          const pt = timeMap.get(key);
          if (pt.p != null) { lastP = pt.p; }
          else if (lastP != null) { pt.p = lastP; }
        }
        if (firstP != null) {
          for (const key of sortedKeys) {
            const pt = timeMap.get(key);
            if (pt.p != null) break;
            pt.p = firstP;
          }
        }
        // Forward-fill precip across all buckets
        let pi = 0;
        let lastPrecip = prRaw[0].v;
        for (const key of sortedKeys) {
          const tMs = timeMap.get(key).t.getTime();
          while (pi + 1 < prRaw.length && prRaw[pi + 1].t.getTime() <= tMs) pi++;
          if (prRaw[pi].t.getTime() <= tMs) lastPrecip = prRaw[pi].v;
          if (timeMap.get(key).precip == null) timeMap.get(key).precip = lastPrecip;
        }
      }

      this._historyPoints = sortedKeys.map(k => timeMap.get(k));

      // ── Timeline: all distinct state transitions + current ───────────────
      const zValid = zHistory
        .map(e => ({ t: entryTime(e), state: entryState(e) }))
        .filter(e => e.state && e.state !== "unknown" && e.state !== "unavailable")
        .sort((a, b) => a.t - b.t);

      // Collect transitions — deduplicate consecutive same states
      // AND enforce minimum 30-min gap between steps to avoid near-duplicate timestamps
      const transitions = [];
      for (const e of zValid) {
        const prev = transitions[transitions.length - 1];
        if (prev && prev.state === e.state) continue;
        // Skip if less than 30 min since last step (startup noise)
        if (prev && (e.t.getTime() - prev.t.getTime()) < 30 * 60 * 1000) {
          // Update the existing step to the newer time & state
          prev.state = e.state;
          prev.t = e.t;
          continue;
        }
        transitions.push({ t: e.t, state: e.state });
      }

      // Take last 7 transitions (leave room for current)
      const pastSteps = transitions.slice(-7);

      // Add current state pinned to now
      const curState = this._hass.states[zId]?.state;
      if (curState && curState !== "unknown" && curState !== "unavailable") {
        const last = pastSteps[pastSteps.length - 1];
        if (!last || last.state !== curState) {
          pastSteps.push({ t: new Date(), state: curState, isCurrent: true });
        } else {
          last.isCurrent = true;
          last.t = new Date();
        }
      }

      this._timelineSteps = pastSteps;

    } catch (e) {
      // history fetch failed silently — chart/timeline will show empty state
      this._historyPoints = [];
      this._timelineSteps = [];
    }
  }

  // ── Patch only the chart area without full rebuild ─────────────────────
  /** Re-renders only the history chart section without destroying the rest of the DOM. */
  _patchChart() {
    const chartWrap = this.shadowRoot?.querySelector(".history-chart-wrap");
    if (!chartWrap) {
      // Chart section not in DOM yet — do full rebuild
      this._rendered = false;
      this._render();
      return;
    }
    const compact = !!this._config.compact;
    chartWrap.style.height = `${compact ? 150 : 200}px`;
    const L = this._labels();
    chartWrap.innerHTML = historyChart(this._historyPoints, L, compact);
    this._setupHistoryScrubbing();
  }

  // ── Interactive history chart scrubbing ─────────────────────────────────
  /** Attaches pointer / touch listeners to enable dynamic history scrubbing on the 24h chart. */
  _setupHistoryScrubbing() {
    const svg = this.shadowRoot?.querySelector(".history-chart-svg");
    if (!svg || !Array.isArray(this._historyPoints) || this._historyPoints.length < 2) return;
    let pPts = this._historyPoints.filter(d => d.p != null);
    if (pPts.length < 2) return;
    const prPts = this._historyPoints.filter(d => d.precip != null);
    const titleEl = this.shadowRoot?.querySelector(".history-title");
    const defaultTitle = `<svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h`;

    const scrubCursor = svg.querySelector(".hchart-scrub-cursor");
    const scrubLine = svg.querySelector(".hchart-scrub-line");
    const scrubDot = svg.querySelector(".hchart-scrub-dot");
    const scrubDotHalo = svg.querySelector(".hchart-scrub-dot-halo");
    const scrubTip = svg.querySelector(".hchart-scrub-tip");
    const scrubTipTxt = svg.querySelector(".hchart-scrub-tip-txt");
    if (!scrubCursor || !scrubLine || !scrubDot || !scrubTip) return;

    // Apply same IQR filter as historyChart() so min/max match exactly
    if (pPts.length >= 4) {
      const sv = [...pPts].map(d => d.p).sort((a, b) => a - b);
      const q1 = sv[Math.floor(sv.length * 0.25)];
      const q3 = sv[Math.floor(sv.length * 0.75)];
      const iqr = q3 - q1;
      pPts = pPts.filter(d => d.p >= q1 - 3*iqr && d.p <= q3 + 3*iqr);
    }
    if (pPts.length < 2) return;

    const compact = !!this._config.compact;
    const W = 560, H = compact ? 150 : 200;
    const PAD = { top: 22, right: 16, bottom: 38, left: 56 };
    const cW = W - PAD.left - PAD.right;
    const cH = H - PAD.top - PAD.bottom;

    const pVals = pPts.map(d => d.p);
    const lo = Math.min(...pVals), hi = Math.max(...pVals);
    const margin = Math.max(2, (hi - lo) * 0.15);
    const pMin = Math.floor(lo - margin);
    const pMax = Math.ceil(hi + margin);

    const tMin = this._historyPoints[0].t.getTime();
    const tMax = this._historyPoints[this._historyPoints.length - 1].t.getTime();
    const tSpan = Math.max(tMax - tMin, 1);

    const handleMove = (e) => {
      const rect = svg.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const normX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const svgX = normX * W;
      const chartX = Math.max(PAD.left, Math.min(PAD.left + cW, svgX));

      const targetTime = tMin + ((chartX - PAD.left) / cW) * tSpan;
      let closest = pPts[0];
      let minDiff = Infinity;
      for (const pt of pPts) {
        const diff = Math.abs(pt.t.getTime() - targetTime);
        if (diff < minDiff) { minDiff = diff; closest = pt; }
      }

      const yOfP = PAD.top + (1 - (closest.p - pMin) / (pMax - pMin)) * cH;
      const xOfT = PAD.left + ((closest.t.getTime() - tMin) / tSpan) * cW;

      scrubCursor.style.opacity = "1";
      scrubLine.setAttribute("x1", xOfT.toFixed(1));
      scrubLine.setAttribute("x2", xOfT.toFixed(1));
      scrubDot.setAttribute("cx", xOfT.toFixed(1));
      scrubDot.setAttribute("cy", yOfP.toFixed(1));
      if (scrubDotHalo) {
        scrubDotHalo.setAttribute("cx", xOfT.toFixed(1));
        scrubDotHalo.setAttribute("cy", yOfP.toFixed(1));
      }

      const tipX = Math.max(PAD.left + 40, Math.min(PAD.left + cW - 40, xOfT));
      const tipY = Math.max(PAD.top + 10, yOfP - 18);
      scrubTip.setAttribute("transform", `translate(${tipX.toFixed(1)}, ${tipY.toFixed(1)})`);
      if (scrubTipTxt) scrubTipTxt.textContent = `${closest.p.toFixed(1)} hPa`;

      const now = new Date();
      const diffHours = ((now.getTime() - closest.t.getTime()) / (3600 * 1000)).toFixed(1);
      const timeStr = closest.t.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

      let prStr = "";
      if (prPts.length) {
        let closestPr = prPts[0];
        let prDiff = Infinity;
        for (const pr of prPts) {
          const diff = Math.abs(pr.t.getTime() - targetTime);
          if (diff < prDiff) { prDiff = diff; closestPr = pr; }
        }
        if (closestPr && closestPr.precip > 0) {
          prStr = ` · 💧 ${closestPr.precip.toFixed(0)}%`;
        }
      }

      if (titleEl) {
        titleEl.innerHTML = `<span style="color:#FFD54F">⏱ ${timeStr} (-${diffHours}h): <b>${closest.p.toFixed(1)} hPa</b>${prStr}</span>`;
      }
    };

    const handleLeave = () => {
      scrubCursor.style.opacity = "0";
      if (titleEl) titleEl.innerHTML = defaultTitle;
    };

    svg.onmousemove = handleMove;
    svg.onmouseleave = handleLeave;
    svg.ontouchmove = (e) => { e.preventDefault(); handleMove(e); };
    svg.ontouchend = handleLeave;
  }

  // ── Patch only the timeline strip without full rebuild ──────────────────
  /** Re-renders only the forecast trend timeline strip without a full card rebuild. */
  _patchTimeline() {
    const wrap = this.shadowRoot?.querySelector(".trend-timeline-wrap");
    if (!wrap) {
      this._rendered = false;
      this._render();
      return;
    }
    const L = this._labels();
    wrap.innerHTML = forecastTimeline(this._timelineSteps, L, !!this._config.compact);
  }

  /** Subscribes to events on mount (idempotent across DOM moves). */
  connectedCallback() {
    if (!this._visibilityHandler) {
      this._visibilityHandler = () => {
        if (typeof document !== "undefined" && !document.hidden && this._historyFetchPending) {
          this._historyFetchPending = false;
          this._scheduleHistoryFetch();
        }
      };
    }
    if (typeof document !== "undefined") {
      document.removeEventListener("visibilitychange", this._visibilityHandler);
      document.addEventListener("visibilitychange", this._visibilityHandler);
    }
  }

  /** Cleans up event listeners on unmount. */
  disconnectedCallback() {
    if (this._visibilityHandler && typeof document !== "undefined") {
      document.removeEventListener("visibilitychange", this._visibilityHandler);
    }
  }

  /** Returns the current state string of a HA entity, or null if unavailable. */
  _state(id)              { return this._hass?.states?.[id]?.state ?? null; }
  /** Returns a specific attribute of a HA entity, or the fallback value. */
  _attr(id, key, fallback){ return this._hass?.states?.[id]?.attributes?.[key] ?? fallback; }

  /** Returns true when a raw HA state is missing, unknown, or unavailable. */
  _isUnavailable(raw) {
    return raw == null || raw === "" || raw === "unavailable" || raw === "unknown";
  }

  /** Localizes a sensor state, delegating unavailable/unknown to Home Assistant when primary=true. */
  _localizeState(raw, L, primary = false) {
    if (this._isUnavailable(raw)) {
      if (!primary) return "—";
      const key = raw === "unknown" ? "unknown" : "unavailable";
      return this._hass?.localize?.(`state.default.${key}`) || (key === "unknown" ? "Unknown" : "Unavailable");
    }
    return L[raw] || raw;
  }

  /** Reads current sea-level or station pressure in hPa, or null when unavailable. */
  _readPressureHpa() {
    const cfg = this._config;
    const zRaw = this._state(cfg.entity_zambretti);
    if (!this._isUnavailable(zRaw)) {
      const attrVal = this._attr(cfg.entity_zambretti, "pressure_hpa", null);
      if (attrVal != null) {
        const parsed = parseFloat(attrVal);
        if (!Number.isNaN(parsed)) return parsed;
      }
    }
    if (cfg.entity_pressure) {
      const pRaw = this._state(cfg.entity_pressure);
      if (!this._isUnavailable(pRaw)) {
        const unit = this._attr(cfg.entity_pressure, "unit_of_measurement", "hPa");
        return normalizePressureToHpa(pRaw, unit);
      }
    }
    return null;
  }

  /** Reads precipitation probability (0-100), or null when unavailable. */
  _readPrecipPct() {
    const raw = this._state(this._config.entity_precip);
    if (this._isUnavailable(raw)) return null;
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) return null;
    return Math.max(0, Math.min(100, parsed));
  }

  /** Returns the resolved i18n label map for the configured language. */
  _labels() {
    return getLabels(this._config.language || "auto", this._hass?.language || "en");
  }

  /** Returns the localized vintage barometer labels map. */
  _vintageLabels() {
    return getVintageLabels(this._config.language || "auto", this._hass?.language || "en");
  }

  /** Returns the localized label for the precipitation indicator. */
  _precipLabel() {
    return getPrecipLabel(this._config.language || "auto", this._hass?.language || "en");
  }

  /** Computes the card theme background consistently for both _render and _patch. */
  _computeThemeBg(condThemeKey, isVintage) {
    const cfg = this._config;
    if (isVintage && !cfg.custom_bg) {
      return "radial-gradient(circle at 50% 25%, #2d1f14 0%, #19110a 55%, #0d0805 100%)";
    }
    const autoTheme = cfg.auto_theme !== false;
    const baseBg = autoTheme ? (getTheme(condThemeKey).bg) : (cfg.custom_bg || DEFAULT_THEME.bg);
    return autoTheme ? applyAlpha(baseBg, cfg.theme_alpha) : baseBg;
  }

  /** Performs a full shadow DOM rebuild of the card. Called on first render or after a condition/theme change. */
  _render() {
    if (!this._hass) return;
    const cfg = this._config;
    const L   = this._labels();
    const compact = !!cfg.compact;
    const isVintage = cfg.card_style === "vintage";
    const isTile = cfg.card_style === "tile";

    // Core sensor states
    const zState    = this._state(cfg.entity_zambretti);
    const isUnavail = this._isUnavailable(zState);
    const sState    = this._state(cfg.entity_sager);
    const s6h       = this._state(cfg.entity_6h);
    const s12h      = this._state(cfg.entity_12h);
    const s24h      = this._state(cfg.entity_24h);
    const precip    = this._readPrecipPct();
    const precipTxt = precip != null ? `${precip}%` : "—";

    // Night / icon selection
    const isNight    = this._attr(cfg.entity_zambretti, "is_night", false);
    const iconKey    = getWeatherIconKey(zState, isNight);
    const condThemeKey = (isNight && (zState === "settled_fine" || zState === "fine_weather"))
      ? "night_clear" : (ZAMBRETTI_CONDITION[zState] || "partlycloudy");

    // Wind — optional; prefer dedicated sensor, fall back to main sensor attribute
    const showWind = cfg.show_wind !== false;
    const windSpeedEntityId = cfg.entity_wind_speed || cfg.entity_zambretti;
    let windStr = "";
    if (showWind) {
      const windSpeedRaw = cfg.entity_wind_speed
        ? this._state(cfg.entity_wind_speed)
        : (isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_speed", null));
      // Read the sensor's native unit so we don't double-convert
      const sensorWindUnit = this._attr(windSpeedEntityId, "unit_of_measurement", "m/s");
      const windDeg = isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_degrees", null);
      const windDir = (isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_direction", null)) || degToCompass(windDeg);
      const windFormatted = formatWind(windSpeedRaw, cfg.wind_unit || "m/s", sensorWindUnit);
      windStr = windFormatted
        ? (windDir ? `${windDir} ${windFormatted}` : windFormatted)
        : windDir || "";
    }

    // Theme
    const themeBg = this._computeThemeBg(condThemeKey, isVintage);
    const theme = { bg: themeBg };

    const zLabel = this._localizeState(zState, L, true);
    const sLabel = this._localizeState(sState, L, false);
    const icon   = renderWeatherIconSvg(iconKey, zLabel);

    const precipLabel = this._precipLabel();

    const showPrecip    = cfg.show_precip    !== false;
    const showForecasts = cfg.show_forecasts !== false;
    const showSager     = cfg.show_sager     !== false;
    const showHistory   = !!cfg.show_history;
    const showTrend     = !!cfg.show_trend;

    const fCells = [
      {label:"6h",  key:s6h,  entityId: cfg.entity_6h},
      {label:"12h", key:s12h, entityId: cfg.entity_12h},
      {label:"24h", key:s24h, entityId: cfg.entity_24h},
    ].map(f => {
      const fLabel = this._localizeState(f.key, L, false);
      const fIcon = renderWeatherIconSvg(ZAMBRETTI_CONDITION[f.key] || "partlycloudy", `${f.label}: ${fLabel}`);
      return `
      <div class="fc" ${this._moreInfoAttrs(f.entityId)}>
        <span class="fc-time">${escapeHtml(f.label)}</span>
        <span class="fc-icon">${fIcon}</span>
        <span class="fc-lbl">${escapeHtml(fLabel)}</span>
      </div>`;
    }).join("");

    const pressureMoreInfo = this._moreInfoAttrs(cfg.entity_pressure || cfg.entity_zambretti);

    let mainCardBody = "";
    if (isTile) {
      const pNow = this._readPressureHpa();
      const delta3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_delta_3h", null);
      const delta3h = delta3hRaw != null && !Number.isNaN(parseFloat(delta3hRaw)) ? parseFloat(delta3hRaw) : null;
      const trendLabel = isUnavail ? "—" : this._attr(cfg.entity_zambretti, "trend", "→ Steady");
      const trendDotColor = delta3h == null ? "#94a3b8" : (delta3h >= 1.4 ? "#4ade80" : delta3h <= -1.4 ? "#f87171" : "#facc15");
      const trendBadgeColor = delta3h == null ? "#cbd5e1" : (delta3h >= 1.4 ? "#86efac" : delta3h <= -1.4 ? "#fca5a5" : "#fef08a");

      mainCardBody = `
        <div class="tile-container">
          <div class="tile-header-wrap">
            <div class="tile-icon-box" ${this._moreInfoAttrs(cfg.entity_zambretti)}>${icon}</div>
            <div class="tile-text-group">
              <div class="tile-title" ${this._moreInfoAttrs(cfg.entity_zambretti)}>${escapeHtml(zLabel)}</div>
              ${showSager ? `<div class="tile-subtitle" ${this._moreInfoAttrs(cfg.entity_sager)}>${escapeHtml(sLabel)}</div>` : ""}
            </div>
            <div class="tile-trend-pill">
              <span class="tile-trend-dot" style="background:${trendDotColor}"></span>
              <span class="tile-trend-text" style="color:${trendBadgeColor}">${escapeHtml(trendLabel)}</span>
            </div>
          </div>
          <div class="tile-bottom-chips">
            <div class="tile-chips-left">
              ${showPrecip ? `<span class="tile-chip tile-chip-precip" ${this._moreInfoAttrs(cfg.entity_precip)}>💧 ${escapeHtml(precipTxt)}</span>` : ""}
              ${showWind && windStr ? `<span class="tile-chip tile-chip-wind" ${this._moreInfoAttrs(windSpeedEntityId)}>💨 ${escapeHtml(windStr)}</span>` : ""}
            </div>
            <span class="tile-chip tile-chip-pressure" ${pressureMoreInfo}>⏱ ${pNow != null ? `${pNow.toFixed(1)} hPa` : "—"}</span>
          </div>
        </div>
      `;
    } else if (isVintage) {
      const VL = this._vintageLabels();
      const pNow = this._readPressureHpa();
      const p3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_3h_ago", null);
      const delta3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_delta_3h", null);
      const delta3h = delta3hRaw != null && !Number.isNaN(parseFloat(delta3hRaw)) ? parseFloat(delta3hRaw) : null;
      const pDial = pNow ?? 1013.25;
      const deltaDial = delta3h ?? 0.0;
      const p3h = p3hRaw != null && !Number.isNaN(parseFloat(p3hRaw)) ? parseFloat(p3hRaw) : (pDial - deltaDial);
      const trendLabel = isUnavail ? "—" : this._attr(cfg.entity_zambretti, "trend", "→ Steady");

      const dialSvg = vintageBarometerDial(pDial, p3h, deltaDial, VL, {
        showSubdial: cfg.show_subdial !== false,
        compact,
      });

      const trendColor = delta3h == null ? "#cbd5e1" : (delta3h >= 1.4 ? "#86efac" : delta3h <= -1.4 ? "#fca5a5" : "#fef08a");

      mainCardBody = `
        <div class="vintage-container">
          <div class="vintage-dial-wrap" ${pressureMoreInfo}>${dialSvg}</div>
          <div class="vintage-readout">
            <div class="vintage-main-bar">
              <div class="vintage-forecast-title" ${this._moreInfoAttrs(cfg.entity_zambretti)}>${escapeHtml(zLabel)}</div>
              ${showSager ? `<div class="vintage-sager-sub" ${this._moreInfoAttrs(cfg.entity_sager)}><span class="vintage-badge">Sager</span> <span class="v-sager-lbl">${escapeHtml(sLabel)}</span></div>` : ""}
            </div>
            <div class="vintage-metrics-grid">
              <div class="vintage-metric-box" ${pressureMoreInfo}>
                <div class="vintage-metric-lbl">${escapeHtml(VL.current || "Current")}</div>
                <div class="vintage-metric-val v-p-hpa">${pNow != null ? `${pNow.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>` : "—"}</div>
                <div class="vintage-metric-sub v-p-mm">${pNow != null ? (pNow * 0.750062).toFixed(1) + " mmHg" : ""}</div>
              </div>
              <div class="vintage-metric-box">
                <div class="vintage-metric-lbl">${escapeHtml(VL.trend || "Trend")} (3h)</div>
                <div class="vintage-metric-val v-trend-delta" style="color:${trendColor}">${delta3h != null ? (delta3h >= 0 ? "+" : "") + delta3h.toFixed(1) + " hPa" : "—"}</div>
                <div class="vintage-metric-sub v-trend-lbl">${escapeHtml(trendLabel)}</div>
              </div>
            </div>
          </div>
        </div>
        ${showForecasts ? `<div class="cell forecast-row" style="border-top:1px solid rgba(212,175,55,0.20)">${fCells}</div>` : ""}
        <div class="footer" style="border-top:1px solid rgba(212,175,55,0.20)">
          ${windStr ? `<span class="footer-wind" ${this._moreInfoAttrs(windSpeedEntityId)}>💨 ${escapeHtml(windStr)}</span>` : ""}
          ${showPrecip ? `<span class="footer-precip" ${this._moreInfoAttrs(cfg.entity_precip)}>💧 ${escapeHtml(precipLabel)}: ${escapeHtml(precipTxt)}</span>` : ""}
        </div>
      `;
    } else {
      const gridCols = showPrecip ? "1fr 1fr" : "1fr";
      mainCardBody = `
        <div class="grid" style="grid-template-columns:${gridCols}">
          <div class="cell main-cell" ${this._moreInfoAttrs(cfg.entity_zambretti)}>
            <div class="main-icon">${icon}</div>
            <div class="main-info">
              <div class="main-label">${escapeHtml(zLabel)}</div>
              <div class="main-sub">Zambretti</div>
            </div>
          </div>
          ${showPrecip ? `
          <div class="cell precip-cell" ${this._moreInfoAttrs(cfg.entity_precip)}>
            <div class="precip-title">${escapeHtml(precipLabel)}</div>
            <div class="precip-widget">${precipWidget(precip, precipLabel)}</div>
          </div>` : ""}
          ${showForecasts ? `
          <div class="cell forecast-row">${fCells}</div>` : ""}
        </div>
        <div class="footer">
          ${windStr ? `<span class="footer-wind" ${this._moreInfoAttrs(windSpeedEntityId)}>💨 ${escapeHtml(windStr)}</span>` : ""}
          ${showSager ? `
          <span class="footer-badge">Sager</span>
          <span class="footer-text" ${this._moreInfoAttrs(cfg.entity_sager)}>${escapeHtml(sLabel)}</span>` : ""}
        </div>
      `;
    }

    // Full rebuild
    this.shadowRoot.innerHTML = `
      <style>${this._css(theme, compact, showPrecip, isVintage, isTile)}</style>
      <ha-card class="${isUnavail ? "is-unavailable" : ""}">
        ${mainCardBody}
        ${showTrend ? `
        <div class="trend-section">
          <div class="trend-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="4" x2="8" y2="8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="8.5" x2="11" y2="10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Trend</div>
          <div class="trend-timeline-wrap">${forecastTimeline(this._timelineSteps, L, compact)}</div>
        </div>` : ""}
        ${showHistory ? `
        <div class="history-section">
          <div class="history-title"><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style="vertical-align:-1px;margin-right:4px;opacity:0.7"><polyline points="1,12 5,6 8,9 11,4 15,7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>24h</div>
          <div class="history-chart-wrap" style="height:${compact ? 150 : 200}px">${historyChart(this._historyPoints, L, compact)}</div>
        </div>` : ""}
      </ha-card>`;

    const cardEl = this.shadowRoot.querySelector("ha-card");
    if (cardEl) {
      cardEl.style.background = theme.bg;
    }

    if (showHistory) {
      this._setupHistoryScrubbing();
    }

    // Save state for patch
    this._lastIconKey    = iconKey;
    this._lastThemeBg    = theme.bg;
    this._lastPrecip     = precip;
    this._lastStyle      = cfg.card_style;
    this._lastUnavail    = isUnavail;
    this._rendered       = true;
  }

  // ── Lightweight patch: update only text/values without touching SVG ──────
  /**
   * Updates only dynamic text nodes and the precip gauge without rebuilding the SVG.
   * Falls back to a full _render() if the icon, availability, or theme background changed.
   */
  _patch() {
    if (!this._hass || !this._rendered) return;
    const cfg = this._config;
    const L   = this._labels();
    const sr  = this.shadowRoot;
    const isVintage = cfg.card_style === "vintage";
    const isTile = cfg.card_style === "tile";

    const zState    = this._state(cfg.entity_zambretti);
    const isUnavail = this._isUnavailable(zState);
    const sState    = this._state(cfg.entity_sager);
    const s6h       = this._state(cfg.entity_6h);
    const s12h      = this._state(cfg.entity_12h);
    const s24h      = this._state(cfg.entity_24h);
    const precip    = this._readPrecipPct();
    const precipTxt = precip != null ? `${precip}%` : "—";

    const isNight      = this._attr(cfg.entity_zambretti, "is_night", false);
    const iconKey      = getWeatherIconKey(zState, isNight);
    const condThemeKey = (isNight && (zState === "settled_fine" || zState === "fine_weather"))
      ? "night_clear" : (ZAMBRETTI_CONDITION[zState] || "partlycloudy");

    // If icon, theme, availability, or card style changed — full rebuild
    const themeBg = this._computeThemeBg(condThemeKey, isVintage);
    if (
      iconKey !== this._lastIconKey ||
      themeBg !== this._lastThemeBg ||
      cfg.card_style !== this._lastStyle ||
      isUnavail !== this._lastUnavail
    ) {
      this._rendered = false;
      this._render();
      return;
    }

    // Patch labels
    const zLabel = this._localizeState(zState, L, true);
    const sLabel = this._localizeState(sState, L, false);

    const mainLabel = sr.querySelector(".main-label");
    if (mainLabel && mainLabel.textContent !== zLabel) mainLabel.textContent = zLabel;
    const mainIconSvg = sr.querySelector(".main-icon svg, .tile-icon-box svg");
    if (mainIconSvg && mainIconSvg.getAttribute("aria-label") !== zLabel) {
      mainIconSvg.setAttribute("aria-label", zLabel);
    }

    const footerText = sr.querySelector(".footer-text");
    if (footerText && footerText.textContent !== sLabel) footerText.textContent = sLabel;

    // Patch wind
    const showWind = cfg.show_wind !== false;
    let windStr = "";
    if (showWind) {
      const windSpeedEntityId = cfg.entity_wind_speed || cfg.entity_zambretti;
      const windSpeedRaw = cfg.entity_wind_speed
        ? this._state(cfg.entity_wind_speed)
        : (isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_speed", null));
      // Read the sensor's native unit so we don't double-convert
      const sensorWindUnit = this._attr(windSpeedEntityId, "unit_of_measurement", "m/s");
      const windDeg = isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_degrees", null);
      const windDir = (isUnavail ? null : this._attr(cfg.entity_zambretti, "wind_direction", null)) || degToCompass(windDeg);
      const windFormatted = formatWind(windSpeedRaw, cfg.wind_unit || "m/s", sensorWindUnit);
      windStr = windFormatted
        ? (windDir ? `${windDir} ${windFormatted}` : windFormatted)
        : windDir || "";
    }
    const footerWind = sr.querySelector(".footer-wind");
    if (footerWind) {
      const newWind = windStr ? `💨 ${windStr}` : "";
      if (footerWind.textContent !== newWind) footerWind.textContent = newWind;
      footerWind.style.display = (showWind && windStr) ? "" : "none";
    }

    // Tile specific patch
    if (isTile) {
      const pNow = this._readPressureHpa();
      const delta3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_delta_3h", null);
      const delta3h = delta3hRaw != null && !Number.isNaN(parseFloat(delta3hRaw)) ? parseFloat(delta3hRaw) : null;
      const trendLabel = isUnavail ? "—" : this._attr(cfg.entity_zambretti, "trend", "→ Steady");
      const trendDotColor = delta3h == null ? "#94a3b8" : (delta3h >= 1.4 ? "#4ade80" : delta3h <= -1.4 ? "#f87171" : "#facc15");
      const trendBadgeColor = delta3h == null ? "#cbd5e1" : (delta3h >= 1.4 ? "#86efac" : delta3h <= -1.4 ? "#fca5a5" : "#fef08a");

      const tileTitle = sr.querySelector(".tile-title");
      if (tileTitle && tileTitle.textContent !== zLabel) tileTitle.textContent = zLabel;

      const tileSub = sr.querySelector(".tile-subtitle");
      if (tileSub && tileSub.textContent !== sLabel) tileSub.textContent = sLabel;

      const tileTrendDot = sr.querySelector(".tile-trend-dot");
      if (tileTrendDot) tileTrendDot.style.background = trendDotColor;

      const tileTrendText = sr.querySelector(".tile-trend-text");
      if (tileTrendText) {
        if (tileTrendText.textContent !== trendLabel) tileTrendText.textContent = trendLabel;
        tileTrendText.style.color = trendBadgeColor;
      }

      const tilePrecip = sr.querySelector(".tile-chip-precip");
      if (tilePrecip) tilePrecip.textContent = `💧 ${precipTxt}`;

      const tileWind = sr.querySelector(".tile-chip-wind");
      if (tileWind) {
        tileWind.textContent = windStr ? `💨 ${windStr}` : "";
        tileWind.style.display = (showWind && windStr) ? "" : "none";
      }

      const tilePress = sr.querySelector(".tile-chip-pressure");
      if (tilePress) tilePress.textContent = `⏱ ${pNow != null ? `${pNow.toFixed(1)} hPa` : "—"}`;
    }

    // Vintage specific patch
    if (isVintage) {
      const pNow = this._readPressureHpa();
      const p3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_3h_ago", null);
      const delta3hRaw = isUnavail ? null : this._attr(cfg.entity_zambretti, "pressure_delta_3h", null);
      const delta3h = delta3hRaw != null && !Number.isNaN(parseFloat(delta3hRaw)) ? parseFloat(delta3hRaw) : null;
      const pVal = pNow ?? 1013.25;
      const deltaVal = delta3h ?? 0.0;
      const p3hVal = p3hRaw != null && !Number.isNaN(parseFloat(p3hRaw)) ? parseFloat(p3hRaw) : (pVal - deltaVal);
      const trendLabel = isUnavail ? "—" : this._attr(cfg.entity_zambretti, "trend", "→ Steady");

      const mainAngle = -120 + ((Math.max(960, Math.min(1060, pVal)) - 960) / 100) * 240;
      const refAngle = -120 + ((Math.max(960, Math.min(1060, p3hVal)) - 960) / 100) * 240;
      const trendAngle = (Math.max(-4, Math.min(4, deltaVal)) / 4) * 45;

      const needleMain = sr.querySelector(".v-needle-main");
      if (needleMain) needleMain.style.transform = `rotate(${mainAngle.toFixed(1)}deg)`;

      const needleRef = sr.querySelector(".v-needle-ref");
      if (needleRef) needleRef.style.transform = `rotate(${refAngle.toFixed(1)}deg)`;

      const needleTrend = sr.querySelector(".v-needle-trend");
      if (needleTrend) needleTrend.style.transform = `rotate(${trendAngle.toFixed(1)}deg)`;

      const fTitle = sr.querySelector(".vintage-forecast-title");
      if (fTitle && fTitle.textContent !== zLabel) fTitle.textContent = zLabel;

      const vSagerLbl = sr.querySelector(".v-sager-lbl");
      if (vSagerLbl && vSagerLbl.textContent !== sLabel) vSagerLbl.textContent = sLabel;

      const vpHpa = sr.querySelector(".v-p-hpa");
      if (vpHpa) {
        vpHpa.innerHTML = pNow != null
          ? `${pNow.toFixed(1)} <span style="font-size:0.75em;font-weight:400;color:#d4af37">hPa</span>`
          : "—";
      }

      const vpMm = sr.querySelector(".v-p-mm");
      if (vpMm) vpMm.textContent = pNow != null ? `${(pNow * 0.750062).toFixed(1)} mmHg` : "";

      const vTrendDelta = sr.querySelector(".v-trend-delta");
      if (vTrendDelta) {
        vTrendDelta.textContent = delta3h != null ? `${delta3h >= 0 ? "+" : ""}${delta3h.toFixed(1)} hPa` : "—";
        vTrendDelta.style.color = delta3h == null ? "#cbd5e1" : (delta3h >= 1.4 ? "#86efac" : delta3h <= -1.4 ? "#fca5a5" : "#fef08a");
      }

      const vTrendLbl = sr.querySelector(".v-trend-lbl");
      if (vTrendLbl) vTrendLbl.textContent = trendLabel;

      const precipLabel = this._precipLabel();
      const footPrecip = sr.querySelector(".footer-precip");
      if (footPrecip) footPrecip.textContent = `💧 ${precipLabel}: ${precipTxt}`;
    }

    // Patch forecast labels (not icons — same condition type usually)
    const fcLabels = sr.querySelectorAll(".fc-lbl");
    const fKeys = [s6h, s12h, s24h];
    fcLabels.forEach((el, i) => {
      const lbl = this._localizeState(fKeys[i], L, false);
      if (el.textContent !== lbl) el.textContent = lbl;
    });

    // Patch precip gauge only if value changed (in modern view)
    if (precip !== this._lastPrecip) {
      const pw = sr.querySelector(".precip-widget");
      if (pw) pw.innerHTML = precipWidget(precip, this._precipLabel());
      this._lastPrecip = precip;
    }

    // Patch timeline: if current zambretti state changed, append new step and re-render strip
    if (cfg.show_trend && this._timelineSteps) {
      const lastStep = this._timelineSteps[this._timelineSteps.length - 1];
      if (!isUnavail && lastStep && lastStep.state !== zState) {
        // Clear isCurrent from previous last step
        this._timelineSteps.forEach(s => { s.isCurrent = false; });
        this._timelineSteps.push({ t: new Date(), state: zState, isCurrent: true });
        if (this._timelineSteps.length > 8) this._timelineSteps.shift();
        this._patchTimeline();
      }
    }

    // If chart or timeline were previously showing empty state and we now have data, patch them
    if (cfg.show_history && this._historyPoints && this._historyPoints.length >= 2) {
      const emptyChart = sr.querySelector(".hchart-empty");
      if (emptyChart) this._patchChart();
    }
    if (cfg.show_trend && this._timelineSteps && this._timelineSteps.length > 0) {
      const emptyTl = sr.querySelector(".tl-empty");
      if (emptyTl) this._patchTimeline();
    }
  }

  /**
   * Returns the Shadow DOM CSS string. Scales font/icon sizes for compact mode.
   * @param {object} theme  Current theme object with .bg
   * @param {boolean} compact
   * @param {boolean} showPrecip
   * @param {boolean} isVintage
   * @param {boolean} isTile
   * @returns {string}
   */
  _css(theme, compact, showPrecip = true, isVintage = false, isTile = false) {
    const s        = compact ? 0.82 : 1;
    const iconSz   = Math.round(72 * s);
    const mainFsz  = (1.15 * s).toFixed(2);
    const subFsz   = (0.72 * s).toFixed(2);
    const fcIconSz = Math.round(42 * s);
    const footFsz  = (0.80 * s).toFixed(2);
    const precipSz = Math.round(118 * s);
    const precipTSz= (0.75 * s).toFixed(2);
    const pad      = compact ? "12px 10px" : "16px 14px";

    return `
      :host { display:block; }
      ha-card {
        border-radius:22px; overflow:hidden;
        box-shadow:0 8px 36px rgba(0,0,0,0.30);
        font-family:var(--primary-font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif);
        color:#fff; padding:0; border:none;
      }
      .grid {
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:auto auto;
      }
      .cell { padding:${pad}; }

      .main-cell {
        grid-column:1; grid-row:1;
        display:flex; align-items:center;
        gap:${compact ? 10 : 13}px;
        border-right:1px solid rgba(255,255,255,0.12);
        border-bottom:1px solid rgba(255,255,255,0.12);
      }
      .main-icon {
        flex:0 0 ${iconSz}px; width:${iconSz}px; height:${iconSz}px;
        filter:drop-shadow(0 2px 8px rgba(0,0,0,0.35));
      }
      .main-icon svg { width:100%; height:100%; }
      .main-info { flex:1; min-width:0; }
      .main-label {
        font-size:${mainFsz}rem; font-weight:700; line-height:1.25;
        letter-spacing:-0.01em; text-shadow:0 1px 6px rgba(0,0,0,0.35);
      }
      .main-sub {
        font-size:${subFsz}rem; font-weight:600;
        letter-spacing:0.08em; text-transform:uppercase;
        opacity:0.58; margin-top:4px;
      }

      .precip-cell {
        grid-column:2; grid-row:1;
        display:flex; flex-direction:column;
        align-items:center; justify-content:center; gap:2px;
        border-bottom:1px solid rgba(255,255,255,0.12);
        padding:${compact ? "10px 6px" : "12px 8px"};
      }
      .precip-title {
        font-size:${precipTSz}rem; font-weight:800;
        letter-spacing:0.12em; text-transform:uppercase;
        text-shadow:0 1px 4px rgba(0,0,0,0.35);
      }
      .precip-widget { width:${precipSz}px; height:${precipSz}px; }

      /* ── Tile / Mushroom View Mode ── */
      .tile-container {
        display:flex; flex-direction:column; justify-content:space-between;
        padding:${compact ? "12px 14px" : "16px 18px"};
        box-sizing:border-box;
        background:linear-gradient(145deg, rgba(15, 23, 42, 0.52) 0%, rgba(15, 23, 42, 0.74) 100%);
        backdrop-filter:blur(18px); -webkit-backdrop-filter:blur(18px);
        border:1px solid rgba(255, 255, 255, 0.16);
        border-radius:22px;
        box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.14), 0 8px 32px rgba(0, 0, 0, 0.25);
        min-height:${compact ? "110px" : "130px"};
      }
      .tile-header-wrap {
        display:flex; align-items:center; justify-content:space-between;
        gap:${compact ? 10 : 14}px;
      }
      .tile-icon-box {
        width:${compact ? "42px" : "50px"}; height:${compact ? "42px" : "50px"};
        flex-shrink:0;
        border-radius:16px;
        background:rgba(255, 255, 255, 0.12);
        border:1px solid rgba(255, 255, 255, 0.20);
        display:flex; align-items:center; justify-content:center;
        padding:4px;
        box-shadow:0 4px 12px rgba(0,0,0,0.15);
        filter:drop-shadow(0 2px 6px rgba(0,0,0,0.30));
      }
      .tile-icon-box svg { width:100%; height:100%; display:block; }
      .tile-text-group {
        flex:1; min-width:0;
      }
      .tile-title {
        font-size:${(1.12*s).toFixed(2)}rem; font-weight:700;
        line-height:1.22; letter-spacing:-0.015em;
        color:#ffffff;
        text-shadow:0 1px 4px rgba(0,0,0,0.45);
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
      }
      .tile-subtitle {
        font-size:${(0.74*s).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.85); margin-top:2px;
        line-height:1.25;
        white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        text-shadow:0 1px 3px rgba(0,0,0,0.35);
      }
      .tile-trend-pill {
        font-size:${(0.70*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.02em; border-radius:20px;
        padding:4px 10px; border:1px solid rgba(255,255,255,0.20);
        background:rgba(0, 0, 0, 0.42);
        white-space:nowrap; flex-shrink:0;
        display:inline-flex; align-items:center; gap:5px;
        box-shadow:0 2px 6px rgba(0,0,0,0.20);
      }
      .tile-trend-dot {
        width:7px; height:7px; border-radius:50%; flex-shrink:0;
      }
      .tile-bottom-chips {
        display:flex; align-items:center; justify-content:space-between;
        margin-top:${compact ? 8 : 12}px; padding-top:${compact ? 6 : 8}px;
        border-top:1px solid rgba(255,255,255,0.12);
        gap:8px; flex-wrap:wrap;
      }
      .tile-chips-left {
        display:flex; align-items:center; gap:6px; flex-wrap:wrap;
      }
      .tile-chip {
        font-size:${(0.74*s).toFixed(2)}rem; font-weight:700;
        padding:3px 9px; border-radius:12px;
        display:inline-flex; align-items:center; gap:4px;
        box-shadow:0 2px 6px rgba(0,0,0,0.15);
      }
      .tile-chip-precip {
        background:rgba(14, 165, 233, 0.22);
        border:1px solid rgba(56, 189, 248, 0.35);
        color:#bae6fd;
      }
      .tile-chip-wind {
        background:rgba(255, 255, 255, 0.10);
        border:1px solid rgba(255, 255, 255, 0.16);
        color:#f1f5f9;
      }
      .tile-chip-pressure {
        background:rgba(0, 0, 0, 0.35);
        border:1px solid rgba(255, 255, 255, 0.20);
        color:#ffffff; font-family:monospace;
      }

      /* ── Vintage Barometer Mode ── */
      .vintage-container {
        display:flex; flex-direction:column; align-items:center;
        padding:${compact ? "12px 10px 8px" : "16px 14px 10px"};
        box-sizing:border-box;
      }
      .vintage-dial-wrap {
        position:relative;
        width:100%; max-width:${compact ? "280px" : "330px"};
        aspect-ratio:1 / 1;
        display:flex; align-items:center; justify-content:center;
        filter:drop-shadow(0 14px 28px rgba(0,0,0,0.65)) drop-shadow(0 2px 6px rgba(0,0,0,0.40));
        margin:0 auto;
      }
      .vintage-dial-svg {
        width:100%; height:100%; display:block;
      }
      .v-needle-main, .v-needle-ref, .v-needle-trend {
        transition: transform 0.85s cubic-bezier(0.34, 1.35, 0.64, 1);
      }
      .vintage-readout {
        width:100%; margin-top:${compact ? "10px" : "14px"};
        display:flex; flex-direction:column; gap:10px;
      }
      .vintage-main-bar {
        background:linear-gradient(180deg, rgba(42, 30, 15, 0.90) 0%, rgba(20, 14, 7, 0.98) 100%);
        border:1px solid rgba(212, 175, 55, 0.40);
        border-radius:14px;
        padding:${compact ? "8px 10px" : "10px 14px"};
        text-align:center;
        box-shadow:inset 0 1px 1px rgba(255, 235, 170, 0.25), 0 4px 16px rgba(0, 0, 0, 0.50);
      }
      .vintage-forecast-title {
        font-family:'Cinzel', Georgia, serif;
        font-size:${(1.16*s).toFixed(2)}rem; font-weight:800;
        color:#ffd966; letter-spacing:0.025em;
        text-shadow:0 2px 6px rgba(0,0,0,0.85), 0 0 12px rgba(255,217,102,0.25);
      }
      .vintage-sager-sub {
        font-size:${(0.76*s).toFixed(2)}rem; font-weight:500;
        color:rgba(254, 243, 199, 0.85);
        margin-top:4px;
        display:flex; align-items:center; justify-content:center; gap:6px;
      }
      .vintage-badge {
        font-size:0.62rem; font-weight:800; letter-spacing:0.10em;
        text-transform:uppercase; background:rgba(255,217,102,0.20);
        border:1px solid rgba(255,217,102,0.45); border-radius:5px;
        padding:1px 6px; color:#ffd966;
      }
      .vintage-metrics-grid {
        display:grid; grid-template-columns:1fr 1fr;
        gap:10px;
      }
      .vintage-metric-box {
        background:linear-gradient(180deg, rgba(35, 25, 12, 0.82) 0%, rgba(16, 11, 5, 0.94) 100%);
        border:1px solid rgba(212, 175, 55, 0.30);
        border-radius:12px;
        padding:8px 10px; text-align:center;
        box-shadow:inset 0 1px 1px rgba(255, 235, 170, 0.15), 0 4px 12px rgba(0, 0, 0, 0.35);
      }
      .vintage-metric-lbl {
        font-family:'Cinzel', Georgia, serif;
        font-size:${(0.66*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:#d4af37; opacity:0.90;
      }
      .vintage-metric-val {
        font-size:${(1.05*s).toFixed(2)}rem; font-weight:800;
        color:#ffffff; margin-top:2px; font-family:monospace;
        text-shadow:0 1px 4px rgba(0,0,0,0.6);
      }
      .vintage-metric-sub {
        font-size:${(0.72*s).toFixed(2)}rem; font-weight:600;
        color:rgba(254, 243, 199, 0.75); margin-top:2px;
      }

      .forecast-row {
        grid-column:1/-1; grid-row:2;
        display:grid; grid-template-columns:1fr 1fr 1fr; padding:0;
      }
      .fc {
        display:flex; flex-direction:column; align-items:center;
        padding:${compact ? "8px 4px 10px" : "10px 6px 14px"};
        border-right:1px solid rgba(255,255,255,0.09); gap:3px;
      }
      .fc:last-child { border-right:none; }
      .fc-time {
        font-size:${(0.82*s).toFixed(2)}rem; font-weight:800;
        letter-spacing:0.06em; text-transform:uppercase;
        color:rgba(255,255,255,0.95);
        background:rgba(255,255,255,0.15); border-radius:5px; padding:1px 7px;
      }
      .fc-icon {
        width:${fcIconSz}px; height:${fcIconSz}px;
        display:flex; align-items:center; justify-content:center; opacity:0.90;
      }
      .fc-icon svg { width:100%; height:100%; }
      .fc-lbl {
        font-size:${(0.96*s).toFixed(2)}rem; font-weight:700;
        text-align:center; line-height:1.25; color:#fff;
        text-shadow:0 1px 3px rgba(0,0,0,0.3);
      }

      .footer {
        display:flex; align-items:center; gap:10px; flex-wrap:wrap;
        padding:${compact ? "6px 12px 8px" : "8px 16px 10px"};
        background:rgba(0,0,0,0.20);
        border-top:1px solid rgba(255,255,255,0.09);
      }
      .footer-wind {
        font-size:${(0.72*s).toFixed(2)}rem; font-weight:600;
        opacity:0.90; letter-spacing:0.04em; white-space:nowrap;
      }
      .footer-badge {
        font-size:0.62rem; font-weight:700; letter-spacing:0.10em;
        text-transform:uppercase; background:rgba(255,255,255,0.16);
        border:1px solid rgba(255,255,255,0.28); border-radius:5px;
        padding:2px 8px; white-space:nowrap; flex-shrink:0;
      }
      .footer-text {
        font-size:${footFsz}rem; font-weight:500; opacity:0.80; line-height:1.3;
      }

      /* ── Trend timeline section ── */
      .trend-section {
        padding:${compact ? "8px 10px 10px" : "10px 14px 12px"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.12);
      }
      .trend-title {
        font-size:${(0.68*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55); margin-bottom:${compact?5:7}px;
      }
      .trend-timeline-wrap { width:100%; overflow-x:auto; }
      .tl-inner {
        display:flex; align-items:center; gap:0;
        min-width:max-content; padding-bottom:2px;
      }
      .tl-step {
        display:flex; flex-direction:column; align-items:center;
        gap:3px; padding:${compact?"3px 6px":"4px 8px"};
        border-radius:10px;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.08);
        transition:background 0.3s;
        min-width:${compact?52:62}px;
      }
      .tl-step.tl-current {
        background:rgba(255,255,255,0.20);
        border-color:rgba(255,255,255,0.35);
        box-shadow:0 0 10px rgba(255,255,255,0.12);
      }
      .tl-icon { flex-shrink:0; }
      .tl-icon svg { width:100%; height:100%; display:block; }
      .tl-lbl {
        font-size:${(0.68*s).toFixed(2)}rem; font-weight:600;
        color:rgba(255,255,255,0.90); text-align:center;
        line-height:1.2; max-width:${compact?52:62}px;
        overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
      }
      .tl-current .tl-lbl { color:#fff; font-weight:700; }
      .tl-time {
        font-size:${(0.60*s).toFixed(2)}rem; font-weight:500;
        color:rgba(255,255,255,0.50); letter-spacing:0.03em;
      }
      .tl-current .tl-time { color:rgba(255,255,255,0.80); }
      .tl-arrow {
        font-size:${compact?"1.1rem":"1.3rem"}; color:rgba(255,255,255,0.30);
        padding:0 ${compact?3:4}px; flex-shrink:0; user-select:none;
        align-self:center; margin-bottom:14px;
      }
      .tl-empty {
        font-size:0.75rem; color:rgba(255,255,255,0.35);
        font-style:italic; padding:8px 0;
      }

      /* ── History chart section ── */
      .history-section {
        padding:${compact ? "8px 0 0" : "10px 0 0"};
        border-top:1px solid rgba(255,255,255,0.09);
        background:rgba(0,0,0,0.15);
        overflow:visible;
      }
      .history-title {
        font-size:${(0.68*s).toFixed(2)}rem; font-weight:700;
        letter-spacing:0.10em; text-transform:uppercase;
        color:rgba(255,255,255,0.55);
        margin-bottom:${compact?2:4}px;
        padding:0 ${compact?"10px":"14px"};
      }
      .history-chart-wrap {
        width:100%;
        /* height is set inline per render to allow live updates */
      }
      .hchart-empty {
        display:flex; align-items:center; justify-content:center;
        height:${compact ? 100 : 130}px;
        font-size:0.80rem; color:rgba(255,255,255,0.35);
        font-style:italic;
      }
      [data-more-info] {
        cursor:pointer;
        border-radius:8px;
        transition:opacity 0.15s ease, background-color 0.15s ease;
      }
      [data-more-info]:hover {
        opacity:0.9;
      }
      [data-more-info]:focus-visible {
        outline:2px solid #ffffff;
        outline-offset:2px;
      }
      ha-card.is-unavailable .main-icon,
      ha-card.is-unavailable .tile-icon-box,
      ha-card.is-unavailable .vintage-dial-wrap,
      ha-card.is-unavailable .fc-icon {
        opacity:0.55;
        filter:grayscale(0.45);
      }
    `;
  }

  getCardSize() {
    const isTile = this._config?.card_style === "tile";
    let sz = isTile ? 2 : 3;
    if (this._config?.show_trend)   sz += 1;
    if (this._config?.show_history) sz += 2;
    return sz;
  }

  getGridOptions() {
    const isTile = this._config?.card_style === "tile";
    let rows = isTile ? 2 : 3;
    if (this._config?.show_trend)   rows += 1;
    if (this._config?.show_history) rows += 2;
    return {
      columns: isTile ? 6 : 12,
      rows: rows,
      min_columns: isTile ? 6 : 6,
      min_rows: isTile ? 1 : 2,
    };
  }
}

// ── Register ──────────────────────────────────────────────────────────────
if (!customElements.get("zambretti-weather-card")) { customElements.define("zambretti-weather-card", ZambrettiWeatherCard); }

window.customCards = window.customCards || [];
if (!window.customCards.some(c => c.type === "zambretti-weather-card")) {
  window.customCards.push({
    type:             "zambretti-weather-card",
    name:             "Zambretti & Sager Weather Card",
    description:      "Weather forecasts (Modern iOS, Vintage Barometer, Compact Tile)",
    preview:          true,
    documentationURL: "https://github.com/meksspirt/zambretti_sager",
  });
}

