import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReceivingCreateInput = {
  dateReceived?: Date | null;
  description?: string | null;
  orderNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
