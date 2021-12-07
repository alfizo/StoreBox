import { File } from "../file/File";
import { User } from "../user/User";

export type Receiving = {
  createdAt: Date;
  dateReceived: Date | null;
  description: string | null;
  files?: Array<File>;
  id: string;
  orderNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
