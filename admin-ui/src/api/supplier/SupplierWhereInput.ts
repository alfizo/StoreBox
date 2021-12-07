import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  account?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
  companyRegistration?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
