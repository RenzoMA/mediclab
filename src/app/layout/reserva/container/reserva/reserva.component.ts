import { FormGroup } from '@angular/forms';
import { MedicoService } from './../../../../medico/services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medico } from 'src/app/medico/models/medico';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  idMedico;
  textDay = '';
  timestampText = '';
  medico: any;
  aux_date = new Date();

  reservaForm: FormGroup;
  
  constructor(private activatedRoute: ActivatedRoute,
            private medicoService: MedicoService,
            private datePipe: DatePipe) {
              
             }

  ngOnInit(): void {
    this.getData();
  }

  initForm(){

  }

  getData() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.idMedico = params['idMedico'];
          this.textDay = params['date'];
          
          this.medicoService.getOneMedico(this.idMedico).subscribe(
            (response) => {
              this.medico = response;
            }, 
            (error) => {
              console.log(error);
            }
          );
      }
    );
  }

  getSelectedDate(text: string){
    let currentDate = new Date();
    if (text === 'TODAY'){
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd hh:mm:ss');
    } else if (text === 'TOMORROW'){
      currentDate.setDate(currentDate.getDate()+1);
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd hh:mm:ss');
    } else {
      currentDate.setDate(currentDate.getDate()+2);
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd hh:mm:ss');
    }
    this.aux_date = currentDate;
  }

}
