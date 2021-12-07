import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReceivingProductCreateInput = {
  dateReceived?: Date | null;
  description?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
