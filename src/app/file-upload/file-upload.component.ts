import { UploadService } from './../services/upload.service';
import { Observable } from 'rxjs/Rx';
import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';
import { FileItemModel } from './../file-item/fileItemModel';
import { ICodeList } from './../models/ICodeList';
import { CodeListService } from './../services/code-list.service';
import { Component, OnInit } from '@angular/core';
import { Global } from './../global';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileItems: FileItemModel[] = new Array<FileItemModel>();
  categories: ICodeList[];
  sources: ICodeList[];
  licenses: ICodeList[];
  seasons: ICodeList[];
  teams: ICodeList[];
  matches: ICodeList[];
  baseMetadata: FileItemMetadataModel = new FileItemMetadataModel()

  constructor(private codeListService: CodeListService, private uploadService: UploadService, private global: Global) { }

  public uploadUri: string = this.global.uploadEndpoint;
  public dataUri: string = this.global.dataEndpoint;

  ngOnInit(): void {
    this.codeListService.getCategories().subscribe(resp => {
      this.categories = resp;
    });

    this.codeListService.getSources().subscribe(resp => {
      this.sources = resp;
    });

    this.codeListService.getLicenses().subscribe(resp => {
      this.licenses = resp;
    });

    this.codeListService.getSeasons().subscribe(resp => {
      this.seasons = resp;
    });

    this.codeListService.getTeams().subscribe(resp => {
      this.teams = resp;
    });
  }

  onNewMatchesLoaded(newMatches: ICodeList[]) {
    this.matches = newMatches;
  }

  fileSelected(event): void {
    const fileList = event.target.files;
    if (fileList) {
      Object.keys(fileList).forEach(key => {
        this.fileItems.push(new FileItemModel(fileList[key]));
      });
    }
  }

  onFileDelete(fileItem: FileItemModel) {
    this.fileItems = this.fileItems.filter(i => i !== fileItem);
  }

  onUpload() {
    console.log(this.fileItems);
    Observable.from(this.fileItems)
      .mergeMap(fileItem => {
        const formData: FormData = new FormData()
        for (const name in fileItem.metadata) {
          if (typeof (fileItem.metadata[name]) !== 'function') {
            formData.append(name, fileItem.metadata[name]);
          }
        }
        formData.append('file', fileItem.file);
        return this.uploadService.uploadFileItem(formData);
      })
      .subscribe((resp) => {
        console.log('File item sent');
      });
  }
}


