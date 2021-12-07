import { File as TFile } from "../api/file/File";

export const FILE_TITLE_FIELD = "name";

export const FileTitle = (record: TFile): string => {
  return record.name || record.id;
};
