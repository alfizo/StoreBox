import { Receiving } from "../receiving/Receiving";

export type User = {
  contactNumber: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  receivings?: Array<Receiving>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
