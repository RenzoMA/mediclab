import { AlertService } from './../../../services/alert.service';
import { UbigeoService } from './../../../services/ubigeo.service';
import { BusquedaService } from './../../../layout/busqueda/services/busqueda.service';
import { Component, OnInit, HostListener } from "@angular/core";
import { MedicoService } from "../../services/medico.service";
import { Medico } from "../../models/medico";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-medico",
  templateUrl: "./medico.component.html",
  styleUrls: ["./medico.component.scss"],
})
export class MedicoComponent implements OnInit {

  especialidades = [];

  crearMedicoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              public ubigeoService: UbigeoService,
              private medicoService: MedicoService,
              private busquedaService: BusquedaService,
              private alertService: AlertService) {

                this.getEspecialidades();
  }

  @HostListener("change", ["$event.target"])
  emitFiles(target: any) {
    const event = target.files;
    console.log(event);
    const file = event && event.item(0);
    if (target.id === "inputPerfil") {
      this.setBase64("perfil", file);
    }
    if (target.id === "inputCarnet") {
      this.setBase64("carnet", file);
    }
  }

  initForm(){
    this.crearMedicoForm = this.formBuilder.group({
      apellidoMaterno: '',
      apellidoPaterno: '',
      carnet: '',
      colegiatura: '',
      correo: '',
      departamento: '',
      direccion: '',
      distrito: '',
      fechaNacimiento: '',
      movil: '',
      nombres: '',
      numeroDocumento: '',
      perfil: '',
      provincia: '',
      sexo: '',
      telefono: '',
      tipoDocumento: '',
      password: '',
      especialidadId: 0
    });
  }

  setBase64(input: string, file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.crearMedicoForm.get(input).setValue(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.crearMedico(this.crearMedicoForm.value);
  }

  crearMedico(medico: Medico) {
    this.medicoService.crearMedico(medico).subscribe(
      (data) => {
        console.log(data);
        this.alertService.showAlert('medico');
        this.resetForm();
      },
      (error) => {
        
      });
  }

  resetForm(){
    this.crearMedicoForm.reset();
  }

  getEspecialidades(){
    this.busquedaService.getEspecialidad()
      .subscribe((response) => {
        this.especialidades  = response;
      },
      (error) => {
        console.log(error);
      });
  }

  changeDep(){
    this.crearMedicoForm.controls.provincia.setValue('');
    this.crearMedicoForm.controls.dsitrito.setValue('');
  }
}
