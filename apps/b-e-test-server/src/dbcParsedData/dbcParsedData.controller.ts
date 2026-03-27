import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DbcParsedDataService } from "./dbcParsedData.service";
import { DbcParsedDataControllerBase } from "./base/dbcParsedData.controller.base";

@swagger.ApiTags("dbcParsedData")
@common.Controller("dbcParsedData")
export class DbcParsedDataController extends DbcParsedDataControllerBase {
  constructor(protected readonly service: DbcParsedDataService) {
    super(service);
  }
}
