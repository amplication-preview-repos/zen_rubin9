import { DbcCategory } from "../dbcCategory/DbcCategory";

export type DbcParsedData = {
  codeName: string | null;
  codeValue: string | null;
  createdAt: Date;
  dbcCategory?: DbcCategory | null;
  description: string | null;
  id: string;
  updatedAt: Date;
};
