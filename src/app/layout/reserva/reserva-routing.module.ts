import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReservaComponent } from './container/reserva/reserva.component';

const routes: Routes = [
  {
    path: "",
    component: ReservaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaRoutingModule { }
