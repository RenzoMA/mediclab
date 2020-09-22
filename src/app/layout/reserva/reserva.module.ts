import { ReservaRoutingModule } from './reserva-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './container/reserva/reserva.component';

@NgModule({
  imports: [
    CommonModule,
    ReservaRoutingModule],
  declarations: [ReservaComponent]
})
export class ReservaModule { }
