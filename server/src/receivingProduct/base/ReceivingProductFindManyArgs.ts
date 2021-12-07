import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReceivingProductWhereInput } from "./ReceivingProductWhereInput";
import { Type } from "class-transformer";
import { ReceivingProductOrderByInput } from "./ReceivingProductOrderByInput";

@ArgsType()
class ReceivingProductFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReceivingProductWhereInput,
  })
  @Field(() => ReceivingProductWhereInput, { nullable: true })
  @Type(() => ReceivingProductWhereInput)
  where?: ReceivingProductWhereInput;

  @ApiProperty({
    required: false,
    type: ReceivingProductOrderByInput,
  })
  @Field(() => ReceivingProductOrderByInput, { nullable: true })
  @Type(() => ReceivingProductOrderByInput)
  orderBy?: ReceivingProductOrderByInput;

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

export { ReceivingProductFindManyArgs };
