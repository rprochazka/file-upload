import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';

export interface IFileItemModel {
  metadata: FileItemMetadataModel;
  file: File;
  order: number;
  uploaded: boolean;
}

export class FileItemModel implements IFileItemModel {
  metadata: FileItemMetadataModel;
  file: File;
  order: number;
  uploaded = false;

  constructor(file: File) {
    this.file = file;
    this.metadata = new FileItemMetadataModel();
  }
}
