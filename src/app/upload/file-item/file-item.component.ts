import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';
import { FileItemModel } from './fileItemModel';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, Output, EventEmitter } from '@angular/core';
import { SelectListItemModel } from 'app/shared/select-list/select-list-item.model';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit, OnChanges, DoCheck {

  @Input() fileItem: FileItemModel;
  @Input() categories: SelectListItemModel[];
  @Input() sources: SelectListItemModel[];
  @Input() licenses: SelectListItemModel[];
  @Input() seasons: SelectListItemModel[];
  @Input() teams: SelectListItemModel[];
  @Input() matches: SelectListItemModel[];
  @Input() articles: SelectListItemModel[];
  @Input() index: number;

  @Input() private baseSelection: FileItemMetadataModel;

  @Output() itemDelete: EventEmitter<FileItemModel> = new EventEmitter<FileItemModel>();

  url: string;
  useBaseSelection: boolean;
  currMatches: SelectListItemModel[];
  private differ: any;

  constructor(private differs: KeyValueDiffers) {
    this.differ = differs.find({}).create();
    this.useBaseSelection = true;
  }

  onUseBaseSelectionChanged() {
    this.fileItem.metadata = null;
    this.fileItem.metadata = this.useBaseSelection ? this.baseSelection : { ...this.baseSelection };
    if (this.useBaseSelection) {
      this.currMatches = this.matches;
    }
  }

  onNewMatchesLoaded(newMatches: SelectListItemModel[]) {
    if (!this.useBaseSelection) {
      this.currMatches = newMatches;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['baseSelection']) {
      this.fileItem.metadata = changes['baseSelection'].currentValue as FileItemMetadataModel;
    }
    if (changes['matches'] && this.useBaseSelection) {
      this.currMatches = changes['matches'].currentValue;
    }
    if (changes['index']) {
      this.fileItem.order = changes['index'].currentValue;
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
