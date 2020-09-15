import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Medico } from "../models/medico";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MedicoService {

  url: string = "https://mediclab-1599576972965.azurewebsites.net/management/";
  
  constructor(private http: HttpClient) {}

  crearMedico(data: Medico): Observable<any> {
    let createUrl = `${this.url}register-medic`;
    return this.http.post(createUrl, data);
  }

  listarMedicos(id: number): Observable<any>{
    let uri = `${this.url}medicos/${id}`;
    return this.http.get(uri);
  }
}
