import { DbcParsedDataUpdateManyWithoutDbcCategoriesInput } from "./DbcParsedDataUpdateManyWithoutDbcCategoriesInput";

export type DbcCategoryUpdateInput = {
  categoryName?: string | null;
  dbcParsedDataItems?: DbcParsedDataUpdateManyWithoutDbcCategoriesInput;
  description?: string | null;
  typeField?: string | null;
};
