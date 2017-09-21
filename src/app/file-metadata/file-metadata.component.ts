import { FileItemModel } from './../file-item/fileItemModel';
import { Component, Input } from '@angular/core';
import { ICodeList } from '../models/ICodeList';

@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.component.html'
})
export class FileMetadataComponent {
  @Input() categories: ICodeList[];
  @Input() sources: ICodeList[];
  @Input() baseSelection: FileItemModel;
}
