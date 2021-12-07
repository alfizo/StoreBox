import { Address } from "../address/Address";
import { Product } from "../product/Product";

export type Supplier = {
  account: string | null;
  address?: Address | null;
  companyRegistration: string | null;
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
