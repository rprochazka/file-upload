import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs/Observable';

import { IFileItemModel } from '../file-item/fileItemModel';

import { IUploadFileItemResponse } from './upload.service';

export class UploaderMockedData implements InMemoryDbService {

  createDb() {
    const fileItems: IFileItemModel[] = [];
    const galleries: string[] = [];
    return { fileItems, galleries };
  }

  post(request: RequestInfo): Observable<any> {
    const collectionName = request.collectionName;
    if (collectionName === 'fileItems' || collectionName === 'galleries') {
      return request.utils.createResponse$(() => {
        const randId = Math.floor((Math.random() * 1000) + 1);
        return randId % 2 === 0
          ? this.createdResponse({
            itemId: randId
          })
          : this.badRequestResponse()
      });
    }
    return undefined;
  }

  private createdResponse(newItem: IUploadFileItemResponse): ResponseOptions {
    return {
      status: 201,
      body: newItem
    }
  }

  private badRequestResponse(): ResponseOptions {
    return {
      status: 400,
      statusText: 'Bad request'
    }
  }

}
