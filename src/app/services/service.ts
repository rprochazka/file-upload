import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ICodeList } from '../models/ICodeList';

@Injectable()
export class MyService {
  getCategories(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 3, value: 'loga kluby' },
      { id: 4, value: 'loga ostatni' },
      { id: 5, value: 'osoby nehraci hlavy' },
      { id: 6, value: 'osoby nehraci ostatni' }
    ])
  }

  getSources(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 1, value: 'www.bohemians1905.cz' },
      { id: 2, value: 'fotbal.cz' },
      { id: 3, value: 'CTK' },
      { id: 4, value: 'FARA s.r.o' }
    ])
  }
}
