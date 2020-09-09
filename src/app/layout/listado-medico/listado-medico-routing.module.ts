import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ListadoMedicoComponent } from './container/listado-medico/listado-medico.component';


const routes: Routes = [
  {
    path: "",
    component: ListadoMedicoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoMedicoRoutingModule { }
