import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';

export interface IFileItemModel {
  metadata: FileItemMetadataModel;
  file: File;
  order: number;
}

export class FileItemModel implements IFileItemModel {
  metadata: FileItemMetadataModel;
  file: File;
  order: number;

  constructor(file: File) {
    this.file = file;
    this.metadata = new FileItemMetadataModel();
  }
}
