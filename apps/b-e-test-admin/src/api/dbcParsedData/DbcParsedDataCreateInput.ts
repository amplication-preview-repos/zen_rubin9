import { DbcCategoryWhereUniqueInput } from "../dbcCategory/DbcCategoryWhereUniqueInput";

export type DbcParsedDataCreateInput = {
  codeName?: string | null;
  codeValue?: string | null;
  dbcCategory?: DbcCategoryWhereUniqueInput | null;
  description?: string | null;
};
