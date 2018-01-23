import { ICodeList } from './../models/ICodeList';
import { CodeListService } from './../services/code-list.service';
import { FileItemMetadataModel } from './fileItemMetadataModel';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyEnums } from './../shared/selected-gallery-type-enum';

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
  @Input() articles: ICodeList[];
  @Input() baseSelection: FileItemMetadataModel;
  @Input() disabled: boolean;
  @Input() index: number;
  @Output() newMatchesLoaded: EventEmitter<ICodeList[]> = new EventEmitter<ICodeList[]>();

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
      this.baseSelection.selectedGalleryType = MyEnums.SelectedGalleryTypeEnum.Match;
    } else {
      this.baseSelection.selectedGalleryType = MyEnums.SelectedGalleryTypeEnum.Article;
    }
  }

  showMatchGalleryProperties(): boolean {
    return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === MyEnums.SelectedGalleryTypeEnum.Match;
  }

  showArticleGalleryProperties(): boolean {
    return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === MyEnums.SelectedGalleryTypeEnum.Article;
  }
}
