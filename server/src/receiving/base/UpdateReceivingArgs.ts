import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingWhereUniqueInput } from "./ReceivingWhereUniqueInput";
import { ReceivingUpdateInput } from "./ReceivingUpdateInput";

@ArgsType()
class UpdateReceivingArgs {
  @Field(() => ReceivingWhereUniqueInput, { nullable: false })
  where!: ReceivingWhereUniqueInput;
  @Field(() => ReceivingUpdateInput, { nullable: false })
  data!: ReceivingUpdateInput;
}

export { UpdateReceivingArgs };
