import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Reserva } from './../model/reserva';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  reservar(reserva: Reserva): Observable<any>{
    const uri = `${this.url}reservar`;
    return this.http.post(uri, reserva);
  }
}
