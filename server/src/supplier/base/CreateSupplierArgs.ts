import { ArgsType, Field } from "@nestjs/graphql";
import { SupplierCreateInput } from "./SupplierCreateInput";

@ArgsType()
class CreateSupplierArgs {
  @Field(() => SupplierCreateInput, { nullable: false })
  data!: SupplierCreateInput;
}

export { CreateSupplierArgs };
