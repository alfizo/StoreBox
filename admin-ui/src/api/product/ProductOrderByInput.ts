import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  availableStock?: SortOrder;
  brand?: SortOrder;
  costPrice?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  itemCode?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  reorderLevel?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
