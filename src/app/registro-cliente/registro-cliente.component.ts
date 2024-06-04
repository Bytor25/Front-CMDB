import { Component, Inject, OnInit } from '@angular/core';
import { cliente } from '../clases/cliente';
import { ClienteService } from '../Servicios/cliente.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { FormControl, Validators } from '@angular/forms';


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



  persona : cliente = new cliente();

  mensaje: string = "";



  procesar (){
    return axios.post('',this.persona);
  };



}
