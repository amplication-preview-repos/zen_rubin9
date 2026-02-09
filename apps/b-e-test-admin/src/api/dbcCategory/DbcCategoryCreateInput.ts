import { DbcParsedDataCreateNestedManyWithoutDbcCategoriesInput } from "./DbcParsedDataCreateNestedManyWithoutDbcCategoriesInput";

export type DbcCategoryCreateInput = {
  categoryName?: string | null;
  dbcParsedDataItems?: DbcParsedDataCreateNestedManyWithoutDbcCategoriesInput;
};
