import { SortOrder } from "../../util/SortOrder";

export type DbcParsedDataOrderByInput = {
  codeName?: SortOrder;
  codeValue?: SortOrder;
  createdAt?: SortOrder;
  dbcCategoryId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
