import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SupplierWhereInput } from "./SupplierWhereInput";
import { Type } from "class-transformer";
import { SupplierOrderByInput } from "./SupplierOrderByInput";

@ArgsType()
class SupplierFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SupplierWhereInput,
  })
  @Field(() => SupplierWhereInput, { nullable: true })
  @Type(() => SupplierWhereInput)
  where?: SupplierWhereInput;

  @ApiProperty({
    required: false,
    type: SupplierOrderByInput,
  })
  @Field(() => SupplierOrderByInput, { nullable: true })
  @Type(() => SupplierOrderByInput)
  orderBy?: SupplierOrderByInput;

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

export { SupplierFindManyArgs };
