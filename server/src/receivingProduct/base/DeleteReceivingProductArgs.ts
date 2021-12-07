import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingProductWhereUniqueInput } from "./ReceivingProductWhereUniqueInput";

@ArgsType()
class DeleteReceivingProductArgs {
  @Field(() => ReceivingProductWhereUniqueInput, { nullable: false })
  where!: ReceivingProductWhereUniqueInput;
}

export { DeleteReceivingProductArgs };
