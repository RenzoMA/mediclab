import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PacienteComponent } from "./container/paciente/paciente.component";

const routes: Routes = [
  {
    path: "",
    component: PacienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacienteRoutingModule {}
