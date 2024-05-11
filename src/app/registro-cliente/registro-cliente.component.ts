import { Component } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
export class RegistroClienteComponent {

   visible: boolean = false;

  tiposDocumento: { value: string, label: string }[] = [
    { value: "cedula", label: "Cédula de ciudadanía" },
    { value: "tarjeta-identidad", label: "Tarjeta de identidad" },
    { value: "pasaporte", label: "Pasaporte" },
    { value: "certificado-nacimiento", label: "Certificado de nacimiento" },
  ];
  persona: any = {
    id: '',
    tipoIdentificacion: '',
    nombre: "",
    apellido: "",
    email: '',
    telefono: '',
  };
  procesar (){
    return axios.post('',this.persona);
  };
}
