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
import { ReceivingProductService } from "../receivingProduct.service";
import { ReceivingProductCreateInput } from "./ReceivingProductCreateInput";
import { ReceivingProductWhereInput } from "./ReceivingProductWhereInput";
import { ReceivingProductWhereUniqueInput } from "./ReceivingProductWhereUniqueInput";
import { ReceivingProductFindManyArgs } from "./ReceivingProductFindManyArgs";
import { ReceivingProductUpdateInput } from "./ReceivingProductUpdateInput";
import { ReceivingProduct } from "./ReceivingProduct";
@swagger.ApiBearerAuth()
export class ReceivingProductControllerBase {
  constructor(
    protected readonly service: ReceivingProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ReceivingProduct })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ReceivingProductCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ReceivingProduct",
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
        `providing the properties: ${properties} on ${"ReceivingProduct"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
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
    resource: "ReceivingProduct",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ReceivingProduct] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ReceivingProductFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct[]> {
    const args = plainToClass(ReceivingProductFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReceivingProduct",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "ReceivingProduct",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ReceivingProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ReceivingProductWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ReceivingProduct",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateReceived: true,
        description: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        quantity: true,
        updatedAt: true,
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
    resource: "ReceivingProduct",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ReceivingProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ReceivingProductWhereUniqueInput,
    @common.Body()
    data: ReceivingProductUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReceivingProduct | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReceivingProduct",
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
        `providing the properties: ${properties} on ${"ReceivingProduct"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateReceived: true,
          description: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
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
    resource: "ReceivingProduct",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ReceivingProduct })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ReceivingProductWhereUniqueInput
  ): Promise<ReceivingProduct | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateReceived: true,
          description: true,
          id: true,

          product: {
            select: {
              id: true,
            },
          },

          quantity: true,
          updatedAt: true,
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
}
