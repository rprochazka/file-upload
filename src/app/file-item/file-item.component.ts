import { FileItemModel } from './fileItemModel';
import { ICodeList } from './../models/ICodeList';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit, OnChanges, DoCheck {

  @Input() private file: File;
  @Input() categories: ICodeList[];
  @Input() sources: ICodeList[];
  @Input() index: number;

  @Input() baseSelection: FileItemModel;

  @Output() itemDelete: EventEmitter<File> = new EventEmitter<File>();

  url: string;
  useBaseSelection: boolean;
  selectionModel: FileItemModel;
  private differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create(null);
    this.selectionModel = this.baseSelection;
    this.useBaseSelection = true;
  }

  onUseBaseSelectionChanged() {
    this.selectionModel = this.useBaseSelection ? this.baseSelection : new FileItemModel();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['baseSelection']) {
      console.log(JSON.stringify(changes['baseSelection']))
      this.selectionModel = changes['baseSelection'].currentValue as FileItemModel;
    }
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.selectionModel);

    if (changes) {
      changes.forEachChangedItem(r => {
        this.selectionModel[r.key] = r.currentValue;
      });

    }
  }

  ngOnInit(): void {
    const reader = new FileReader();

    reader.onload = (event: any) => {
      this.url = event.target.result;
    }

    reader.readAsDataURL(this.file);
  }

  onDeleteItem() {
    this.itemDelete.emit(this.file);
  }

}
