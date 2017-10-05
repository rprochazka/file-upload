import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';

export class FileItemModel {
  metadata: FileItemMetadataModel;
  file: File;

  constructor(file: File) {
    this.file = file;
    this.metadata = new FileItemMetadataModel()
  }
}
