import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { ReceivingProduct } from "../receivingProduct/ReceivingProduct";
import { Supplier } from "../supplier/Supplier";

export type Product = {
  availableStock: number | null;
  brand: string | null;
  category?: Array<Category>;
  costPrice: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue | null;
  itemCode: string | null;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  receivingProducts?: Array<ReceivingProduct>;
  reorderLevel: number | null;
  size: string | null;
  supplier?: Array<Supplier>;
  updatedAt: Date;
};
