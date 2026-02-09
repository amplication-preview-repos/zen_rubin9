import * as graphql from "@nestjs/graphql";
import { DbcParsedDataResolverBase } from "./base/dbcParsedData.resolver.base";
import { DbcParsedData } from "./base/DbcParsedData";
import { DbcParsedDataService } from "./dbcParsedData.service";

@graphql.Resolver(() => DbcParsedData)
export class DbcParsedDataResolver extends DbcParsedDataResolverBase {
  constructor(protected readonly service: DbcParsedDataService) {
    super(service);
  }
}
