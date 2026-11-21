"""Unit tests for the persistent forecast verification ledger."""

from __future__ import annotations

import datetime
from typing import Any

import pytest

from custom_components.zambretti_sager.forecast_engine import ForecastData
from custom_components.zambretti_sager.ledger import (
    CALIBRATION_MIN_SAMPLES,
    DAMPING_MAX,
    DAMPING_STEP,
    MAX_RECORDS,
    MIN_CALIBRATION_DELTA,
    PRECIP_BIAS_STEP,
    PRESSURE_BIAS_STEP,
    SEASONAL_FACTOR_STEP,
    WIND_FACTOR_STEP,
    ForecastLedger,
)


class FakeStore:
    """Minimal async store used instead of Home Assistant's Store."""

    def __init__(self, payload: dict[str, Any] | None = None) -> None:
        self.payload = payload or {}
        self.saved: dict[str, Any] | None = None

    async def async_load(self) -> dict[str, Any]:
        return self.payload

    async def async_save(self, payload: dict[str, Any]) -> None:
        self.saved = payload


def _forecast(
    issued_pressure: float = 1010.0,
    predicted_24h: float = 1020.0,
    *,
    state: str = "fine_weather",
    precip: int = 20,
) -> ForecastData:
    """Build a ForecastData snapshot suitable for the ledger."""
    return ForecastData(
        available=True,
        p_now=issued_pressure,
        zambretti_state=state,
        consensus_state=state,
        precip_probability=precip,
        predicted_p_24h=predicted_24h,
        delta_3h=-1.0,
        temperature=10.0,
        temperature_available=True,
    )


@pytest.mark.asyncio
async def test_ledger_records_at_most_once_per_six_hours():
    """Test the six-hour sampling window."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    await ledger.async_record(_forecast(), now)
    assert len(ledger._records) == 1
    assert store.saved is not None

    await ledger.async_record(_forecast(), now + datetime.timedelta(hours=1))
    assert len(ledger._records) == 1

    await ledger.async_record(_forecast(), now + datetime.timedelta(hours=7))
    assert len(ledger._records) == 2


@pytest.mark.asyncio
async def test_ledger_verifies_after_24_hours_and_reports_accuracy():
    """Test verification hit/miss scoring and reported accuracy."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    await ledger.async_record(_forecast(predicted_24h=1020.0), now)

    # Too early: nothing is verified.
    assert (
        await ledger.async_verify(1019.0, "fine_weather", now + datetime.timedelta(hours=23)) == 0
    )
    assert ledger.accuracy is None
    assert ledger.last_hit is None

    verified = await ledger.async_verify(
        1019.5,
        "fine_weather",
        now + datetime.timedelta(hours=25),
        rain=False,
    )
    assert verified == 1
    assert ledger.accuracy == 100
    assert ledger.last_hit == "hit"
    assert ledger.verified_count == 1

    # Re-verification is idempotent.
    assert (
        await ledger.async_verify(1019.5, "fine_weather", now + datetime.timedelta(hours=30)) == 0
    )

    summary = ledger.summary()
    assert summary["records"] == 1
    assert summary["verified"] == 1
    assert summary["accuracy"] == 100


@pytest.mark.asyncio
async def test_ledger_marks_miss_on_large_pressure_error():
    """Test a large pressure error produces a miss."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    await ledger.async_record(_forecast(predicted_24h=1020.0), now)
    await ledger.async_verify(1030.0, "fine_weather", now + datetime.timedelta(hours=25))
    assert ledger.accuracy == 0
    assert ledger.last_hit == "miss"


@pytest.mark.asyncio
async def test_ledger_adaptive_calibration_moves_damping():
    """Test damping waits for CALIBRATION_MIN_SAMPLES, respects sign, and adapts."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    initial = ledger.damping

    # First two samples warm up the minimum sample gate without moving damping.
    for idx in range(CALIBRATION_MIN_SAMPLES - 1):
        t = now + datetime.timedelta(days=idx * 2)
        await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1014.0), t)
        await ledger.async_verify(1025.0, "fine_weather", t + datetime.timedelta(hours=25))
        assert ledger.damping == pytest.approx(initial)

    # Third sample unlocks calibration: actual overshoot (+15 vs +4) raises damping.
    t3 = now + datetime.timedelta(days=4)
    await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1014.0), t3)
    await ledger.async_verify(1025.0, "fine_weather", t3 + datetime.timedelta(hours=25))
    assert ledger.calibration_samples == 3
    assert ledger.damping == pytest.approx(initial + DAMPING_STEP)

    # A much smaller same-sign actual change lowers damping again.
    t4 = now + datetime.timedelta(days=6)
    await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1025.0), t4)
    await ledger.async_verify(1010.5, "fine_weather", t4 + datetime.timedelta(hours=25))
    assert ledger.damping == pytest.approx(initial)

    # Opposite-sign trend reversal (predicted +4, actual -8) reduces damping, not increases it.
    t5 = now + datetime.timedelta(days=8)
    await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1014.0), t5)
    await ledger.async_verify(1002.0, "fine_weather", t5 + datetime.timedelta(hours=25))
    assert ledger.damping == pytest.approx(initial - DAMPING_STEP)


@pytest.mark.asyncio
async def test_ledger_ignores_small_trends_for_calibration():
    """Test calibration samples ignore nearly flat predicted trends."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    small_delta = MIN_CALIBRATION_DELTA / 2

    await ledger.async_record(
        _forecast(issued_pressure=1010.0, predicted_24h=1010.0 + small_delta), now
    )
    await ledger.async_verify(1030.0, "fine_weather", now + datetime.timedelta(hours=25))
    assert ledger.calibration_samples == 0
    assert ledger.damping == pytest.approx(0.65)


@pytest.mark.asyncio
async def test_ledger_persists_and_reloads_state():
    """Test records and calibrated factors survive a restart."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    for idx in range(CALIBRATION_MIN_SAMPLES):
        t = now + datetime.timedelta(days=idx * 2)
        await ledger.async_record(
            _forecast(predicted_24h=1014.0, precip=30),
            t,
            wind_adjustment_sign=-1,
            season_sign=-1,
        )
        await ledger.async_verify(
            1025.0,
            "fine_weather",
            t + datetime.timedelta(hours=25),
            rain=True,
        )

    assert store.saved is not None
    reloaded = ForecastLedger(None, "entry", store=FakeStore(store.saved))
    await reloaded.async_load()
    assert reloaded.verified_count == CALIBRATION_MIN_SAMPLES
    assert reloaded.damping == pytest.approx(0.65 + DAMPING_STEP)
    assert reloaded.damping <= DAMPING_MAX
    assert reloaded.wind_factor == pytest.approx(1.0 + WIND_FACTOR_STEP)
    assert reloaded.seasonal_factor == pytest.approx(1.0 + SEASONAL_FACTOR_STEP)
    assert reloaded.precip_bias == pytest.approx(PRECIP_BIAS_STEP)


@pytest.mark.asyncio
async def test_ledger_survives_broken_storage():
    """Test storage failures never break the coordinator update loop."""

    class BrokenStore:
        async def async_load(self):
            raise RuntimeError("boom")

        async def async_save(self, payload):
            raise RuntimeError("boom")

    ledger = ForecastLedger(None, "entry", store=BrokenStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    await ledger.async_load()
    await ledger.async_record(_forecast(), now)
    assert len(ledger._records) == 1
    await ledger.async_save()


@pytest.mark.asyncio
async def test_ledger_tolerates_corrupt_storage_payloads():
    """Test non-dict payloads, invalid records, and bad damping values are ignored."""
    not_a_dict = ForecastLedger(None, "entry", store=FakeStore([1]))
    await not_a_dict.async_load()
    assert not_a_dict.verified_count == 0
    assert not_a_dict.damping == pytest.approx(0.65)

    corrupt = ForecastLedger(
        None,
        "entry",
        store=FakeStore(
            {
                "records": [
                    "not-a-record",
                    {"issued_at": "2026-01-01T00:00:00+00:00"},
                ],
                "damping": "not-a-number",
            }
        ),
    )
    await corrupt.async_load()
    assert corrupt.verified_count == 0
    assert corrupt.damping == pytest.approx(0.65)


def test_ledger_parse_time_handles_invalid_values():
    """Test malformed and naive timestamps."""
    assert ForecastLedger._parse_time("not-a-date") is None
    assert ForecastLedger._parse_time(123) is None

    parsed = ForecastLedger._parse_time("2026-01-01T00:00:00")
    assert parsed is not None
    assert parsed.tzinfo == datetime.UTC


@pytest.mark.asyncio
async def test_ledger_skips_missing_pressure_and_caps_records():
    """Test pressure-less forecasts are skipped and the record list is bounded."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    await ledger.async_record(ForecastData(available=True), now)
    assert ledger._records == []

    for hours in range(0, MAX_RECORDS * 6 + 12, 6):
        await ledger.async_record(_forecast(), now + datetime.timedelta(hours=hours))

    assert len(ledger._records) == MAX_RECORDS
    assert await ledger.async_verify(None, "fine_weather", now) == 0


@pytest.mark.asyncio
async def test_ledger_observe_rain_tracks_rain_across_window():
    """Test rain observed earlier in the 24h window counts even if dry at verification."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    await ledger.async_record(_forecast(predicted_24h=1008.0, precip=80), now)
    await ledger.async_observe_rain(False, now + datetime.timedelta(hours=2))
    await ledger.async_observe_rain(True, now + datetime.timedelta(hours=10))
    await ledger.async_observe_rain(False, now + datetime.timedelta(hours=20))

    # At T+25h it is dry and actual_state is None (as passed by the coordinator),
    # yet the forecast is a hit because pressure matched and rain occurred in-window.
    verified = await ledger.async_verify(
        1008.5,
        None,
        now + datetime.timedelta(hours=25),
        rain=False,
    )
    assert verified == 1
    assert ledger.last_hit == "hit"
    assert ledger._records[0].rain_observed is True
    assert ledger._records[0].actual_state is None


@pytest.mark.asyncio
async def test_ledger_calibrates_wind_seasonal_and_precip_bias():
    """Test wind_factor, seasonal_factor, and precip_bias adapt in both directions."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 7, 1, 12, 0, tzinfo=datetime.UTC)

    # Polar/summer fair bias (+1) repeatedly under-predicts rain -> lower multipliers & raise bias.
    for idx in range(CALIBRATION_MIN_SAMPLES):
        t = now + datetime.timedelta(days=idx * 2)
        await ledger.async_record(
            _forecast(predicted_24h=1015.0, precip=20),
            t,
            wind_adjustment_sign=1,
            season_sign=1,
        )
        await ledger.async_verify(1014.0, None, t + datetime.timedelta(hours=25), rain=True)

    assert ledger.wind_factor == pytest.approx(1.0 - WIND_FACTOR_STEP)
    assert ledger.seasonal_factor == pytest.approx(1.0 - SEASONAL_FACTOR_STEP)
    assert ledger.precip_bias == pytest.approx(PRECIP_BIAS_STEP)

    # False wet alarms with high pressure overshoot raise +1 multipliers and lower precip_bias.
    t_dry = now + datetime.timedelta(days=10)
    await ledger.async_record(
        _forecast(predicted_24h=1010.0, precip=75),
        t_dry,
        wind_adjustment_sign=1,
        season_sign=1,
    )
    await ledger.async_verify(1015.0, None, t_dry + datetime.timedelta(hours=25), rain=False)
    assert ledger.wind_factor == pytest.approx(1.0)
    assert ledger.seasonal_factor == pytest.approx(1.0)
    assert ledger.precip_bias == pytest.approx(0.0)

    # Moist/winter (-1) over-predicting wet when actually dry lowers -1 multipliers.
    t_w = now + datetime.timedelta(days=12)
    for idx in range(CALIBRATION_MIN_SAMPLES):
        t = t_w + datetime.timedelta(days=idx * 2)
        await ledger.async_record(
            _forecast(predicted_24h=1005.0, precip=70),
            t,
            wind_adjustment_sign=-1,
            season_sign=-1,
        )
        await ledger.async_verify(1010.0, None, t + datetime.timedelta(hours=25), rain=False)

    assert ledger.wind_factor < 1.0
    assert ledger.seasonal_factor < 1.0
    assert ledger.precip_bias < 0.0

    # Reset clears records and restores all default calibration parameters
    await ledger.async_reset()
    assert ledger._records == []
    assert ledger.damping == pytest.approx(0.65)
    assert ledger.wind_factor == pytest.approx(1.0)
    assert ledger.seasonal_factor == pytest.approx(1.0)
    assert ledger.precip_bias == pytest.approx(0.0)
    assert ledger.pressure_bias == pytest.approx(0.0)


@pytest.mark.asyncio
async def test_ledger_intermediate_checkpoints_and_directional_hits():
    """Test intermediate 6h/12h checkpoints, directional trend hits, and volatility scaling."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    # 1. Intermediate 6h/12h checkpoint credit when a front reverses after 12h
    f1 = ForecastData(
        available=True,
        p_now=1000.0,
        zambretti_state="unsettled_rain_later",
        consensus_state="unsettled_rain_later",
        precip_probability=60,
        predicted_p_6h=997.0,
        predicted_p_12h=995.0,
        predicted_p_24h=993.0,
        delta_3h=-1.5,
    )
    await ledger.async_record(f1, now)
    await ledger.async_observe_pressure(997.5, now + datetime.timedelta(hours=6))
    await ledger.async_observe_pressure(995.5, now + datetime.timedelta(hours=12))
    assert ledger._records[0].p_6h_observed == 997.5
    assert ledger._records[0].p_12h_observed == 995.5

    # Wave rebounds to 1000.5 (+7.5 error vs 993.0, within DIRECTIONAL_HIT_MAX_ERROR=8.0)
    await ledger.async_verify(1000.5, None, now + datetime.timedelta(hours=25))
    assert ledger.last_hit == "hit"

    # 2. Directional trend hit when both predicted and actual move strongly in the same direction
    t2 = now + datetime.timedelta(days=2)
    f2 = _forecast(issued_pressure=1005.0, predicted_24h=1001.0)
    await ledger.async_record(f2, t2)
    # Actual drops -11 hPa to 994.0 (error -7.0 hPa, same falling direction, <= 8.0 hPa)
    await ledger.async_verify(994.0, None, t2 + datetime.timedelta(hours=25))
    assert ledger.last_hit == "hit"

    # 3. Volatility-scaled tolerance allows up to 6.5 hPa during large 10+ hPa swings
    t3 = now + datetime.timedelta(days=4)
    f3 = _forecast(issued_pressure=1005.0, predicted_24h=1009.0)
    await ledger.async_record(f3, t3)
    # Actual reverses by -10 hPa to 995.0 -> wait, check 5.5 hPa error on 10 hPa actual swing
    await ledger.async_verify(1014.5, None, t3 + datetime.timedelta(hours=25))
    assert ledger.last_hit == "hit"

    # 4. Large error (> 8.0 hPa) still counts as miss
    t4 = now + datetime.timedelta(days=6)
    await ledger.async_record(_forecast(issued_pressure=1000.0, predicted_24h=992.0), t4)
    await ledger.async_verify(1005.0, None, t4 + datetime.timedelta(hours=25))
    assert ledger.last_hit == "miss"


@pytest.mark.asyncio
async def test_ledger_retroactive_rescore_on_load():
    """Test persisted verified records are re-scored under updated criteria on load."""
    store = FakeStore(
        {
            "damping": 0.51,
            "records": [
                {
                    "issued_at": "2026-11-19T20:11:00+00:00",
                    "zambretti_state": "fairly_fine_showers_likely",
                    "sager_state": "sager_fair_no_change",
                    "consensus_state": "fairly_fine_showers_likely",
                    "precip_probability": 70,
                    "p_now": 1001.0,
                    "predicted_p_24h": 1004.7,
                    "predicted_delta_24h": 3.7,
                    "delta_3h": 0.0,
                    "verified": True,
                    "hit": False,
                    "pressure_error": -3.7,
                }
            ],
        }
    )
    ledger = ForecastLedger(None, "entry", store=store)
    await ledger.async_load()
    assert ledger.accuracy == 100
    assert ledger.last_hit == "hit"
    assert ledger._dirty is True


@pytest.mark.asyncio
async def test_ledger_calibrates_and_resets_pressure_bias():
    """Test systematic 24h pressure_bias adaptation, persistence, and reset."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)

    for idx in range(CALIBRATION_MIN_SAMPLES):
        t = now + datetime.timedelta(days=idx * 2)
        await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1006.0), t)
        await ledger.async_verify(1012.0, None, t + datetime.timedelta(hours=25))

    assert ledger.pressure_bias == pytest.approx(PRESSURE_BIAS_STEP)

    reloaded = ForecastLedger(None, "entry", store=FakeStore(store.saved))
    await reloaded.async_load()
    assert reloaded.pressure_bias == pytest.approx(PRESSURE_BIAS_STEP)

    await reloaded.async_reset()
    assert reloaded.pressure_bias == pytest.approx(0.0)
