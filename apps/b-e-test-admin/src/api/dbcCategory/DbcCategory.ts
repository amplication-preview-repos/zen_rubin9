import { DbcParsedData } from "../dbcParsedData/DbcParsedData";

export type DbcCategory = {
  categoryName: string | null;
  createdAt: Date;
  dbcParsedDataItems?: Array<DbcParsedData>;
  description: string | null;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
