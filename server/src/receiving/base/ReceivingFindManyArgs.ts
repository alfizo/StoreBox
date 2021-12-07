import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReceivingWhereInput } from "./ReceivingWhereInput";
import { Type } from "class-transformer";
import { ReceivingOrderByInput } from "./ReceivingOrderByInput";

@ArgsType()
class ReceivingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReceivingWhereInput,
  })
  @Field(() => ReceivingWhereInput, { nullable: true })
  @Type(() => ReceivingWhereInput)
  where?: ReceivingWhereInput;

  @ApiProperty({
    required: false,
    type: ReceivingOrderByInput,
  })
  @Field(() => ReceivingOrderByInput, { nullable: true })
  @Type(() => ReceivingOrderByInput)
  orderBy?: ReceivingOrderByInput;

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

export { ReceivingFindManyArgs };
