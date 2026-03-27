import { DbcParsedData } from "../dbcParsedData/DbcParsedData";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  dbcParsedDataItems?: Array<DbcParsedData>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
