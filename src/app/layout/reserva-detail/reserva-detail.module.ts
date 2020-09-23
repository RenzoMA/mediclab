import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservaDetailRoutingModule } from './reserva-detail-routing.module';
import { ReservaDetailComponent } from './container/reserva-detail/reserva-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReservaDetailRoutingModule
  ],
  declarations: [ReservaDetailComponent]
})
export class ReservaDetailModule { }
