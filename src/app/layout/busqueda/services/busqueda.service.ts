import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BusquedaService {

  url: string = "https://mediclab-1599576972965.azurewebsites.net/management/speciality";

  constructor(private http: HttpClient) { }

  getEspecialidad(): Observable<any>{
    let uri = `${this.url}`;
    return this.http.get(uri);
  }
}
