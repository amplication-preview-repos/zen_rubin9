import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DbcCategoryWhereUniqueInput } from "../dbcCategory/DbcCategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type DbcParsedDataWhereInput = {
  codeName?: StringNullableFilter;
  codeValue?: StringNullableFilter;
  dbcCategory?: DbcCategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
};
