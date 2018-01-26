import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Global } from '../../global';
import { FileItemModel } from '../file-item/fileItemModel';
import { GalleryTypeEnum } from '../models/gallery-type-enum';

export interface IUploadFileItemResponse {
  itemId: number;
}

export interface IItemOrder {
  itemId: number,
  itemOrder: number;
}

export interface IUploadGallery {
  galleryType: GalleryTypeEnum,
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
    return this.http.post<IUploadFileItemResponse>(`${this.apiDomain}/fileItems`, this.mapToFormData(fileItem));
  }

  uploadToGalery(uploaderGallery: IUploadGallery): Observable<any> {
    return this.http.post(`${this.apiDomain}/galleries`, uploaderGallery);
  }

  private get apiDomain() {
    return this.global.uploadEndpoint === 'TEST' ? 'api/mock' : 'api';
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
