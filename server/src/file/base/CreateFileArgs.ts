import { ArgsType, Field } from "@nestjs/graphql";
import { FileCreateInput } from "./FileCreateInput";

@ArgsType()
class CreateFileArgs {
  @Field(() => FileCreateInput, { nullable: false })
  data!: FileCreateInput;
}

export { CreateFileArgs };
