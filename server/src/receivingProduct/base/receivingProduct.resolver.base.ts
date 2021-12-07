import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteReceivingProductArgs } from "./DeleteReceivingProductArgs";
import { ReceivingProductFindManyArgs } from "./ReceivingProductFindManyArgs";
import { ReceivingProductFindUniqueArgs } from "./ReceivingProductFindUniqueArgs";
import { ReceivingProduct } from "./ReceivingProduct";
import { ReceivingProductService } from "../receivingProduct.service";

@graphql.Resolver(() => ReceivingProduct)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReceivingProductResolverBase {
  constructor(
    protected readonly service: ReceivingProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "any",
  })
  async _receivingProductsMeta(
    @graphql.Args() args: ReceivingProductFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [ReceivingProduct])
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "any",
  })
  async receivingProducts(
    @graphql.Args() args: ReceivingProductFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReceivingProduct",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ReceivingProduct, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "own",
  })
  async receivingProduct(
    @graphql.Args() args: ReceivingProductFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ReceivingProduct",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ReceivingProduct)
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "delete",
    possession: "any",
  })
  async deleteReceivingProduct(
    @graphql.Args() args: DeleteReceivingProductArgs
  ): Promise<ReceivingProduct | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
