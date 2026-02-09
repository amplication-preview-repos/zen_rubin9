import { DbcParsedDataListRelationFilter } from "../dbcParsedData/DbcParsedDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeviceWhereInput = {
  dbcParsedDataItems?: DbcParsedDataListRelationFilter;
  description?: StringNullableFilter;
  deviceName?: StringNullableFilter;
  id?: StringFilter;
};
