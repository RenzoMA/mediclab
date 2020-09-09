import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MedicoComponent } from "./container/medico/medico.component";

const routes: Routes = [
  {
    path: "",
    component: MedicoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoRoutingModule {}
