import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReceivingResolverBase } from "./base/receiving.resolver.base";
import { Receiving } from "./base/Receiving";
import { ReceivingService } from "./receiving.service";

@graphql.Resolver(() => Receiving)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReceivingResolver extends ReceivingResolverBase {
  constructor(
    protected readonly service: ReceivingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
