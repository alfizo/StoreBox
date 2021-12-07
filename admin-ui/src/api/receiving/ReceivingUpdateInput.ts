import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReceivingUpdateInput = {
  dateReceived?: Date | null;
  description?: string | null;
  orderNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
