import { DbcParsedDataCreateNestedManyWithoutUsersInput } from "./DbcParsedDataCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  dbcParsedDataItems?: DbcParsedDataCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
