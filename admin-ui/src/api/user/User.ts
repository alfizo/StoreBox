import { Receiving } from "../receiving/Receiving";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  receivings?: Array<Receiving>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
