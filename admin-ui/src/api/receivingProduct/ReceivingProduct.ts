import { Product } from "../product/Product";

export type ReceivingProduct = {
  createdAt: Date;
  dateReceived: Date | null;
  description: string | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
