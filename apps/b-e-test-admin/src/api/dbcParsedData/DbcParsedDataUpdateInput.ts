import { DbcCategoryWhereUniqueInput } from "../dbcCategory/DbcCategoryWhereUniqueInput";

export type DbcParsedDataUpdateInput = {
  codeName?: string | null;
  codeValue?: string | null;
  dbcCategory?: DbcCategoryWhereUniqueInput | null;
  description?: string | null;
};
