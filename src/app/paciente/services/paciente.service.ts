import { Observable } from 'rxjs';
import { Paciente } from './../models/paciente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  crearPacinte(data: Paciente): Observable<any> {
    let createUrl = `${this.url}register-patient`;
    return this.http.post(createUrl, data);
  }
}
