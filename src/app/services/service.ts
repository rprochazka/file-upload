import { ICodeList } from './../models/ICodeList';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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

  getLicenses(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 1, value: 'Uvedeni zdroje' },
      { id: 2, value: 'Jiny zdroj' },
      { id: 3, value: 'Dalsi zdroj' },
    ])
  }

  getSeasons(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 1, value: '2016/2017' },
      { id: 2, value: '2016/2015' },
      { id: 3, value: '2015/2014' },
    ])
  }

  getTeams(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 1, value: 'Bohemka' },
      { id: 2, value: 'Sparta' },
      { id: 3, value: 'Slavia' },
    ])
  }

  getMatches(): Observable<ICodeList[]> {
    return Observable.of([
      { id: 1, value: 'Bohemka - Sparta' },
      { id: 2, value: 'Bohemka - Slavia' },
      { id: 3, value: 'Sparta - Slavia' },
    ])
  }
}
