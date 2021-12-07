import { ArgsType, Field } from "@nestjs/graphql";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";
import { SupplierUpdateInput } from "./SupplierUpdateInput";

@ArgsType()
class UpdateSupplierArgs {
  @Field(() => SupplierWhereUniqueInput, { nullable: false })
  where!: SupplierWhereUniqueInput;
  @Field(() => SupplierUpdateInput, { nullable: false })
  data!: SupplierUpdateInput;
}

export { UpdateSupplierArgs };
