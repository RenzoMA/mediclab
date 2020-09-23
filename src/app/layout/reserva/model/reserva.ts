import { FormaPago } from './forma-pago';

export class Reserva {
    fechaHoraConsulta: string;
    nombreContacto: string;
    movil: string;
    correo: string;
    medicoId: string;
    pacienteId: string;
    formaPagoByIdPago?: FormaPago;
}