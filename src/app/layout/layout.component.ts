import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isLoggged = false;
  user = {}

  constructor() { }

  ngOnInit(): void {
    this.checkLogUser();
  }

  checkLogUser(){
     const user = localStorage.getItem('user');
     if (null !== user){
        this.isLoggged= true;
        this.user = user;
     }
  }

}
