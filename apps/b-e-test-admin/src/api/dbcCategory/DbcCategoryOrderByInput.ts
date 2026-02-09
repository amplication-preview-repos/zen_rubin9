import { SortOrder } from "../../util/SortOrder";

export type DbcCategoryOrderByInput = {
  categoryName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
