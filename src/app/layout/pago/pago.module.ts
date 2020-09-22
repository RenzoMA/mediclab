import { PagoComponent } from './container/pago/pago.component';
import { PagoRoutingModule } from './pago-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    PagoRoutingModule
  ],
  declarations: [PagoComponent]
})
export class PagoModule { }
