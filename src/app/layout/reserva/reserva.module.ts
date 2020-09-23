import { BrowserModule } from '@angular/platform-browser';
import { ReservaRoutingModule } from './reserva-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaComponent } from './container/reserva/reserva.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReservaRoutingModule,
    NgbModule],
  declarations: [ReservaComponent]
})
export class ReservaModule { }
