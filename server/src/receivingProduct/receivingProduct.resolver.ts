import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReceivingProductResolverBase } from "./base/receivingProduct.resolver.base";
import { ReceivingProduct } from "./base/ReceivingProduct";
import { ReceivingProductService } from "./receivingProduct.service";

@graphql.Resolver(() => ReceivingProduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReceivingProductResolver extends ReceivingProductResolverBase {
  constructor(
    protected readonly service: ReceivingProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
