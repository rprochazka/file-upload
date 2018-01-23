import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './../global';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient, private global: Global) {}

  uploadFileItem(fileItem: FormData): Observable<any> {
    if (this.global.uploadEndpoint === 'TEST') {
      console.log(JSON.stringify(fileItem));
      return new Observable<any>();
    } else {
      return this.http.post(this.global.uploadEndpoint, fileItem)
        .map(resp => resp);
    }
  }
}
