import * as graphql from "@nestjs/graphql";
import { DbcCategoryResolverBase } from "./base/dbcCategory.resolver.base";
import { DbcCategory } from "./base/DbcCategory";
import { DbcCategoryService } from "./dbcCategory.service";

@graphql.Resolver(() => DbcCategory)
export class DbcCategoryResolver extends DbcCategoryResolverBase {
  constructor(protected readonly service: DbcCategoryService) {
    super(service);
  }
}
