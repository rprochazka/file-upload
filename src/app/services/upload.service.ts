import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './../global';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient, private global: Global) {
    console.log(`Upload Uri is: ${this.global.uploadEndpoint}`);
  }

  uploadFileItem(fileItem: FormData): Observable<any> {
    return this.http.post(this.global.uploadEndpoint, fileItem)
      .map(resp => resp);
  }
}
