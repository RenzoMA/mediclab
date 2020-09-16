import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PacienteComponent } from "./container/paciente/paciente.component";
import { PacienteRoutingModule } from "./paciente-routing.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PacienteComponent],
  imports: [
    CommonModule, 
    PacienteRoutingModule,
    ReactiveFormsModule
  ],
})
export class PacienteModule {}
