import { DbcParsedData as TDbcParsedData } from "../api/dbcParsedData/DbcParsedData";

export const DBCPARSEDDATA_TITLE_FIELD = "codeName";

export const DbcParsedDataTitle = (record: TDbcParsedData): string => {
  return record.codeName?.toString() || String(record.id);
};
