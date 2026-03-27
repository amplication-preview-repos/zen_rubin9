import { DbcParsedDataWhereInput } from "./DbcParsedDataWhereInput";
import { DbcParsedDataOrderByInput } from "./DbcParsedDataOrderByInput";

export type DbcParsedDataFindManyArgs = {
  where?: DbcParsedDataWhereInput;
  orderBy?: Array<DbcParsedDataOrderByInput>;
  skip?: number;
  take?: number;
};
