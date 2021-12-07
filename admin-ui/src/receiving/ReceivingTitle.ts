import { Receiving as TReceiving } from "../api/receiving/Receiving";

export const RECEIVING_TITLE_FIELD = "orderNumber";

export const ReceivingTitle = (record: TReceiving): string => {
  return record.orderNumber || record.id;
};
