import { ArgsType, Field } from "@nestjs/graphql";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@ArgsType()
class DeleteFileArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  where!: FileWhereUniqueInput;
}

export { DeleteFileArgs };
