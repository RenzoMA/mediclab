import { Medico } from './../../../../medico/models/medico';
import { MedicoService } from './../../../../medico/services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listado-medico',
  templateUrl: './listado-medico.component.html',
  styleUrls: ['./listado-medico.component.scss']
})
export class ListadoMedicoComponent implements OnInit {

  id: number;

  medicos = [];

  dayAfterTomorrow;

  constructor(private medicoService: MedicoService,
              private router: Router,
              private activeRouter: ActivatedRoute) { 
    this.getMedicos();
  }

  ngOnInit(): void {
    this.setDate();
  }

  setDate(){
    let d = new Date();
    d.setDate(d.getDate()+2);
    this.dayAfterTomorrow = d;
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

  reservar(medico: Medico, date: string) {
    this.router.navigate([`/reserva/${medico.id}/${date}`]);
  }
}
