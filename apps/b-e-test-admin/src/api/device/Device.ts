import { DbcParsedData } from "../dbcParsedData/DbcParsedData";

export type Device = {
  createdAt: Date;
  dbcParsedDataItems?: Array<DbcParsedData>;
  description: string | null;
  deviceName: string | null;
  id: string;
  updatedAt: Date;
};
