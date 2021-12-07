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
import { CreateReceivingArgs } from "./CreateReceivingArgs";
import { UpdateReceivingArgs } from "./UpdateReceivingArgs";
import { DeleteReceivingArgs } from "./DeleteReceivingArgs";
import { ReceivingFindManyArgs } from "./ReceivingFindManyArgs";
import { ReceivingFindUniqueArgs } from "./ReceivingFindUniqueArgs";
import { Receiving } from "./Receiving";
import { User } from "../../user/base/User";
import { ReceivingService } from "../receiving.service";

@graphql.Resolver(() => Receiving)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReceivingResolverBase {
  constructor(
    protected readonly service: ReceivingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "any",
  })
  async _receivingsMeta(
    @graphql.Args() args: ReceivingFindManyArgs
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

  @graphql.Query(() => [Receiving])
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "any",
  })
  async receivings(
    @graphql.Args() args: ReceivingFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Receiving[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Receiving",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Receiving, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "own",
  })
  async receiving(
    @graphql.Args() args: ReceivingFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Receiving | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Receiving",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Receiving)
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "create",
    possession: "any",
  })
  async createReceiving(
    @graphql.Args() args: CreateReceivingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Receiving> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Receiving",
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
        `providing the properties: ${properties} on ${"Receiving"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Receiving)
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "update",
    possession: "any",
  })
  async updateReceiving(
    @graphql.Args() args: UpdateReceivingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Receiving | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Receiving",
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
        `providing the properties: ${properties} on ${"Receiving"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => Receiving)
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "delete",
    possession: "any",
  })
  async deleteReceiving(
    @graphql.Args() args: DeleteReceivingArgs
  ): Promise<Receiving | null> {
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

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Receiving,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
