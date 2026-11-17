"""Forecast verification ledger with persistence and adaptive calibration."""

from __future__ import annotations

from dataclasses import asdict, dataclass, fields
import datetime
import logging
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .algorithms import DAMPING_EXPONENT, zambretti_severity
from .const import DOMAIN
from .forecast_engine import ForecastData

_LOGGER = logging.getLogger(__name__)

STORAGE_VERSION = 1
RECORD_INTERVAL = datetime.timedelta(hours=6)
VERIFY_AFTER = datetime.timedelta(hours=24)
PRESSURE_HIT_TOLERANCE = 2.0
MIN_CALIBRATION_DELTA = 1.0
MAX_RECORDS = 200
MAX_ACCURACY_ENTRIES = 60
CALIBRATION_MIN_SAMPLES = 3
DAMPING_MIN = 0.45
DAMPING_MAX = 0.85
DAMPING_STEP = 0.02


@dataclass
class LedgerRecord:
    """One issued forecast awaiting (or holding) verification."""

    issued_at: str
    zambretti_state: str | None
    sager_state: str | None
    consensus_state: str | None
    precip_probability: int | None
    p_now: float
    predicted_p_24h: float | None
    predicted_delta_24h: float | None
    delta_3h: float | None
    temperature: float | None = None
    rain: bool | None = None
    verified: bool = False
    hit: bool | None = None
    pressure_error: float | None = None
    actual_state: str | None = None


class ForecastLedger:
    """Persistent 24-hour forecast verification ledger.

    Records a forecast at most once every six hours and verifies it 24 hours
    later against the observed pressure, the current forecast severity and,
    optionally, a rain sensor. Verified records also tune the extrapolation
    damping exponent (adaptive calibration).
    """

    def __init__(
        self,
        hass: HomeAssistant,
        entry_id: str,
        store: Store | None = None,
    ) -> None:
        """Initialize the ledger, optionally with an injected store."""
        self._store = store or Store(hass, STORAGE_VERSION, f"{DOMAIN}.{entry_id}.ledger")
        self._records: list[LedgerRecord] = []
        self._damping = DAMPING_EXPONENT
        self._loaded = False
        self._dirty = False

    # ── Persistence ──────────────────────────────────────────────────────

    async def async_load(self) -> None:
        """Load ledger records from storage once."""
        if self._loaded:
            return
        self._loaded = True
        try:
            stored = await self._store.async_load()
        except Exception as err:  # noqa: BLE001 - storage is optional
            _LOGGER.debug("Could not load forecast ledger: %s", err)
            return

        if not isinstance(stored, dict):
            return

        valid_fields = {field.name for field in fields(LedgerRecord)}
        for raw in stored.get("records", []):
            if not isinstance(raw, dict):
                continue
            try:
                self._records.append(
                    LedgerRecord(**{k: v for k, v in raw.items() if k in valid_fields})
                )
            except TypeError:
                continue

        try:
            self._damping = self._clamp_damping(float(stored.get("damping", DAMPING_EXPONENT)))
        except (TypeError, ValueError):
            self._damping = DAMPING_EXPONENT

    async def async_save(self) -> None:
        """Persist the ledger if it changed."""
        if not self._dirty:
            return
        payload: dict[str, Any] = {
            "damping": self._damping,
            "records": [asdict(record) for record in self._records],
        }
        try:
            await self._store.async_save(payload)
            self._dirty = False
        except Exception as err:  # noqa: BLE001 - storage is optional
            _LOGGER.debug("Could not persist forecast ledger: %s", err)

    # ── Recording and verification ───────────────────────────────────────

    async def async_record(
        self,
        forecast: ForecastData,
        now: datetime.datetime,
        rain: bool | None = None,
    ) -> None:
        """Record the current forecast when the six-hour sampling window allows."""
        await self.async_load()
        if forecast.p_now is None:
            return

        last = self._records[-1] if self._records else None
        if last is not None:
            last_issued = self._parse_time(last.issued_at)
            if last_issued is not None and now - last_issued < RECORD_INTERVAL:
                return

        predicted = forecast.predicted_p_24h
        record = LedgerRecord(
            issued_at=now.isoformat(),
            zambretti_state=forecast.zambretti_state,
            sager_state=forecast.sager_state,
            consensus_state=forecast.consensus_state,
            precip_probability=forecast.precip_probability,
            p_now=forecast.p_now,
            predicted_p_24h=predicted,
            predicted_delta_24h=(
                round(predicted - forecast.p_now, 2) if predicted is not None else None
            ),
            delta_3h=forecast.delta_3h,
            temperature=forecast.temperature if forecast.temperature_available else None,
            rain=rain,
        )
        self._records.append(record)
        if len(self._records) > MAX_RECORDS:
            del self._records[: len(self._records) - MAX_RECORDS]
        self._dirty = True
        await self.async_save()

    async def async_verify(
        self,
        actual_pressure: float | None,
        actual_state: str | None,
        now: datetime.datetime,
        rain: bool | None = None,
    ) -> int:
        """Verify records older than 24 hours.

        Returns:
            Number of records verified in this call.
        """
        await self.async_load()
        if actual_pressure is None:
            return 0

        actual_severity = zambretti_severity(actual_state)
        verified_count = 0

        for record in self._records:
            if record.verified:
                continue
            issued = self._parse_time(record.issued_at)
            if issued is None or now - issued < VERIFY_AFTER:
                continue

            predicted_state = record.consensus_state or record.zambretti_state
            predicted_severity = zambretti_severity(predicted_state)

            pressure_error: float | None = None
            pressure_hit = True
            if record.predicted_p_24h is not None:
                pressure_error = round(actual_pressure - record.predicted_p_24h, 2)
                pressure_hit = abs(pressure_error) <= PRESSURE_HIT_TOLERANCE

            state_hit = True
            if predicted_severity is not None and actual_severity is not None:
                state_hit = abs(predicted_severity - actual_severity) <= 1

            rain_hit = True
            if rain is not None and record.precip_probability is not None:
                predicted_rain = record.precip_probability >= 50
                rain_hit = predicted_rain == rain

            record.verified = True
            record.hit = bool(pressure_hit and state_hit and rain_hit)
            record.pressure_error = pressure_error
            record.actual_state = actual_state
            verified_count += 1

            self._update_calibration(record, actual_pressure)

        if verified_count:
            self._dirty = True
            await self.async_save()

        return verified_count

    # ── Derived values ───────────────────────────────────────────────────

    @property
    def damping(self) -> float:
        """Return the calibrated damping exponent used for extrapolations."""
        return self._damping

    @property
    def calibration_samples(self) -> int:
        """Return the number of verified forecasts usable for calibration."""
        return sum(
            1
            for record in self._records
            if record.verified
            and record.predicted_delta_24h is not None
            and abs(record.predicted_delta_24h) >= MIN_CALIBRATION_DELTA
        )

    @property
    def accuracy(self) -> int | None:
        """Return the hit rate (0-100%) over recent verified forecasts."""
        verified = [
            record for record in self._records if record.verified and record.hit is not None
        ]
        if not verified:
            return None
        recent = verified[-MAX_ACCURACY_ENTRIES:]
        hits = sum(1 for record in recent if record.hit)
        return int(round(hits / len(recent) * 100))

    @property
    def last_hit(self) -> str | None:
        """Return "hit" or "miss" for the most recently verified forecast."""
        for record in reversed(self._records):
            if record.verified and record.hit is not None:
                return "hit" if record.hit else "miss"
        return None

    @property
    def verified_count(self) -> int:
        """Return the total number of verified forecasts."""
        return sum(1 for record in self._records if record.verified)

    def summary(self) -> dict[str, Any]:
        """Return a compact diagnostics-friendly summary."""
        return {
            "records": len(self._records),
            "verified": self.verified_count,
            "accuracy": self.accuracy,
            "last_hit": self.last_hit,
            "calibration_samples": self.calibration_samples,
            "damping": self.damping,
        }

    # ── Internals ────────────────────────────────────────────────────────

    def _update_calibration(self, record: LedgerRecord, actual_pressure: float) -> None:
        """Nudge the damping exponent based on the verified 24h trend error."""
        if (
            record.predicted_delta_24h is None
            or abs(record.predicted_delta_24h) < MIN_CALIBRATION_DELTA
        ):
            return

        actual_delta = actual_pressure - record.p_now
        predicted_magnitude = abs(record.predicted_delta_24h)
        actual_magnitude = abs(actual_delta)

        if actual_magnitude > predicted_magnitude + 0.5:
            self._damping = self._clamp_damping(self._damping + DAMPING_STEP)
        elif actual_magnitude < predicted_magnitude - 0.5:
            self._damping = self._clamp_damping(self._damping - DAMPING_STEP)

    @staticmethod
    def _clamp_damping(value: float) -> float:
        """Clamp the damping exponent to a safe physical range."""
        return round(max(DAMPING_MIN, min(DAMPING_MAX, value)), 3)

    @staticmethod
    def _parse_time(value: str) -> datetime.datetime | None:
        """Parse an ISO timestamp, tolerating malformed ledger entries."""
        try:
            parsed = datetime.datetime.fromisoformat(value)
        except (TypeError, ValueError):
            return None
        if parsed.tzinfo is None:
            parsed = parsed.replace(tzinfo=datetime.UTC)
        return parsed
