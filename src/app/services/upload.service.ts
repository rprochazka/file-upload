import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const UPLOAD_URL = 'http://somedomain/upload';

@Injectable()
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFileItem(fileItem: FormData): Observable<any> {
    return this.http.post(UPLOAD_URL, fileItem)
      .map(resp => resp);
  }
}
