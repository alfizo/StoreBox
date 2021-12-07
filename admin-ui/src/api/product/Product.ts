import { Order } from "../order/Order";
import { ReceivingProduct } from "../receivingProduct/ReceivingProduct";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  receivingProducts?: Array<ReceivingProduct>;
  updatedAt: Date;
};
