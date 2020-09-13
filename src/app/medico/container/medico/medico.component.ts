import { Component, OnInit, HostListener } from "@angular/core";
import { MedicoService } from "../../services/medico.service";
import { Medico } from "../../models/medico";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-medico",
  templateUrl: "./medico.component.html",
  styleUrls: ["./medico.component.scss"],
})
export class MedicoComponent implements OnInit {
  crearMedicoForm = new FormGroup({
    apellidoMaterno: new FormControl(""),
    apellidoPaterno: new FormControl(""),
    carnet: new FormControl(""),
    colegiatura: new FormControl(""),
    correo: new FormControl(""),
    departamento: new FormControl(""),
    direccion: new FormControl(""),
    distrito: new FormControl(""),
    fechaNacimiento: new FormControl(""),
    movil: new FormControl(""),
    nombres: new FormControl(""),
    numeroDocumento: new FormControl(""),
    perfil: new FormControl(""),
    provincia: new FormControl(""),
    sexo: new FormControl(""),
    telefono: new FormControl(""),
    tipoDocumento: new FormControl(""),
  });

  constructor(private medicoService: MedicoService) {}

  @HostListener("change", ["$event.target"])
  emitFiles(target: any) {
    const event = target.files;
    console.log(event);
    const file = event && event.item(0);
    if (target.id === "inputPerfil") {
      this.crearMedicoForm.get("perfil").setValue(file);
    }
    if (target.id === "inputCarnet") {
      this.crearMedicoForm.get("carnet").setValue(file);
    }
  }

  ngOnInit(): void {}

  onSubmit() {
    this.crearMedico(this.crearMedicoForm.value);
  }

  crearMedico(medico: Medico) {
    this.medicoService.crearMedico(medico).subscribe((data) => {
      console.log(data);
    });
  }
}
