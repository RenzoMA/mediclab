import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }


  showAlert( tipo: string) {
    return Swal.fire({
      title: 'Registro Correcto',
      text: 'El ' + tipo + ' se registro  correctamente',
      icon: 'success',
      confirmButtonText: 'Aceptar'  
    });
  }


  showAlertButton(title: string, message: string, icon: SweetAlertIcon){
    return Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: false,
      confirmButtonText: 'Aceptar'
    });
  }
}
