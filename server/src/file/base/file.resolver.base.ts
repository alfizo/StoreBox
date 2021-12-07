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
import { CreateFileArgs } from "./CreateFileArgs";
import { UpdateFileArgs } from "./UpdateFileArgs";
import { DeleteFileArgs } from "./DeleteFileArgs";
import { FileFindManyArgs } from "./FileFindManyArgs";
import { FileFindUniqueArgs } from "./FileFindUniqueArgs";
import { File } from "./File";
import { Receiving } from "../../receiving/base/Receiving";
import { FileService } from "../file.service";

@graphql.Resolver(() => File)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FileResolverBase {
  constructor(
    protected readonly service: FileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async _filesMeta(
    @graphql.Args() args: FileFindManyArgs
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

  @graphql.Query(() => [File])
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async files(
    @graphql.Args() args: FileFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<File[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "File",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => File, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "own",
  })
  async file(
    @graphql.Args() args: FileFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<File | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "File",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "create",
    possession: "any",
  })
  async createFile(
    @graphql.Args() args: CreateFileArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<File> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "File",
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
        `providing the properties: ${properties} on ${"File"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        receiving: args.data.receiving
          ? {
              connect: args.data.receiving,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "update",
    possession: "any",
  })
  async updateFile(
    @graphql.Args() args: UpdateFileArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<File | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "File",
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
        `providing the properties: ${properties} on ${"File"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          receiving: args.data.receiving
            ? {
                connect: args.data.receiving,
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

  @graphql.Mutation(() => File)
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "delete",
    possession: "any",
  })
  async deleteFile(@graphql.Args() args: DeleteFileArgs): Promise<File | null> {
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

  @graphql.ResolveField(() => Receiving, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "File",
    action: "read",
    possession: "any",
  })
  async receiving(
    @graphql.Parent() parent: File,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Receiving | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Receiving",
    });
    const result = await this.service.getReceiving(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
