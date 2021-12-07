import { FileWhereUniqueInput } from "./FileWhereUniqueInput";
import { FileUpdateInput } from "./FileUpdateInput";

export type UpdateFileArgs = {
  where: FileWhereUniqueInput;
  data: FileUpdateInput;
};
