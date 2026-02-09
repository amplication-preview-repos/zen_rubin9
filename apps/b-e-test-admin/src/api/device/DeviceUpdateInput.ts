import { DbcParsedDataUpdateManyWithoutDevicesInput } from "./DbcParsedDataUpdateManyWithoutDevicesInput";

export type DeviceUpdateInput = {
  dbcParsedDataItems?: DbcParsedDataUpdateManyWithoutDevicesInput;
  description?: string | null;
  deviceName?: string | null;
};
