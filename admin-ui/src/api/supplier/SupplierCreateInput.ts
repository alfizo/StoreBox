import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type SupplierCreateInput = {
  account?: string | null;
  address?: AddressWhereUniqueInput | null;
  companyRegistration?: string | null;
  contactNumber?: string | null;
  email?: string | null;
  name?: string | null;
};
