import { Supplier as TSupplier } from "../api/supplier/Supplier";

export const SUPPLIER_TITLE_FIELD = "name";

export const SupplierTitle = (record: TSupplier): string => {
  return record.name || record.id;
};
