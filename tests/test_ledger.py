"""Unit tests for the persistent forecast verification ledger."""

from __future__ import annotations

import datetime
from typing import Any

import pytest

from custom_components.zambretti_sager.forecast_engine import ForecastData
from custom_components.zambretti_sager.ledger import (
    DAMPING_MAX,
    MAX_RECORDS,
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
