import { ArgsType, Field } from "@nestjs/graphql";
import { ReceivingProductWhereUniqueInput } from "./ReceivingProductWhereUniqueInput";
import { ReceivingProductUpdateInput } from "./ReceivingProductUpdateInput";

@ArgsType()
class UpdateReceivingProductArgs {
  @Field(() => ReceivingProductWhereUniqueInput, { nullable: false })
  where!: ReceivingProductWhereUniqueInput;
  @Field(() => ReceivingProductUpdateInput, { nullable: false })
  data!: ReceivingProductUpdateInput;
}

export { UpdateReceivingProductArgs };
