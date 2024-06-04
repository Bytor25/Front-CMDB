import { Component, Inject, OnInit } from '@angular/core';
import { ClienteService } from '../Servicios/cliente.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { FormControl, Validators } from '@angular/forms';
import { proveedor } from '../clases/proveedor';

@Component({
  selector: 'app-registro-proveedores',
  templateUrl: './registro-proveedores.component.html',
  styleUrl: './registro-proveedores.component.css'
})
export class RegistroProveedoresComponent {

    visible: boolean = false;



    persona : proveedor = new proveedor();

  

  };


