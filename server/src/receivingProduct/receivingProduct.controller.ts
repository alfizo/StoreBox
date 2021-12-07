import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReceivingProductService } from "./receivingProduct.service";
import { ReceivingProductControllerBase } from "./base/receivingProduct.controller.base";

@swagger.ApiTags("receiving-products")
@common.Controller("receiving-products")
export class ReceivingProductController extends ReceivingProductControllerBase {
  constructor(
    protected readonly service: ReceivingProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
