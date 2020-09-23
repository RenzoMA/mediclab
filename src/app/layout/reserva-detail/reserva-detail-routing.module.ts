import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReservaDetailComponent } from './container/reserva-detail/reserva-detail.component';

const routes: Routes = [
  {
    path: "",
    component: ReservaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaDetailRoutingModule { }
