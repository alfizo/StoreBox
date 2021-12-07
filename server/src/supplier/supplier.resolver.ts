import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SupplierResolverBase } from "./base/supplier.resolver.base";
import { Supplier } from "./base/Supplier";
import { SupplierService } from "./supplier.service";

@graphql.Resolver(() => Supplier)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SupplierResolver extends SupplierResolverBase {
  constructor(
    protected readonly service: SupplierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
