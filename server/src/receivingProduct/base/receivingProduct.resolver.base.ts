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
import { CreateReceivingProductArgs } from "./CreateReceivingProductArgs";
import { UpdateReceivingProductArgs } from "./UpdateReceivingProductArgs";
import { DeleteReceivingProductArgs } from "./DeleteReceivingProductArgs";
import { ReceivingProductFindManyArgs } from "./ReceivingProductFindManyArgs";
import { ReceivingProductFindUniqueArgs } from "./ReceivingProductFindUniqueArgs";
import { ReceivingProduct } from "./ReceivingProduct";
import { SupplierFindManyArgs } from "../../supplier/base/SupplierFindManyArgs";
import { Supplier } from "../../supplier/base/Supplier";
import { Product } from "../../product/base/Product";
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
    action: "create",
    possession: "any",
  })
  async createReceivingProduct(
    @graphql.Args() args: CreateReceivingProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ReceivingProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ReceivingProduct"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ReceivingProduct)
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "update",
    possession: "any",
  })
  async updateReceivingProduct(
    @graphql.Args() args: UpdateReceivingProductArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReceivingProduct",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"ReceivingProduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
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

  @graphql.ResolveField(() => [Supplier])
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "any",
  })
  async supplier(
    @graphql.Parent() parent: ReceivingProduct,
    @graphql.Args() args: SupplierFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Supplier[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Supplier",
    });
    const results = await this.service.findSupplier(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Product, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "any",
  })
  async product(
    @graphql.Parent() parent: ReceivingProduct,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Product | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Product",
    });
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
