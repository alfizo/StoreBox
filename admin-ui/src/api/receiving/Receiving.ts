import { User } from "../user/User";

export type Receiving = {
  createdAt: Date;
  dateReceived: Date | null;
  description: string | null;
  id: string;
  orderNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
