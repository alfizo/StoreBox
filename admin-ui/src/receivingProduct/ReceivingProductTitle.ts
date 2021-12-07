import { ReceivingProduct as TReceivingProduct } from "../api/receivingProduct/ReceivingProduct";

export const RECEIVINGPRODUCT_TITLE_FIELD = "id";

export const ReceivingProductTitle = (record: TReceivingProduct): string => {
  return record.id || record.id;
};
