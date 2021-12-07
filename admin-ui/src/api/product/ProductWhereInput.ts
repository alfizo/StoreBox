import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type ProductWhereInput = {
  availableStock?: IntNullableFilter;
  brand?: StringNullableFilter;
  costPrice?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonNullableFilter;
  itemCode?: StringNullableFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  reorderLevel?: IntNullableFilter;
  size?: StringNullableFilter;
};
