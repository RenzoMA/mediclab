import { ReservaService } from './../../services/reserva.service';
import { Reserva } from './../../model/reserva';
import { Paciente } from './../../../../paciente/models/paciente';
import { AlertService } from './../../../../services/alert.service';
import { FormGroup } from '@angular/forms';
import { MedicoService } from './../../../../medico/services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;

  idMedico;
  textDay = '';
  timestampText = '';
  medico: any;
  aux_date = new Date(); 
  user: any;
  fullName = '';
  telefono = '';
  email = '';
  reservaForm: FormGroup;
  loading = false;
  
  constructor(private activatedRoute: ActivatedRoute,
            private router: Router,
            private alertService: AlertService,
            private medicoService: MedicoService,
            private reservaService: ReservaService,
            private datePipe: DatePipe) {
              
             }

  ngOnInit(): void {
    this.getData();
    this.getUserLogged();
    this.fullName = this.user.apellidos + ' '+ this.user.nombres;
    this.telefono = this.user.telefono;
    this.email = this.user.correo;
    console.log(this.time);
  }

  getUserLogged(){
    this.user = JSON.parse(localStorage.getItem('user'));
    //console.log(JSON.parse( localStorage.getItem('user') ));
    if (null === this.user){
      this.alertService.showAlertButton('No has iniciado Sesion', 'Debes iniciar sesion','warning')
      .then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/login']);
        }
      });
    }
  }

  getData() {
    this.activatedRoute.params.subscribe(
      (params) => {
          this.idMedico = params['idMedico'];
          this.textDay = params['date'];
          this.getSelectedDate(this.textDay)
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
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    } else if (text === 'TOMORROW'){
      currentDate.setDate(currentDate.getDate()+1);
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    } else {
      currentDate.setDate(currentDate.getDate()+2);
      this.timestampText = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    }
    this.aux_date = currentDate;
  }


  reservar(){
    this.loading = true;
    const reserva: Reserva = this.buildRequest();
    localStorage.setItem('reserva-' + this.user.id + '-' + this.medico.id, JSON.stringify(reserva));
    this.router.navigate(['/payout/'+this.user.id + 'J' + this.medico.id]);
  }

  private buildRequest() {
    const timeText = this.time.hour.toString() + ':' + ((this.time.minute === 0)?"00": this.time.minute.toString()) + ':00'; 
    return {
      fechaHoraConsulta: this.timestampText + ' ' + timeText,
      nombreContacto:  this.user.nombres + ' ' + this.user.apellidos, 
      correo: this.user.correo,
      medicoId: this.medico.id,
      pacienteId: this.user.id,
      movil: this.user.telefono
    }
  }
}
