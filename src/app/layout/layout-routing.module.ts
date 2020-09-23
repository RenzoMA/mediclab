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
        path: 'medicos/:id',
        loadChildren: () => import('./listado-medico/listado-medico.module').then(m => m.ListadoMedicoModule)
      },
      {
        path: 'reserva/:idMedico/:date',
        loadChildren: () => import('./reserva/reserva.module').then(m => m.ReservaModule)
      },
      {
        path: 'payout/:transactionId',
        loadChildren: () => import('./pago/pago.module').then(m => m.PagoModule)
      },
      {
        path: 'success/:transactionId',
        loadChildren: () => import('./reserva-detail/reserva-detail.module').then(m => m.ReservaDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
