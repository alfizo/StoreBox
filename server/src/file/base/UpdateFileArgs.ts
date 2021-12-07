import { ArgsType, Field } from "@nestjs/graphql";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";
import { FileUpdateInput } from "./FileUpdateInput";

@ArgsType()
class UpdateFileArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  where!: FileWhereUniqueInput;
  @Field(() => FileUpdateInput, { nullable: false })
  data!: FileUpdateInput;
}

export { UpdateFileArgs };
