import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DbcParsedDataListRelationFilter } from "../dbcParsedData/DbcParsedDataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DbcCategoryWhereInput = {
  categoryName?: StringNullableFilter;
  dbcParsedDataItems?: DbcParsedDataListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
