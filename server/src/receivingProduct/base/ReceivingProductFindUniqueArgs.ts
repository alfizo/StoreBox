import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingProductWhereUniqueInput } from "./ReceivingProductWhereUniqueInput";

@ArgsType()
class ReceivingProductFindUniqueArgs {
  @Field(() => ReceivingProductWhereUniqueInput, { nullable: false })
  where!: ReceivingProductWhereUniqueInput;
}

export { ReceivingProductFindUniqueArgs };
