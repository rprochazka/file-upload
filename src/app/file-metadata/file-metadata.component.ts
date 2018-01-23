import { ICodeList } from './../models/ICodeList';
import { CodeListService } from './../services/code-list.service';
import { FileItemMetadataModel } from './fileItemMetadataModel';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() newMatchesLoaded: EventEmitter<ICodeList[]> = new EventEmitter<ICodeList[]>();

  constructor(private codeListService: CodeListService) { }

  loadNewMatches() {
    const seasonId = this.baseSelection.selectedSeason;
    const teamId = this.baseSelection.selectedTeam;
    if (seasonId && teamId) {
      this.codeListService.getMatches(seasonId, teamId).subscribe(resp => {
        this.newMatchesLoaded.emit(resp);
      })
    } else {
      this.newMatchesLoaded.emit(null);
    }
  }

  

}
