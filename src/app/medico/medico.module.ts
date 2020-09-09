import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MedicoComponent } from "./container/medico/medico.component";
import { MedicoRoutingModule } from "./medico-routing.module";

@NgModule({
  imports: [CommonModule, MedicoRoutingModule],
  declarations: [MedicoComponent],
})
export class MedicoModule {}
