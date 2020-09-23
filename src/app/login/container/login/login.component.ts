import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    user: '',
    password: ''
  }

  loading = false;

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    //localStorage.removeItem('user');
    localStorage.clear();
  }

  async login(){
    this.loading = true;
    try {
      const response = await this.loginService.login(this.user.user, this.user.password);
      if (response){
        if (response.id){
          localStorage.setItem('user', JSON.stringify(response));
          this.router.navigate(['/']);
        } 
      } else {
        console.log(response);
      }
    } catch (error) {

    }
    
    this.loading = false;
  }

}
