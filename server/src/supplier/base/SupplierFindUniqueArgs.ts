import { ArgsType, Field } from "@nestjs/graphql";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";

@ArgsType()
class SupplierFindUniqueArgs {
  @Field(() => SupplierWhereUniqueInput, { nullable: false })
  where!: SupplierWhereUniqueInput;
}

export { SupplierFindUniqueArgs };
