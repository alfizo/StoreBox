import { ArgsType, Field } from "@nestjs/graphql";
import { SupplierWhereUniqueInput } from "./SupplierWhereUniqueInput";

@ArgsType()
class DeleteSupplierArgs {
  @Field(() => SupplierWhereUniqueInput, { nullable: false })
  where!: SupplierWhereUniqueInput;
}

export { DeleteSupplierArgs };
