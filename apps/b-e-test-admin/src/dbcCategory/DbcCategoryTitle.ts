import { DbcCategory as TDbcCategory } from "../api/dbcCategory/DbcCategory";

export const DBCCATEGORY_TITLE_FIELD = "categoryName";

export const DbcCategoryTitle = (record: TDbcCategory): string => {
  return record.categoryName?.toString() || String(record.id);
};
