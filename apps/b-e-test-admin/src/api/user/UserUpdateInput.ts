import { DbcParsedDataUpdateManyWithoutUsersInput } from "./DbcParsedDataUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  dbcParsedDataItems?: DbcParsedDataUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
