import { JsonValue } from "type-fest";

export type ProductCreateInput = {
  availableStock?: number | null;
  brand?: string | null;
  costPrice?: number | null;
  description?: string | null;
  image?: JsonValue | null;
  itemCode?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  reorderLevel?: number | null;
  size?: string | null;
};
