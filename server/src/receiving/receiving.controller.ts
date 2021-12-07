import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReceivingService } from "./receiving.service";
import { ReceivingControllerBase } from "./base/receiving.controller.base";

@swagger.ApiTags("receivings")
@common.Controller("receivings")
export class ReceivingController extends ReceivingControllerBase {
  constructor(
    protected readonly service: ReceivingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
