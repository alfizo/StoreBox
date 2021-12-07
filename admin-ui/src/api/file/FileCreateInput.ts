import { ReceivingWhereUniqueInput } from "../receiving/ReceivingWhereUniqueInput";

export type FileCreateInput = {
  cloudinaryUrl?: string | null;
  name?: string | null;
  receiving?: ReceivingWhereUniqueInput | null;
  sytemName?: string | null;
};
