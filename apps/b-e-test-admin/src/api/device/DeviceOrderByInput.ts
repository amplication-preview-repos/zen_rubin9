import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  deviceName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
