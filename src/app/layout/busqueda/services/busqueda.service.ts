import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class BusquedaService {

  url: string = environment.API_URL + "speciality";

  constructor(private http: HttpClient) { }

  getEspecialidad(): Observable<any>{
    let uri = `${this.url}`;
    return this.http.get(uri);
  }
}
