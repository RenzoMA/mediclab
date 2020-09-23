import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = environment.API_URL_AUTH;

  constructor(private http: HttpClient) { }

  login(user: string, password: string) {
    let uri = `${this.url}`;
    console.log('URL ' + uri);
    let body = {
      user: user,
      password: password
    }
    return new Promise<any>( (resolve, reject) => {
      this.http.post( uri, body).subscribe(
        (response) => {
          resolve(response);
        },
        (error)=> {
          reject(error);
        } 
      );
    });
  }
}
