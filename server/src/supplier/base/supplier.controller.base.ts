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
import { SupplierService } from "../supplier.service";
import { SupplierCreateInput } from "./SupplierCreateInput";
import { SupplierWhereInput } from "./SupplierWhereInput";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierFindManyArgs } from "./SupplierFindManyArgs";
import { SupplierUpdateInput } from "./SupplierUpdateInput";
import { Supplier } from "./Supplier";
@swagger.ApiBearerAuth()
export class SupplierControllerBase {
  constructor(
    protected readonly service: SupplierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Supplier",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Supplier })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SupplierCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Supplier> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Supplier",
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
        `providing the properties: ${properties} on ${"Supplier"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        address: data.address
          ? {
              connect: data.address,
            }
          : undefined,
      },
      select: {
        account: true,

        address: {
          select: {
            id: true,
          },
        },

        companyRegistration: true,
        contactNumber: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
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
    resource: "Supplier",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Supplier] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => SupplierFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Supplier[]> {
    const args = plainToClass(SupplierFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Supplier",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        account: true,

        address: {
          select: {
            id: true,
          },
        },

        companyRegistration: true,
        contactNumber: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
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
    resource: "Supplier",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SupplierWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Supplier | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Supplier",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        account: true,

        address: {
          select: {
            id: true,
          },
        },

        companyRegistration: true,
        contactNumber: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,
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
    resource: "Supplier",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SupplierWhereUniqueInput,
    @common.Body()
    data: SupplierUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Supplier | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Supplier",
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
        `providing the properties: ${properties} on ${"Supplier"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          address: data.address
            ? {
                connect: data.address,
              }
            : undefined,
        },
        select: {
          account: true,

          address: {
            select: {
              id: true,
            },
          },

          companyRegistration: true,
          contactNumber: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
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
    resource: "Supplier",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Supplier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SupplierWhereUniqueInput
  ): Promise<Supplier | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          account: true,

          address: {
            select: {
              id: true,
            },
          },

          companyRegistration: true,
          contactNumber: true,
          createdAt: true,
          email: true,
          id: true,
          name: true,
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
