import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class CharServiceService {

  constructor(private http: HttpClient) { }

  getCharListResponse(): Observable<ApiResponse> {

    return this.http.get<ApiResponse>('https://rickandmortyapi.com/api/character');

  }

}
