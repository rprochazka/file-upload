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

  fileList: File[] = new Array<File>();
  categories: ICodeList[];
  sources: ICodeList[];
  baseMetadata: FileItemModel = new FileItemModel()

  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.myService.getCategories().subscribe(resp => {
      this.categories = resp;
    });

    this.myService.getSources().subscribe(resp => {
      this.sources = resp;
    })
  }

  fileSelected(event): void {
    const fileList = event.target.files;
    if (fileList) {
      Object.keys(fileList).forEach(key => {
        this.fileList.push(fileList[key]);
      });
    }
  }

  onFileDelete(file: File) {
    this.fileList = this.fileList.filter(i => i !== file);
  }
}


