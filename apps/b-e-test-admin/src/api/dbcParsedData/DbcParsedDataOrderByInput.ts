import { SortOrder } from "../../util/SortOrder";

export type DbcParsedDataOrderByInput = {
  codeName?: SortOrder;
  codeValue?: SortOrder;
  createdAt?: SortOrder;
  dataType?: SortOrder;
  dbcCategoryId?: SortOrder;
  description?: SortOrder;
  deviceId?: SortOrder;
  fileImportLogId?: SortOrder;
  id?: SortOrder;
  rawData?: SortOrder;
  sourceLine?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  valid?: SortOrder;
};
