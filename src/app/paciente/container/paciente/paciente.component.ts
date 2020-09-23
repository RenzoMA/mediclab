import { AlertService } from './../../../services/alert.service';
import { PacienteService } from './../../services/paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Paciente } from '../../models/paciente';

@Component({
  selector: "app-paciente",
  templateUrl: "./paciente.component.html",
  styleUrls: ["./paciente.component.scss"],
})
export class PacienteComponent implements OnInit {

  pacienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private pacienteService: PacienteService,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.pacienteForm = this.formBuilder.group({
      apellidos: '',
      nombres: '',
      telefono: '',
      correo: '',
      password: '',
      rol: 'PACIENTE'
    });
  }


  onSubmit() {
    this.crearPaciente(this.pacienteForm.value);
  }

  crearPaciente(paciente: Paciente) {
    this.pacienteService.crearPacinte(paciente).subscribe(
      (data) => {
        console.log(data);
        this.alertService.showAlert('Paciente');
        this.resetForm();
      },
      (error) => {
        
      });
  }

  resetForm(){
    this.pacienteForm.reset();
  }
}
