import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingWhereUniqueInput } from "./ReceivingWhereUniqueInput";

@ArgsType()
class DeleteReceivingArgs {
  @Field(() => ReceivingWhereUniqueInput, { nullable: false })
  where!: ReceivingWhereUniqueInput;
}

export { DeleteReceivingArgs };
