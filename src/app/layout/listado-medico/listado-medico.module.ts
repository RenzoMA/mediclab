import { ListadoMedicoRoutingModule } from './listado-medico-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoMedicoComponent } from './container/listado-medico/listado-medico.component';

@NgModule({
  imports: [
    CommonModule,
    ListadoMedicoRoutingModule],
  declarations: [ListadoMedicoComponent]
})
export class ListadoMedicoModule { }
