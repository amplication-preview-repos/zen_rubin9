import { DbcParsedData } from "../dbcParsedData/DbcParsedData";

export type DbcCategory = {
  categoryName: string | null;
  createdAt: Date;
  dbcParsedDataItems?: Array<DbcParsedData>;
  id: string;
  updatedAt: Date;
};
