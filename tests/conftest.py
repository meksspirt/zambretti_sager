"""Fixtures and shared setup for Zambretti & Sager tests."""

from __future__ import annotations

import sys
import types
from typing import Any
from unittest.mock import MagicMock

import pytest

# If homeassistant or voluptuous are not installed in the local Python environment,
# provide a dynamic import hook so unit tests can run locally without full HA core.
if "voluptuous" not in sys.modules:
    try:
        import voluptuous  # noqa: F401
    except ImportError:

        class VoluptuousMockModule(types.ModuleType):
            def __init__(self, name: str) -> None:
                super().__init__(name)
                self.Schema = lambda s, *a, **kw: s
                self.Required = lambda k, *a, **kw: k
                self.Optional = lambda k, *a, **kw: k
                self.In = lambda items, *a, **kw: items
                self.Coerce = lambda t, *a, **kw: t
                self.Range = lambda *a, **kw: lambda x: x
                self.All = lambda *a, **kw: lambda x: x
                self.Length = lambda *a, **kw: lambda x: x
                self.ExactSequence = lambda *a, **kw: lambda x: x
                self.MultipleInvalid = Exception
                self.Invalid = Exception

            def __getattr__(self, name: str):
                m = MagicMock()
                setattr(self, name, m)
                return m

        sys.modules["voluptuous"] = VoluptuousMockModule("voluptuous")

if "aiohttp" not in sys.modules:
    try:
        import aiohttp  # noqa: F401
    except ImportError:

        class MockClientTimeout:
            def __init__(
                self,
                total: float | None = None,
                connect: float | None = None,
                sock_read: float | None = None,
                sock_connect: float | None = None,
            ) -> None:
                self.total = total
                self.connect = connect
                self.sock_read = sock_read
                self.sock_connect = sock_connect

        class AiohttpMockModule(types.ModuleType):
            ClientTimeout = MockClientTimeout
            ClientSession = MagicMock
            ClientError = Exception

            def __getattr__(self, name: str):
                m = MagicMock()
                setattr(self, name, m)
                return m

        sys.modules["aiohttp"] = AiohttpMockModule("aiohttp")

if "homeassistant" not in sys.modules:
    try:
        import homeassistant  # noqa: F401
    except ImportError:

        class DynamicMockModule(types.ModuleType):
            def __init__(self, name: str) -> None:
                super().__init__(name)
                self.__path__ = []
                self.__file__ = f"{name}.py"

            def __getattr__(self, name: str):
                m = MagicMock()
                setattr(self, name, m)
                return m

        class HomeAssistantImportHook:
            def find_spec(self, fullname, path, target=None):
                if fullname == "homeassistant" or fullname.startswith("homeassistant."):
                    from importlib.machinery import ModuleSpec

                    return ModuleSpec(fullname, self)
                return None

            def create_module(self, spec):
                mod = DynamicMockModule(spec.name)
                sys.modules[spec.name] = mod
                parts = spec.name.split(".")
                if len(parts) > 1:
                    parent = ".".join(parts[:-1])
                    child = parts[-1]
                    if parent in sys.modules:
                        setattr(sys.modules[parent], child, mod)
                return mod

            def exec_module(self, module):
                pass

        sys.meta_path.insert(0, HomeAssistantImportHook())
        sys.modules["homeassistant"] = DynamicMockModule("homeassistant")

        class MockState:
            def __init__(self, entity_id: str, state: str, attributes: dict | None = None) -> None:
                self.entity_id = entity_id
                self.state = state
                self.attributes = attributes or {}

        from dataclasses import dataclass

        @dataclass(frozen=True, kw_only=True)
        class MockSensorEntityDescription:
            key: str
            device_class: Any = None
            native_unit_of_measurement: str | None = None
            state_class: Any = None
            options: list[str] | None = None
            translation_key: str | None = None
            icon: str | None = None
            entity_category: Any = None
            has_entity_name: bool = False

        class MockEntity:
            _attr_translation_key = None
            _attr_unique_id = None
            _attr_icon = None
            _attr_native_unit_of_measurement = None
            _attr_state_class = None
            _attr_device_class = None
            _attr_entity_category = None
            _attr_force_update = False
            _attr_device_info = None
            _attr_has_entity_name = False
            _unrecorded_attributes = frozenset()
            entity_description = None

            def __init__(self, coordinator=None) -> None:
                self.coordinator = coordinator

            def __class_getitem__(cls, item):
                return cls

            @property
            def translation_key(self):
                if getattr(self, "_attr_translation_key", None) is not None:
                    return self._attr_translation_key
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "translation_key", None)
                return None

            @property
            def unique_id(self):
                return getattr(self, "_attr_unique_id", None)

            @property
            def force_update(self):
                return getattr(self, "_attr_force_update", False)

            @property
            def device_class(self):
                if getattr(self, "_attr_device_class", None) is not None:
                    return self._attr_device_class
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "device_class", None)
                return None

            @property
            def options(self):
                if getattr(self, "_attr_options", None) is not None:
                    return self._attr_options
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "options", None)
                return None

            @property
            def icon(self):
                if getattr(self, "_attr_icon", None) is not None:
                    return self._attr_icon
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "icon", None)
                return None

            @property
            def native_unit_of_measurement(self):
                if getattr(self, "_attr_native_unit_of_measurement", None) is not None:
                    return self._attr_native_unit_of_measurement
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "native_unit_of_measurement", None)
                return None

            @property
            def state_class(self):
                if getattr(self, "_attr_state_class", None) is not None:
                    return self._attr_state_class
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "state_class", None)
                return None

            @property
            def entity_category(self):
                if getattr(self, "_attr_entity_category", None) is not None:
                    return self._attr_entity_category
                if getattr(self, "entity_description", None) is not None:
                    return getattr(self.entity_description, "entity_category", None)
                return None

        class MockCoordinatorEntity(MockEntity):
            pass

        class MockSensorEntity(MockEntity):
            pass

        class MockWeatherEntity(MockEntity):
            pass

        class MockForecast(dict):
            def __init__(self, **kwargs) -> None:
                super().__init__(kwargs)

        class MockTemperatureConverter:
            @staticmethod
            def convert(val: float, from_unit: str, to_unit: str) -> float:
                u_from = str(from_unit).upper().replace("°", "").strip()
                u_to = str(to_unit).upper().replace("°", "").strip()
                if u_from == "F":
                    c = (val - 32.0) * 5.0 / 9.0
                elif u_from == "K":
                    c = val - 273.15
                else:
                    c = val
                if u_to == "F":
                    return c * 9.0 / 5.0 + 32.0
                if u_to == "K":
                    return c + 273.15
                return c

        class MockSpeedConverter:
            @staticmethod
            def convert(val: float, from_unit: str, to_unit: str) -> float:
                u_from = str(from_unit).lower().strip()
                u_to = str(to_unit).lower().strip()
                if u_from in ("km/h", "kmh"):
                    ms = val / 3.6
                elif u_from in ("mph", "mi/h"):
                    ms = val * 0.44704
                elif u_from in ("kn", "kts", "knot", "knots"):
                    ms = val * 0.514444
                elif u_from in ("ft/s", "fps"):
                    ms = val * 0.3048
                else:
                    ms = val
                if u_to in ("km/h", "kmh"):
                    return ms * 3.6
                if u_to in ("mph", "mi/h"):
                    return ms / 0.44704
                return ms

        class MockDataUpdateCoordinator:
            def __init__(
                self, hass=None, logger=None, name=None, update_interval=None, **kwargs
            ) -> None:
                self.hass = hass
                self.logger = logger
                self.name = name
                self.update_interval = update_interval
                self.data = None

            async def async_config_entry_first_refresh(self) -> None:
                pass

            async def async_request_refresh(self) -> None:
                pass

            def __class_getitem__(cls, item):
                return cls

        import homeassistant.core

        homeassistant.core.State = MockState
        homeassistant.core.callback = lambda fn: fn

        import homeassistant.components.websocket_api

        homeassistant.components.websocket_api.async_response = lambda fn: fn
        homeassistant.components.websocket_api.websocket_command = lambda schema: lambda fn: fn

        class MockUpdateFailed(Exception):
            def __init__(
                self,
                *args,
                translation_domain: str | None = None,
                translation_key: str | None = None,
                translation_placeholders: dict[str, Any] | None = None,
                **kwargs,
            ) -> None:
                super().__init__(*args)
                self.translation_domain = translation_domain
                self.translation_key = translation_key
                self.translation_placeholders = translation_placeholders

        class MockDeviceInfo(dict):
            def __init__(self, **kwargs) -> None:
                super().__init__(kwargs)

        class MockDeviceEntryType:
            SERVICE = "service"

        import homeassistant.helpers.device_registry

        homeassistant.helpers.device_registry.DeviceInfo = MockDeviceInfo
        homeassistant.helpers.device_registry.DeviceEntryType = MockDeviceEntryType

        import homeassistant.helpers.update_coordinator

        homeassistant.helpers.update_coordinator.CoordinatorEntity = MockCoordinatorEntity
        homeassistant.helpers.update_coordinator.DataUpdateCoordinator = MockDataUpdateCoordinator
        homeassistant.helpers.update_coordinator.UpdateFailed = MockUpdateFailed

        import homeassistant.components.sensor

        homeassistant.components.sensor.SensorEntity = MockSensorEntity
        homeassistant.components.sensor.SensorEntityDescription = MockSensorEntityDescription

        import homeassistant.data_entry_flow

        class MockAbortFlow(Exception):
            def __init__(self, reason: str, description_placeholders: dict | None = None) -> None:
                super().__init__(reason)
                self.reason = reason
                self.description_placeholders = description_placeholders

        homeassistant.data_entry_flow.AbortFlow = MockAbortFlow

        import homeassistant.config_entries

        class MockConfigFlow:
            def __init_subclass__(cls, domain=None, **kwargs):
                super().__init_subclass__(**kwargs)
                cls.domain = domain

            def __init__(self) -> None:
                self.hass = MagicMock()
                self.hass.config.latitude = 50.0
                self.hass.config.longitude = 10.0
                self.context = {}
                self.unique_id = None
                self._reconfigure_entry = None
                self._existing_unique_ids = set()

            async def async_set_unique_id(
                self, unique_id: str | None = None, *, raise_on_progress: bool = True
            ):
                self.unique_id = unique_id
                return None

            def _abort_if_unique_id_configured(self, updates=None, reload_on_update=True):
                if self.unique_id in self._existing_unique_ids:
                    raise MockAbortFlow("already_configured")

            def _abort_if_unique_id_mismatch(self, reason="already_configured"):
                if (
                    self._reconfigure_entry
                    and getattr(self._reconfigure_entry, "unique_id", None) != self.unique_id
                ):
                    raise MockAbortFlow(reason)

            def _get_reconfigure_entry(self):
                return self._reconfigure_entry

            def async_show_form(
                self,
                *,
                step_id: str,
                data_schema=None,
                errors=None,
                description_placeholders=None,
                last_step=None,
            ):
                return {
                    "type": "form",
                    "step_id": step_id,
                    "data_schema": data_schema,
                    "errors": errors or {},
                    "description_placeholders": description_placeholders,
                }

            def async_create_entry(
                self, *, title: str, data: dict, description=None, description_placeholders=None
            ):
                return {"type": "create_entry", "title": title, "data": data}

            def async_update_reload_and_abort(
                self,
                entry,
                *,
                data=None,
                reason="reconfigure_successful",
                reload_even_if_entry_is_unchanged=True,
            ):
                return {"type": "abort", "reason": reason, "data": data}

            def async_abort(self, *, reason: str, description_placeholders=None):
                raise MockAbortFlow(reason, description_placeholders)

        class MockOptionsFlow:
            def __init__(self, *args, **kwargs) -> None:
                self.config_entry = args[0] if args else MagicMock()
                self.hass = MagicMock()
                self.hass.config.latitude = 50.0
                self.hass.config.longitude = 10.0

            def async_show_form(
                self,
                *,
                step_id: str,
                data_schema=None,
                errors=None,
                description_placeholders=None,
                last_step=None,
            ):
                return {
                    "type": "form",
                    "step_id": step_id,
                    "data_schema": data_schema,
                    "errors": errors or {},
                    "description_placeholders": description_placeholders,
                }

            def async_create_entry(self, *, title: str, data: dict):
                return {"type": "create_entry", "title": title, "data": data}

        homeassistant.config_entries.ConfigFlow = MockConfigFlow
        homeassistant.config_entries.OptionsFlow = MockOptionsFlow

        import homeassistant.components.weather

        homeassistant.components.weather.WeatherEntity = MockWeatherEntity
        homeassistant.components.weather.Forecast = MockForecast

        import homeassistant.const

        homeassistant.const.UnitOfTemperature.CELSIUS = "°C"
        homeassistant.const.UnitOfSpeed.METERS_PER_SECOND = "m/s"

        class MockPressureConverter:
            @staticmethod
            def convert(val: float, from_unit: str, to_unit: str) -> float:
                raise ValueError(f"Unknown pressure conversion from {from_unit}")

        import homeassistant.util.unit_conversion

        homeassistant.util.unit_conversion.TemperatureConverter = MockTemperatureConverter
        homeassistant.util.unit_conversion.SpeedConverter = MockSpeedConverter
        homeassistant.util.unit_conversion.PressureConverter = MockPressureConverter

        import datetime as real_datetime

        class MockDateTimeUtil:
            @staticmethod
            def utcnow():
                return real_datetime.datetime.now(real_datetime.UTC)

        import homeassistant.util.dt

        homeassistant.util.dt.utcnow = MockDateTimeUtil.utcnow


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations=None):
    """Enable custom integrations for pytest-homeassistant-custom-component if present."""
    yield
