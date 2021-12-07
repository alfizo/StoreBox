import { SortOrder } from "../../util/SortOrder";

export type ReceivingProductOrderByInput = {
  createdAt?: SortOrder;
  dateReceived?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
