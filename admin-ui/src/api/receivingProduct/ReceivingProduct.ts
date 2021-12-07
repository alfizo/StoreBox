import { Product } from "../product/Product";
import { Supplier } from "../supplier/Supplier";

export type ReceivingProduct = {
  createdAt: Date;
  dateReceived: Date | null;
  description: string | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  supplier?: Array<Supplier>;
  updatedAt: Date;
};
