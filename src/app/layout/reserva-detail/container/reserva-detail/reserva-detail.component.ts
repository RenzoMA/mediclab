import { Reserva } from './../../../reserva/model/reserva';
import { MedicoService } from './../../../../medico/services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.scss']
})
export class ReservaDetailComponent implements OnInit {

  transactionId = '';
  idUser = '';
  idMedico = '';

  medico;
  user;
  transaction;
  reserva: Reserva;

  date;

  constructor(private activeRouter : ActivatedRoute,
              private medicoService: MedicoService) { 

              }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.transaction = JSON.parse(localStorage.getItem('transacion'));
    this.getReservaData();
    
  }

  getReservaData(){
    this.activeRouter.params.subscribe(
      (params) => {
        this.transactionId = params['transactionId'];
        this.idUser = this.transactionId.split('J')[0];
        this.idMedico = this.transactionId.split('J')[1];
        this.reserva = JSON.parse(localStorage.getItem('reserva-'+this.idUser+'-'+this.idMedico));
        this.date = new Date(this.reserva.fechaHoraConsulta);
        this.medicoService.getOneMedico(parseInt(this.idMedico)).subscribe(
          (response) => {
            this.medico = response;
          },
          (error) =>  {
            console.log(error);
          }
        );
      }
    );
  }
}
