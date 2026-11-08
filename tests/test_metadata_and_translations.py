"""Validation tests for manifest.json, icons.json, translations, and frontend bundles."""

from __future__ import annotations

import json
from pathlib import Path

from custom_components.zambretti_sager.algorithms import SAGER_OPTIONS, ZAMBRETTI_OPTIONS

INTEGRATION_DIR = Path(__file__).resolve().parent.parent / "custom_components" / "zambretti_sager"


def _collect_keys(obj: dict, prefix: str = "") -> set[str]:
    keys: set[str] = set()
    for k, v in obj.items():
        path = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            keys |= _collect_keys(v, path)
        else:
            keys.add(path)
    return keys


def test_manifest_hassfest_key_order_and_metadata():
    """Verify manifest.json follows hassfest key ordering (domain, name, then alphabetical)."""
    manifest_path = INTEGRATION_DIR / "manifest.json"
    raw_pairs = json.loads(manifest_path.read_text(encoding="utf-8"), object_pairs_hook=list)
    keys = [k for k, _ in raw_pairs]

    assert keys[:2] == ["domain", "name"]
    assert keys[2:] == sorted(keys[2:])

    manifest = dict(raw_pairs)
    assert manifest["domain"] == "zambretti_sager"
    assert manifest["integration_type"] == "service"
    assert manifest["iot_class"] == "calculated"
    assert "custom_components.zambretti_sager" in manifest["loggers"]


def test_icons_json_covers_all_sensor_states_and_weather():
    """Verify icons.json defines state icons for all Zambretti & Sager enum options."""
    icons = json.loads((INTEGRATION_DIR / "icons.json").read_text(encoding="utf-8"))
    sensor_icons = icons["entity"]["sensor"]

    for key in (
        "zambretti_forecast",
        "zambretti_forecast_6h",
        "zambretti_forecast_12h",
        "zambretti_forecast_24h",
    ):
        state_map = sensor_icons[key]["state"]
        assert set(ZAMBRETTI_OPTIONS).issubset(state_map.keys()), (
            f"Missing Zambretti icons in {key}"
        )

    sager_map = sensor_icons["sager_forecast"]["state"]
    assert set(SAGER_OPTIONS).issubset(sager_map.keys())

    precip_range = sensor_icons["precipitation_probability"]["range"]
    assert {"0", "1", "40", "75"}.issubset(precip_range.keys())
    assert "last_update" in sensor_icons
    assert "weather_station" in icons["entity"]["weather"]


def test_strings_and_all_translations_have_identical_keys():
    """Verify strings.json and all translations/*.json files have 100% key parity."""
    strings = json.loads((INTEGRATION_DIR / "strings.json").read_text(encoding="utf-8"))
    expected_keys = _collect_keys(strings)
    assert "exceptions.invalid_pressure.message" in expected_keys

    translations_dir = INTEGRATION_DIR / "translations"
    files = sorted(translations_dir.glob("*.json"))
    assert len(files) >= 21

    for tf in files:
        data = json.loads(tf.read_text(encoding="utf-8"))
        actual_keys = _collect_keys(data)
        missing = expected_keys - actual_keys
        extra = actual_keys - expected_keys
        assert not missing, f"{tf.name} missing keys: {sorted(missing)}"
        assert not extra, f"{tf.name} has unexpected extra keys: {sorted(extra)}"


def test_compiled_frontend_bundles_exist():
    """Verify compiled Lovelace card and editor bundles exist and are non-empty."""
    frontend_dir = INTEGRATION_DIR / "frontend"
    card_bundle = frontend_dir / "zambretti-weather-card.js"
    editor_bundle = frontend_dir / "zambretti-weather-card-editor.js"

    assert card_bundle.is_file() and card_bundle.stat().st_size > 10_000
    assert editor_bundle.is_file() and editor_bundle.stat().st_size > 5_000
    card_src = card_bundle.read_text(encoding="utf-8")
    assert "zambretti-weather-card-editor.js?v=2.1.0" in card_src
