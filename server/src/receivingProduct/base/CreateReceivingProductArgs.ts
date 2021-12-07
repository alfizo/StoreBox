import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingProductCreateInput } from "./ReceivingProductCreateInput";

@ArgsType()
class CreateReceivingProductArgs {
  @Field(() => ReceivingProductCreateInput, { nullable: false })
  data!: ReceivingProductCreateInput;
}

export { CreateReceivingProductArgs };
