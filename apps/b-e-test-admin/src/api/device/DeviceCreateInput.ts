import { DbcParsedDataCreateNestedManyWithoutDevicesInput } from "./DbcParsedDataCreateNestedManyWithoutDevicesInput";

export type DeviceCreateInput = {
  dbcParsedDataItems?: DbcParsedDataCreateNestedManyWithoutDevicesInput;
  description?: string | null;
  deviceName?: string | null;
};
