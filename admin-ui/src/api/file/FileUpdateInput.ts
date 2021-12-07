import { ReceivingWhereUniqueInput } from "../receiving/ReceivingWhereUniqueInput";

export type FileUpdateInput = {
  cloudinaryUrl?: string | null;
  name?: string | null;
  receiving?: ReceivingWhereUniqueInput | null;
  sytemName?: string | null;
};
