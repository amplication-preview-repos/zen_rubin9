import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DbcCategoryService } from "./dbcCategory.service";
import { DbcCategoryControllerBase } from "./base/dbcCategory.controller.base";

@swagger.ApiTags("dbcCategories")
@common.Controller("dbcCategories")
export class DbcCategoryController extends DbcCategoryControllerBase {
  constructor(protected readonly service: DbcCategoryService) {
    super(service);
  }
}
