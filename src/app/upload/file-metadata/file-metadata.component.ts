import { CodeListService } from './../services/code-list.service';
import { FileItemMetadataModel } from './fileItemMetadataModel';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryTypeEnum } from '../models/gallery-type-enum';
import { SelectListItemModel } from 'app/shared/select-list/select-list-item.model';

@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.component.html'
})
export class FileMetadataComponent {
  @Input() categories: SelectListItemModel[];
  @Input() sources: SelectListItemModel[];
  @Input() licenses: SelectListItemModel[];
  @Input() seasons: SelectListItemModel[];
  @Input() teams: SelectListItemModel[];
  @Input() matches: SelectListItemModel[];
  @Input() articles: SelectListItemModel[];
  @Input() baseSelection: FileItemMetadataModel;
  @Input() disabled: boolean;
  @Input() index: number;
  @Output() newMatchesLoaded: EventEmitter<SelectListItemModel[]> = new EventEmitter<SelectListItemModel[]>();

  constructor(private codeListService: CodeListService) { }

  loadNewMatches() {
    const seasonId = this.baseSelection.selectedSeason;
    const teamId = this.baseSelection.selectedTeam;
    if (seasonId && teamId) {
      this.codeListService.getMatches(seasonId, teamId).subscribe(resp => {
        this.newMatchesLoaded.emit(resp);
      });
    } else {
      this.newMatchesLoaded.emit(null);
    }
  }

  galleryTypeChange(type: string): void {
    if (type === 'match') {
      this.baseSelection.selectedGalleryType = GalleryTypeEnum.Match;
    } else {
      this.baseSelection.selectedGalleryType = GalleryTypeEnum.Article;
    }
  }

  showMatchGalleryProperties(): boolean {
    return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === GalleryTypeEnum.Match;
  }

  showArticleGalleryProperties(): boolean {
    return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === GalleryTypeEnum.Article;
  }
}
