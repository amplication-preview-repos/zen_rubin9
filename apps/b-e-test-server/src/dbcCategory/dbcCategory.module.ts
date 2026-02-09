import { Module } from "@nestjs/common";
import { DbcCategoryModuleBase } from "./base/dbcCategory.module.base";
import { DbcCategoryService } from "./dbcCategory.service";
import { DbcCategoryController } from "./dbcCategory.controller";
import { DbcCategoryResolver } from "./dbcCategory.resolver";

@Module({
  imports: [DbcCategoryModuleBase],
  controllers: [DbcCategoryController],
  providers: [DbcCategoryService, DbcCategoryResolver],
  exports: [DbcCategoryService],
})
export class DbcCategoryModule {}
