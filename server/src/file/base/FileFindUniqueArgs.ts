import { ArgsType, Field } from "@nestjs/graphql";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";

@ArgsType()
class FileFindUniqueArgs {
  @Field(() => FileWhereUniqueInput, { nullable: false })
  where!: FileWhereUniqueInput;
}

export { FileFindUniqueArgs };
