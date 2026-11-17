"""Unit tests for the persistent forecast verification ledger."""

from __future__ import annotations

import datetime
from typing import Any

import pytest

from custom_components.zambretti_sager.forecast_engine import ForecastData
from custom_components.zambretti_sager.ledger import (
    DAMPING_MAX,
    MIN_CALIBRATION_DELTA,
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
    """Test damping grows when the real trend overshoots the prediction."""
    ledger = ForecastLedger(None, "entry", store=FakeStore())
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    initial = ledger.damping

    await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1014.0), now)
    await ledger.async_verify(1025.0, "fine_weather", now + datetime.timedelta(hours=25))

    assert ledger.damping == pytest.approx(initial + 0.02)
    assert ledger.calibration_samples == 1

    # A much smaller actual change lowers damping again.
    now2 = now + datetime.timedelta(days=2)
    await ledger.async_record(_forecast(issued_pressure=1010.0, predicted_24h=1025.0), now2)
    await ledger.async_verify(1010.5, "fine_weather", now2 + datetime.timedelta(hours=25))
    assert ledger.damping == pytest.approx(initial)


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
    """Test records and damping survive a restart."""
    store = FakeStore()
    ledger = ForecastLedger(None, "entry", store=store)
    now = datetime.datetime(2026, 9, 21, 12, 0, tzinfo=datetime.UTC)
    await ledger.async_record(_forecast(predicted_24h=1014.0), now)
    await ledger.async_verify(1025.0, "fine_weather", now + datetime.timedelta(hours=25))

    assert store.saved is not None
    reloaded = ForecastLedger(None, "entry", store=FakeStore(store.saved))
    await reloaded.async_load()
    assert reloaded.verified_count == 1
    assert reloaded.damping == pytest.approx(0.67)
    assert reloaded.damping <= DAMPING_MAX


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
