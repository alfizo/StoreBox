import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FileWhereInput } from "./FileWhereInput";
import { Type } from "class-transformer";
import { FileOrderByInput } from "./FileOrderByInput";

@ArgsType()
class FileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FileWhereInput,
  })
  @Field(() => FileWhereInput, { nullable: true })
  @Type(() => FileWhereInput)
  where?: FileWhereInput;

  @ApiProperty({
    required: false,
    type: FileOrderByInput,
  })
  @Field(() => FileOrderByInput, { nullable: true })
  @Type(() => FileOrderByInput)
  orderBy?: FileOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FileFindManyArgs };
