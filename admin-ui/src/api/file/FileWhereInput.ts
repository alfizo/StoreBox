import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReceivingWhereUniqueInput } from "../receiving/ReceivingWhereUniqueInput";

export type FileWhereInput = {
  cloudinaryUrl?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  receiving?: ReceivingWhereUniqueInput;
  sytemName?: StringNullableFilter;
};
