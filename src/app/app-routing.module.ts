import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "medico",
    loadChildren: () =>
      import("./medico/medico.module").then((m) => m.MedicoModule),
  },
  {
    path: "paciente",
    loadChildren: () =>
      import("./paciente/paciente.module").then((m) => m.PacienteModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
