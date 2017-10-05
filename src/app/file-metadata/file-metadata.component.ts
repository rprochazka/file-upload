import { FileItemMetadataModel } from './fileItemMetadataModel';
import { Component, Input } from '@angular/core';
import { ICodeList } from '../models/ICodeList';

@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.component.html'
})
export class FileMetadataComponent {
  @Input() categories: ICodeList[];
  @Input() sources: ICodeList[];
  @Input() licenses: ICodeList[];
  @Input() seasons: ICodeList[];
  @Input() teams: ICodeList[];
  @Input() matches: ICodeList[];
  @Input() baseSelection: FileItemMetadataModel;
  @Input() disabled: boolean;
}
