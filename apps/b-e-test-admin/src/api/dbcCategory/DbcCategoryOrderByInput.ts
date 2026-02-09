import { SortOrder } from "../../util/SortOrder";

export type DbcCategoryOrderByInput = {
  categoryName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
