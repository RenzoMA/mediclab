import { BusquedaService } from './../../services/busqueda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  id: number;
  especialidades = [];

  constructor(private busquedaService : BusquedaService,
            private router: Router) { 
    this.getEspecialidades();
  }

  ngOnInit(): void {
  }

  onChange( code : number){
    console.log(code);
    this.id = code;
  }

  getEspecialidades(){
    this.busquedaService.getEspecialidad()
      .subscribe((response) => {
        this.especialidades  = response;
      },
      (error) => {
        console.log(error);
      });
  }

  searchAndRedirect(){
    this.router.navigate(['/medicos/'+ this.id]);
  }
}
