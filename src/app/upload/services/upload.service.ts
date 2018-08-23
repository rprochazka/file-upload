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
  itemValue: number,
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
    console.log(`Uploading to: ${this.global.uploadEndpoint}/images`, fileItem);
    return Observable.of({
      itemId: Math.random()
    } as IUploadFileItemResponse).delay(5000);
    // return this.http.post<IUploadFileItemResponse>(`${this.global.uploadEndpoint}/images`, this.mapToFormData(fileItem));
  }

  uploadToGalery(uploaderGallery: IUploadGallery): Observable<any> {
    console.log(`Uploading to: ${this.global.uploadEndpoint}/galleries`, uploaderGallery);
    return Observable.of({
      itemId: Math.random()
    });
    // return this.http.post(`${this.global.uploadEndpoint}/galleries`, uploaderGallery);
  }

  private get apiDomain() {
    return this.global.uploadEndpoint === 'TEST' ? 'api/mock/fileItems' : this.global.uploadEndpoint;
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
