import { DbcParsedDataListRelationFilter } from "../dbcParsedData/DbcParsedDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FileImportLogWhereInput = {
  dbcParsedDataItems?: DbcParsedDataListRelationFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
  importStatus?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
};
