import { ReactiveFormsModule } from '@angular/forms';
import { PagoComponent } from './container/pago/pago.component';
import { PagoRoutingModule } from './pago-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagoRoutingModule
  ],
  declarations: [PagoComponent]
})
export class PagoModule { }
