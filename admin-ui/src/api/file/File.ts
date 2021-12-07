import { Receiving } from "../receiving/Receiving";

export type File = {
  cloudinaryUrl: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  receiving?: Receiving | null;
  sytemName: string | null;
  updatedAt: Date;
};
