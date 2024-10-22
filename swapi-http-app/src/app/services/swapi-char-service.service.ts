import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharResponse } from '../interfaces/swapi-char';

@Injectable({
  providedIn: 'root'
})
export class SwapiCharServiceService {

  constructor(private http: HttpClient) { }

  getCharList(): Observable<CharResponse>{

    return this.http.get<CharResponse>(`https://swapi.dev/api/people`);
    
  }
}
