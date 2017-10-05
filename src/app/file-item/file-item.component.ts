import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';
import { FileItemModel } from './fileItemModel';
import { ICodeList } from './../models/ICodeList';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit, OnChanges, DoCheck {

  @Input() fileItem: FileItemModel;
  @Input() categories: ICodeList[];
  @Input() sources: ICodeList[];
  @Input() licenses: ICodeList[];
  @Input() seasons: ICodeList[];
  @Input() teams: ICodeList[];
  @Input() matches: ICodeList[];
  @Input() index: number;

  @Input() private baseSelection: FileItemMetadataModel;

  @Output() itemDelete: EventEmitter<FileItemModel> = new EventEmitter<FileItemModel>();

  url: string;
  useBaseSelection: boolean;
  private differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
    this.useBaseSelection = true;
  }

  onUseBaseSelectionChanged() {
    this.fileItem.metadata = null;
    this.fileItem.metadata = this.useBaseSelection ? this.baseSelection : this.baseSelection.clone();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['baseSelection']) {
      this.fileItem.metadata = changes['baseSelection'].currentValue as FileItemMetadataModel;
    }
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.fileItem.metadata);

    if (changes) {
      changes.forEachChangedItem(r => {
        this.fileItem.metadata[r.key] = r.currentValue;
      });

    }
  }

  ngOnInit(): void {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(this.fileItem.file);
  }

  onDeleteItem() {
    this.itemDelete.emit(this.fileItem);
  }

}
