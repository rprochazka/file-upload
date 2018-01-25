import { ICodeList } from './../models/ICodeList';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Global } from './../global';

@Injectable()
export class CodeListService {

  private baseUrl: string;

  constructor(private http: HttpClient, private global: Global) {
    this.baseUrl = this.global.dataEndpoint;
  }


  getCategories(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetImageCategories`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getSources(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetImageSources`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getLicenses(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetImageLicenses`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getSeasons(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetRocniky`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getTeams(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetTymy`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }

  getMatches(seasonId: number, teamId: number): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetZapasy`;
    return this.http.post<ICodeList[]>(url, { rocnikId: seasonId, bohemkaTymId: teamId }).map(resp => resp);
  }

  getArticles(): Observable<ICodeList[]> {
    const url = `${this.baseUrl}/GetArticles`;
    return this.http.get<ICodeList[]>(url).map(resp => resp);
  }
}
