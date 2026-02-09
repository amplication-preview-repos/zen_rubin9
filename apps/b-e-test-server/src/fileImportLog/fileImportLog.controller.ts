import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileImportLogService } from "./fileImportLog.service";
import { FileImportLogControllerBase } from "./base/fileImportLog.controller.base";

@swagger.ApiTags("fileImportLogs")
@common.Controller("fileImportLogs")
export class FileImportLogController extends FileImportLogControllerBase {
  constructor(protected readonly service: FileImportLogService) {
    super(service);
  }
}
