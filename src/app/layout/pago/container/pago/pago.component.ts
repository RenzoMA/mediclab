import { AlertService } from './../../../../services/alert.service';
import { ReservaService } from './../../../reserva/services/reserva.service';
import { Reserva } from './../../../reserva/model/reserva';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss']
})
export class PagoComponent implements OnInit {

  idMedico = '';
  idPaciente = '';

  transaction = '';

  loading = false;
  reserva: Reserva;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private reservaService: ReservaService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.getData();
  }


  getData(){
    this.activeRoute.params.subscribe(
      (params) => {
        this.transaction = params['transactionId'];
        this.idMedico = this.transaction.split('J')[1];
        this.idPaciente = this.transaction.split('J')[0];
        this.reserva =  JSON.parse(localStorage.getItem('reserva-'+this.idPaciente+'-'+this.idMedico));
        console.log(this.reserva);
      }
    );
  }

  pagar(){
    this.loading = true;
    this.reserva.formaPagoByIdPago = {
      tipoPago: 'VISA',
      resultado: 'OK'
    }
    this.reservaService.reservar(this.reserva).subscribe(
      (response) => {
        this.loading = false;
        localStorage.setItem('transacion', JSON.stringify(response));
        this.alertService.showAlertButton('Transaccion Satisfactoria', 'Se procedio a reserva la cita', 'success')
        .then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/success/'+ this.transaction]);
          }
        });
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
