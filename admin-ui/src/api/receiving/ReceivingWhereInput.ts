import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReceivingWhereInput = {
  dateReceived?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  orderNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
