import { UploadService } from './../services/upload.service';
import { Observable } from 'rxjs/Rx';
import { FileItemMetadataModel } from './../file-metadata/fileItemMetadataModel';
import { FileItemModel } from './../file-item/fileItemModel';
import { ICodeList } from './../models/ICodeList';
import { MyService } from './../services/service';
import { Component, OnInit } from '@angular/core';


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

  constructor(private myService: MyService, private uploadService: UploadService) { }

  ngOnInit(): void {
    this.myService.getCategories().subscribe(resp => {
      this.categories = resp;
    });

    this.myService.getSources().subscribe(resp => {
      this.sources = resp;
    })

    this.myService.getLicenses().subscribe(resp => {
      this.licenses = resp;
    })

    this.myService.getSeasons().subscribe(resp => {
      this.seasons = resp;
    })

    this.myService.getTeams().subscribe(resp => {
      this.teams = resp;
    })

    this.myService.getMatches().subscribe(resp => {
      this.matches = resp;
    })
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
            formData.append(name, fileItem.metadata[name])
          }
        }
        formData.append('file', fileItem.file);
        return this.uploadService.uploadFileItem(formData);
      })
      .subscribe((resp) => {
        console.log('File item sent')
      })
  }
}


