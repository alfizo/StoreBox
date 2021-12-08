import { Address } from "../address/Address";
import { Product } from "../product/Product";
import { ReceivingProduct } from "../receivingProduct/ReceivingProduct";

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
  receivingProducts?: Array<ReceivingProduct>;
  updatedAt: Date;
};
