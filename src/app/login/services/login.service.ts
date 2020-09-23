import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.API_URL_AUTH;

  constructor(private http: HttpClient) { }

  async login(user: string, password: string) {
    let uri = `${this.url}`;
    let body = {
      user: user,
      password: password
    }
    return this.http.post(uri, body);
  }
}
