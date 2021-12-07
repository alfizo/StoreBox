import { SortOrder } from "../../util/SortOrder";

export type ReceivingOrderByInput = {
  createdAt?: SortOrder;
  dateReceived?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  orderNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
