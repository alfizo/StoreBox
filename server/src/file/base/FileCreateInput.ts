import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ReceivingWhereUniqueInput } from "../../receiving/base/ReceivingWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class FileCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cloudinaryUrl?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReceivingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReceivingWhereUniqueInput)
  @IsOptional()
  @Field(() => ReceivingWhereUniqueInput, {
    nullable: true,
  })
  receiving?: ReceivingWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sytemName?: string | null;
}
export { FileCreateInput };
