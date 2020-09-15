import { Medico } from './../../../../medico/models/medico';
import { MedicoService } from './../../../../medico/services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-medico',
  templateUrl: './listado-medico.component.html',
  styleUrls: ['./listado-medico.component.scss']
})
export class ListadoMedicoComponent implements OnInit {

  id: number;

  medicos = [];

  constructor(private medicoService: MedicoService,
              private activeRouter: ActivatedRoute) { 
    this.getMedicos();
  }

  ngOnInit(): void {
  }


  getMedicos(){
    this.activeRouter.params.subscribe(
      (params) => {
        this.id = params['id'];
        this.medicoService.listarMedicos(this.id).
          subscribe((response) => {
            this.medicos = response;
            console.log(this.medicos);
            //console.log(response);
          },
          (error) => {
            console.log(error);
          });
      }
    );
  }
}
