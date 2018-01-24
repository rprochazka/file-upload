import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Global } from './../global';
import { FileItemModel } from 'app/file-item/fileItemModel';
import { MyEnums } from 'app/shared/selected-gallery-type-enum';

export interface IUploadFileItemResponse {
  itemId: number;
}

export interface IItemOrder {
  itemId: number,
  itemOrder: number;
}

export interface IUploadGallery {
  galleryType: MyEnums.SelectedGalleryTypeEnum,
  itemId: number,
  itemOrders: IItemOrder[]
}

@Injectable()
export class UploadService {

  constructor(private http: HttpClient, private global: Global) { }

  uploadFileItem(fileItem: FileItemModel): Observable<IUploadFileItemResponse> {
    // if (this.global.uploadEndpoint === 'TEST') {
    //   console.log(JSON.stringify(fileItem));
    //   return Observable.of();
    // }
    // console.log(`FileItem order ${fileItem.order}`);
    return this.http.post<IUploadFileItemResponse>(this.global.uploadEndpoint, this.mapToFormData(fileItem));
  }

  uploadToGalery(uploaderGallery: IUploadGallery): Observable<any> {
    return this.http.post('api/gallery', uploaderGallery);
  }


  private mapToFormData(fileItem: FileItemModel): FormData {
    const formData: FormData = new FormData();
    for (const name in fileItem.metadata) {
      if (typeof (fileItem.metadata[name]) !== 'function') {
        formData.append(name, fileItem.metadata[name]);
      }
    }
    formData.append('order', fileItem.order.toString());
    formData.append('file', fileItem.file);

    return formData;
  }
}
