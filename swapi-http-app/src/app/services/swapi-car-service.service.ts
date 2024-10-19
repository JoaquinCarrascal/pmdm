import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaSwapi} from '../interfaces/swapi-car';

@Injectable({
  providedIn: 'root'
})
export class SwapiCarServiceService {


  constructor(private http: HttpClient) { }

  getCarList(paginacion?: string): Observable<RespuestaSwapi>{

    return this.http.get<RespuestaSwapi>(`https://swapi.dev/api/vehicles${paginacion ? `?${paginacion}` : ''}`);
    
  }

}
