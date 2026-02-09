import { DbcCategoryWhereInput } from "./DbcCategoryWhereInput";
import { DbcCategoryOrderByInput } from "./DbcCategoryOrderByInput";

export type DbcCategoryFindManyArgs = {
  where?: DbcCategoryWhereInput;
  orderBy?: Array<DbcCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
