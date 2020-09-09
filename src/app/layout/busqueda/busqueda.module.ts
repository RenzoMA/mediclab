import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './container/busqueda/busqueda.component';


@NgModule({
  imports: [
    CommonModule,
    BusquedaRoutingModule],
  declarations: [BusquedaComponent]
})
export class BusquedaModule { }
