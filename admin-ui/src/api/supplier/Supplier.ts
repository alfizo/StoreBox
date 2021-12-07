import { Address } from "../address/Address";

export type Supplier = {
  account: string | null;
  address?: Address | null;
  companyRegistration: string | null;
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
