import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'https://apiurl.com/api/'

  constructor(
    private http: HttpClient
  ) { }

  getTest(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users/2');
  }

  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'records');
  }
}
