import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingCreateInput } from "./ReceivingCreateInput";

@ArgsType()
class CreateReceivingArgs {
  @Field(() => ReceivingCreateInput, { nullable: false })
  data!: ReceivingCreateInput;
}

export { CreateReceivingArgs };
