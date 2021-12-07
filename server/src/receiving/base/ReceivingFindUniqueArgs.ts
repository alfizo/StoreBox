import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingWhereUniqueInput } from "./ReceivingWhereUniqueInput";

@ArgsType()
class ReceivingFindUniqueArgs {
  @Field(() => ReceivingWhereUniqueInput, { nullable: false })
  where!: ReceivingWhereUniqueInput;
}

export { ReceivingFindUniqueArgs };
