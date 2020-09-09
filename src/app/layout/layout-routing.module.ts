import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path : '',
        loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule) 
      },
      {
        path: 'medicos',
        loadChildren: () => import('./listado-medico/listado-medico.module').then(m => m.ListadoMedicoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
