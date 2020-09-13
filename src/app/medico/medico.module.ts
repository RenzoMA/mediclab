import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MedicoComponent } from "./container/medico/medico.component";
import { MedicoRoutingModule } from "./medico-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, MedicoRoutingModule, ReactiveFormsModule],
  declarations: [MedicoComponent],
})
export class MedicoModule {}
