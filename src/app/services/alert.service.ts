import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  showAlert( tipo: String) {
    return Swal.fire({
      title: 'Registro Correcto',
      text: 'El ' + tipo + ' se registro  correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'  
    })
  }
}
