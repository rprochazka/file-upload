import { ICodeList } from './../models/ICodeList';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://www.bohemians.cz/api/uploader';

@Injectable()
export class CodeListService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetImageCategories`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getSources(): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetImageSources`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getLicenses(): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetImageLicenses`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getSeasons(): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetRocniky`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getTeams(): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetTymy`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getMatches(seasonId: number, teamId: number): Observable<ICodeList[]> {
    const url = `${BASE_URL}/GetZapasy`;
    return this.http.post<ICodeList[]>(url, { rocnikId: seasonId, bohemkaTymId: teamId }).map(resp => resp);
  }
}
