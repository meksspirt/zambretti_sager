/**
 * Zambretti & Sager Weather Card Editor
 * Dynamically loaded only when user opens card configuration dialog.
 */

import { LANG_OPTIONS, getEditorStrings } from "./zambretti-card-i18n.js";

const SIBLING_TRANSLATION_KEYS = new Set([
  "sager_forecast",
  "zambretti_forecast_6h",
  "zambretti_forecast_12h",
  "zambretti_forecast_24h",
  "precipitation_probability",
  "last_update",
]);

function escapeHtml(str) {
  if (str == null) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

class ZambrettiWeatherCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._config = {};
    this._rendered = false;
    this._bgRaf = null;
    this._alphaRaf = null;
  }

  disconnectedCallback() {
    if (this._bgRaf) {
      cancelAnimationFrame(this._bgRaf);
      this._bgRaf = null;
    }
    if (this._alphaRaf) {
      cancelAnimationFrame(this._alphaRaf);
      this._alphaRaf = null;
    }
  }

  setConfig(config) {
    const next = { ...config };
    const activeId = this.shadowRoot?.activeElement?.id;
    if (
      this._rendered &&
      (activeId === "bg-color-picker" ||
        activeId === "bg-text" ||
        activeId === "theme-alpha-slider")
    ) {
      const prev = this._config || {};
      const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);
      let onlyLiveFieldsChanged = true;
      for (const k of allKeys) {
        if (k === "custom_bg" || k === "theme_alpha") continue;
        if (prev[k] !== next[k]) {
          onlyLiveFieldsChanged = false;
          break;
        }
      }
      if (onlyLiveFieldsChanged) {
        this._config = next;
        const bgPreview = this.shadowRoot.querySelector("#bg-preview");
        if (bgPreview && next.custom_bg) bgPreview.style.background = next.custom_bg;
        const bgText = this.shadowRoot.querySelector("#bg-text");
        if (bgText && activeId !== "bg-text" && next.custom_bg != null) {
          bgText.value = next.custom_bg;
        }
        const alphaLbl = this.shadowRoot.querySelector("#theme-alpha-lbl");
        if (alphaLbl && next.theme_alpha != null) {
          alphaLbl.textContent = `${next.theme_alpha}%`;
        }
        return;
      }
    }
    this._config = next;
    this._render();
  }

  set hass(h) {
    this._hass = h;
    this._syncPickers();
    if (
      this.shadowRoot?.querySelector("#zambretti-entity-picker") &&
      !this.shadowRoot.querySelector("#zambretti-entity-picker ha-entity-picker")
    ) {
      this._setupZambrettiEntityPicker();
    }
    if (
      this.shadowRoot?.querySelector("#wind-entity-picker") &&
      !this.shadowRoot.querySelector("#wind-entity-picker ha-entity-picker")
    ) {
      this._setupWindEntityPicker();
    }
  }

  _fire(config) {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true,
      })
    );
  }

  _render() {
    const c = this._config;
    const lang = c.language || "auto";
    const hLang = this._hass?.language || "en";
    const t = getEditorStrings(lang, hLang);

    const autoThemeOn = c.auto_theme !== false;
    const themeAlpha = c.theme_alpha ?? 100;
    const showWindOn = c.show_wind !== false;
    const customBg = c.custom_bg || "linear-gradient(135deg,#1565C0 0%,#1976D2 100%)";
    const isSolidColor = /^#[0-9a-fA-F]{3,8}$/.test(customBg.trim());
    const colorInputVal = isSolidColor ? customBg.trim().slice(0, 7) : "#1565C0";
    const windUnit = c.wind_unit || "m/s";

    this.shadowRoot.innerHTML = `
      <style>
        :host{display:block;padding:4px 0 8px}
        .section-title{font-size:0.70rem;font-weight:700;letter-spacing:.10em;
          text-transform:uppercase;color:var(--secondary-text-color);
          margin:16px 0 6px;padding-left:2px}
        .field-row{margin-bottom:10px}
        .field-row label{display:block;font-size:0.82rem;
          color:var(--secondary-text-color);margin-bottom:4px}
        .field-hint{font-size:0.72rem;color:var(--secondary-text-color);margin-top:2px}
        select,input[type=text]{
          width:100%;padding:9px 12px;border-radius:8px;box-sizing:border-box;
          border:1px solid var(--divider-color,rgba(127,127,127,0.3));
          background:var(--ha-card-background,var(--card-background-color,#ffffff));
          color:var(--primary-text-color,#212121);font-size:0.92rem;cursor:pointer}
        .row{display:flex;align-items:center;justify-content:space-between;
          gap:12px;padding:10px 2px;border-bottom:1px solid var(--divider-color,rgba(127,127,127,.18))}
        .row:last-child{border-bottom:none}
        .row-label{font-size:0.95rem;color:var(--primary-text-color,#212121)}
        .row-hint{font-size:0.75rem;color:var(--secondary-text-color);margin-top:2px}
        .custom-bg-row{padding:10px 2px 12px;
          border-bottom:1px solid var(--divider-color,rgba(127,127,127,.18))}
        .bg-inputs{display:flex;gap:8px;align-items:center;margin-top:6px}
        .bg-color-swatch{width:36px;height:36px;border-radius:8px;
          border:2px solid var(--divider-color,rgba(127,127,127,0.35));cursor:pointer;
          flex-shrink:0;overflow:hidden;position:relative}
        .bg-color-swatch input[type=color]{position:absolute;inset:0;
          width:100%;height:100%;border:none;padding:0;cursor:pointer;opacity:0}
        .bg-color-preview{position:absolute;inset:0;border-radius:6px;pointer-events:none}
        .bg-text-input{flex:1;padding:8px 10px;border-radius:8px;
          border:1px solid var(--divider-color,rgba(127,127,127,0.3));
          background:var(--ha-card-background,var(--card-background-color,#ffffff));
          color:var(--primary-text-color,#212121);font-size:0.85rem;font-family:monospace}
      </style>

      <div class="field-row">
        <label>${escapeHtml(t.entityZambretti || "Zambretti sensor")}</label>
        <div id="zambretti-entity-picker"></div>
        <div class="field-hint">${escapeHtml(t.entityZambrettiH || "Main forecast sensor (e.g. sensor.zambretti_forecast)")}</div>
      </div>

      <div class="section-title">${escapeHtml(t.appearance)}</div>

      <div class="field-row">
        <label for="sel-card-style">${escapeHtml(t.cardStyle || "Card Style")}</label>
        <select id="sel-card-style">
          <option value="modern" ${c.card_style !== "vintage" && c.card_style !== "tile" ? "selected" : ""}>${escapeHtml(t.styleModern || "Modern iOS Style")}</option>
          <option value="vintage" ${c.card_style === "vintage" ? "selected" : ""}>${escapeHtml(t.styleVintage || "Vintage Nautical Barometer")}</option>
          <option value="tile" ${c.card_style === "tile" ? "selected" : ""}>${escapeHtml(t.styleTile || "Compact Tile (Mushroom style)")}</option>
        </select>
      </div>

      ${this._toggle("sw-compact", t.compact || "Compact layout", t.compactH || "Smaller padding, fonts, and icons", !!c.compact)}

      ${c.card_style === "vintage" ? `
      ${this._toggle("sw-subdial", t.showSubdial || "Show 3h trend sub-dial", t.showSubdialH || "Auxiliary sub-dial with 3-hour pressure change indicator", c.show_subdial !== false)}
      ` : ""}

      <div class="field-row">
        <label for="sel-lang">${escapeHtml(t.language)}</label>
        <select id="sel-lang">
          ${LANG_OPTIONS.map(([value, label]) => {
            const text = value === "auto" ? t.langAuto : label;
            const selected = lang === value ? "selected" : "";
            return `<option value="${escapeHtml(value)}" ${selected}>${escapeHtml(text)}</option>`;
          }).join("")}
        </select>
      </div>

      ${this._toggle("sw-wind", t.showWind, t.showWindH, showWindOn)}

      ${showWindOn ? `
      <div class="field-row">
        <label>${escapeHtml(t.windEntity)}</label>
        <div id="wind-entity-picker"></div>
        <div class="field-hint">${escapeHtml(t.windEntityH)}</div>
      </div>

      <div class="field-row">
        <label for="sel-wind-unit">${escapeHtml(t.windUnit)}</label>
        <select id="sel-wind-unit">
          <option value="m/s"  ${windUnit === "m/s" ? "selected" : ""}>m/s</option>
          <option value="km/h" ${windUnit === "km/h" ? "selected" : ""}>km/h</option>
          <option value="mph"  ${windUnit === "mph" ? "selected" : ""}>mph</option>
          <option value="kn"   ${windUnit === "kn" ? "selected" : ""}>kn</option>
        </select>
      </div>` : ""}

      ${this._toggle("sw-auto-theme", t.autoTheme, t.autoThemeH, autoThemeOn)}
      ${autoThemeOn ? `
      <div class="custom-bg-row">
        <label class="row-label" for="theme-alpha-slider" style="display:block">${escapeHtml(t.themeAlpha || "Background opacity (Alpha)")}</label>
        <div class="row-hint">${escapeHtml(t.themeAlphaH || "Adjust the transparency of the auto theme background (0–100%)")}</div>
        <div style="display:flex; align-items:center; gap:10px; margin-top:8px;">
          <input type="range" id="theme-alpha-slider" min="0" max="100" value="${escapeHtml(themeAlpha)}" style="flex:1; cursor:pointer;">
          <span id="theme-alpha-lbl" style="font-size:0.85rem; font-family:monospace; width:40px; text-align:right; color:var(--primary-text-color,#212121);">${escapeHtml(themeAlpha)}%</span>
        </div>
      </div>` : ""}
      ${!autoThemeOn ? `
      <div class="custom-bg-row">
        <label class="row-label" for="bg-text" style="display:block">${escapeHtml(t.customBg)}</label>
        <div class="row-hint">${escapeHtml(t.customBgH)}</div>
        <div class="bg-inputs">
          <div class="bg-color-swatch">
            <div class="bg-color-preview" id="bg-preview"></div>
            <input type="color" id="bg-color-picker" aria-label="${escapeHtml(t.customBg)}" value="${escapeHtml(colorInputVal)}">
          </div>
          <input type="text" class="bg-text-input" id="bg-text"
            value="${escapeHtml(customBg)}"
            placeholder="linear-gradient(...) or #hex" spellcheck="false">
        </div>
      </div>` : ""}
      ${this._toggle("sw-sager",     t.showSager,     t.showSagerH,    c.show_sager     !== false)}
      ${this._toggle("sw-precip",    t.showPrecip,    t.showPrecipH,   c.show_precip    !== false)}
      ${this._toggle("sw-forecasts", t.showForecasts, t.showForecastH, c.show_forecasts !== false)}
      ${this._toggle("sw-trend",     t.showTrend    || "Show forecast trend timeline", t.showTrendH    || "Horizontal strip of past Zambretti states with icons and times", !!c.show_trend)}
      ${this._toggle("sw-history",   t.showHistory  || "Show 24h history chart",      t.showHistoryH  || "Pressure & precipitation chart for the last 24 hours",            !!c.show_history)}
    `;

    this._rendered = true;

    const bgPreviewEl = this.shadowRoot.querySelector("#bg-preview");
    if (bgPreviewEl) {
      bgPreviewEl.style.background = customBg;
    }

    const cardStyleSel = this.shadowRoot.querySelector("#sel-card-style");
    if (cardStyleSel) {
      cardStyleSel.addEventListener("change", (e) => {
        this._fire({ ...this._config, card_style: e.target.value });
      });
    }
    this.shadowRoot.querySelector("#sel-lang").addEventListener("change", (e) => {
      this._fire({ ...this._config, language: e.target.value });
    });
    const windUnitSel = this.shadowRoot.querySelector("#sel-wind-unit");
    if (windUnitSel) {
      windUnitSel.addEventListener("change", (e) => {
        this._fire({ ...this._config, wind_unit: e.target.value });
      });
    }
    this._setupZambrettiEntityPicker();
    this._setupWindEntityPicker();
    this.shadowRoot.querySelectorAll("ha-switch[data-key]").forEach((el) => {
      el.addEventListener("change", () => {
        this._fire({ ...this._config, [el.dataset.key]: el.checked });
      });
    });

    const alphaSlider = this.shadowRoot.querySelector("#theme-alpha-slider");
    const alphaLbl = this.shadowRoot.querySelector("#theme-alpha-lbl");
    if (alphaSlider) {
      alphaSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value, 10);
        if (alphaLbl) alphaLbl.textContent = `${val}%`;
        this._config = { ...this._config, theme_alpha: val };
        if (!this._alphaRaf) {
          this._alphaRaf = requestAnimationFrame(() => {
            this._alphaRaf = null;
            this._fire({ ...this._config });
          });
        }
      });
      alphaSlider.addEventListener("change", (e) => {
        if (this._alphaRaf) {
          cancelAnimationFrame(this._alphaRaf);
          this._alphaRaf = null;
        }
        this._fire({ ...this._config, theme_alpha: parseInt(e.target.value, 10) });
      });
    }

    const bgText = this.shadowRoot.querySelector("#bg-text");
    const bgPicker = this.shadowRoot.querySelector("#bg-color-picker");
    const bgPreview = this.shadowRoot.querySelector("#bg-preview");
    if (bgText) {
      bgText.addEventListener("change", (e) => {
        const val = e.target.value.trim();
        if (bgPreview) bgPreview.style.background = val;
        this._fire({ ...this._config, custom_bg: val });
      });
    }
    if (bgPicker) {
      bgPicker.addEventListener("input", (e) => {
        const val = e.target.value;
        if (bgPreview) bgPreview.style.background = val;
        if (bgText) bgText.value = val;
        this._config = { ...this._config, custom_bg: val };
        if (!this._bgRaf) {
          this._bgRaf = requestAnimationFrame(() => {
            this._bgRaf = null;
            this._fire({ ...this._config });
          });
        }
      });
      bgPicker.addEventListener("change", (e) => {
        if (this._bgRaf) {
          cancelAnimationFrame(this._bgRaf);
          this._bgRaf = null;
        }
        const val = e.target.value;
        if (bgPreview) bgPreview.style.background = val;
        if (bgText) bgText.value = val;
        this._fire({ ...this._config, custom_bg: val });
      });
    }
  }

  _setupZambrettiEntityPicker() {
    const container = this.shadowRoot?.querySelector("#zambretti-entity-picker");
    if (!container || !this._hass) return;

    container.innerHTML = "";
    const picker = document.createElement("ha-entity-picker");
    picker.hass = this._hass;
    picker.value = this._config.entity_zambretti || "";
    picker.includeDomains = ["sensor"];
    picker.entityFilter = (stateObj) => {
      const id = stateObj.entity_id;
      const reg = this._hass?.entities?.[id];
      if (reg?.platform === "zambretti_sager") {
        if (reg.translation_key) {
          return reg.translation_key === "zambretti_forecast";
        }
        return !SIBLING_TRANSLATION_KEYS.has(reg.translation_key) &&
               stateObj.attributes?.pressure_sensor != null;
      }
      if (stateObj.attributes?.pressure_sensor != null) {
        return true;
      }
      return (
        (id.includes("zambretti") || id.includes("forecast")) &&
        !id.includes("6h") &&
        !id.includes("12h") &&
        !id.includes("24h")
      );
    };
    picker.allowCustomEntity = true;
    const onPickerChange = (e) => {
      const val = e.detail?.value ?? "";
      this._fire({ ...this._config, entity_zambretti: val || "" });
    };
    picker.addEventListener("value-changed", onPickerChange);
    picker.addEventListener("changed", onPickerChange);
    container.appendChild(picker);
  }

  _setupWindEntityPicker() {
    const container = this.shadowRoot?.querySelector("#wind-entity-picker");
    if (!container || !this._hass) return;

    container.innerHTML = "";
    const picker = document.createElement("ha-entity-picker");
    picker.hass = this._hass;
    picker.value = this._config.entity_wind_speed || "";
    picker.includeDomains = ["sensor"];
    picker.includeDeviceClasses = ["wind_speed"];
    picker.allowCustomEntity = true;
    const onPickerChange = (e) => {
      const val = e.detail?.value ?? "";
      this._fire({ ...this._config, entity_wind_speed: val || "" });
    };
    picker.addEventListener("value-changed", onPickerChange);
    picker.addEventListener("changed", onPickerChange);
    container.appendChild(picker);
  }

  _syncPickers() {
    this.shadowRoot?.querySelectorAll("ha-entity-picker").forEach((p) => {
      if (this._hass) p.hass = this._hass;
    });
  }

  _toggle(id, label, hint, checked) {
    const keyMap = {
      "sw-compact":    "compact",
      "sw-wind":       "show_wind",
      "sw-sager":      "show_sager",
      "sw-precip":     "show_precip",
      "sw-forecasts":  "show_forecasts",
      "sw-auto-theme": "auto_theme",
      "sw-trend":      "show_trend",
      "sw-history":    "show_history",
      "sw-subdial":    "show_subdial",
    };
    return `<div class="row">
      <div>
        <div class="row-label">${escapeHtml(label)}</div>
        <div class="row-hint">${escapeHtml(hint)}</div>
      </div>
      <ha-switch data-key="${escapeHtml(keyMap[id])}" ${checked ? "checked" : ""}></ha-switch>
    </div>`;
  }
}

if (!customElements.get("zambretti-weather-card-editor")) {
  customElements.define("zambretti-weather-card-editor", ZambrettiWeatherCardEditor);
}

export { ZambrettiWeatherCardEditor };
