import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ReceivingService } from "../receiving.service";
import { ReceivingCreateInput } from "./ReceivingCreateInput";
import { ReceivingWhereInput } from "./ReceivingWhereInput";
import { ReceivingWhereUniqueInput } from "./ReceivingWhereUniqueInput";
import { ReceivingFindManyArgs } from "./ReceivingFindManyArgs";
import { ReceivingUpdateInput } from "./ReceivingUpdateInput";
import { Receiving } from "./Receiving";
import { FileWhereInput } from "../../file/base/FileWhereInput";
import { File } from "../../file/base/File";
@swagger.ApiBearerAuth()
export class ReceivingControllerBase {
  constructor(
    protected readonly service: ReceivingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Receiving })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ReceivingCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Receiving> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Receiving",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Receiving"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,
        orderNumber: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Receiving] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ReceivingFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Receiving[]> {
    const args = plainToClass(ReceivingFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Receiving",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,
        orderNumber: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Receiving })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ReceivingWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Receiving | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Receiving",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,
        orderNumber: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Receiving })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ReceivingWhereUniqueInput,
    @common.Body()
    data: ReceivingUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Receiving | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Receiving",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Receiving"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateReceived: true,
          description: true,
          id: true,
          orderNumber: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Receiving })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ReceivingWhereUniqueInput
  ): Promise<Receiving | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateReceived: true,
          description: true,
          id: true,
          orderNumber: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/files")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => FileWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyFiles(
    @common.Req() request: Request,
    @common.Param() params: ReceivingWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<File[]> {
    const query: FileWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "File",
    });
    const results = await this.service.findFiles(params.id, {
      where: query,
      select: {
        cloudinaryUrl: true,
        createdAt: true,
        id: true,
        name: true,

        receiving: {
          select: {
            id: true,
          },
        },

        sytemName: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/files")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "update",
    possession: "any",
  })
  async createFiles(
    @common.Param() params: ReceivingWhereUniqueInput,
    @common.Body() body: ReceivingWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      files: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Receiving",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Receiving"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/files")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "update",
    possession: "any",
  })
  async updateFiles(
    @common.Param() params: ReceivingWhereUniqueInput,
    @common.Body() body: ReceivingWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      files: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Receiving",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Receiving"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/files")
  @nestAccessControl.UseRoles({
    resource: "Receiving",
    action: "update",
    possession: "any",
  })
  async deleteFiles(
    @common.Param() params: ReceivingWhereUniqueInput,
    @common.Body() body: ReceivingWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      files: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Receiving",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Receiving"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
