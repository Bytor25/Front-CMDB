import { Component, Inject, OnInit } from '@angular/core';
import { ClienteService } from '../../Servicios/cliente.service';
import { Router } from '@angular/router';
import axios from 'axios';
import { FormControl, Validators } from '@angular/forms';
import { proveedor } from '../../clases/proveedor';
import { ProveedorService } from '../../Servicios/proveedor.service';

@Component({
  selector: 'app-registro-proveedores',
  templateUrl: './registro-proveedores.component.html',
  styleUrl: './registro-proveedores.component.css'
})
export class RegistroProveedoresComponent {

  visible: boolean = false;
  persona: proveedor = new proveedor();
  mensaje: string = "";

  
  constructor(private proveedorservice: ProveedorService, private router: Router ){}

  ngOnInit(): void {
  }

  create(): void {
    this.proveedorservice.create(this.persona).subscribe(
      (resp)=>{
        alert(resp.mensajes[0]);
        this.router.navigate(['principal/proveedores'])
      },
   (error) => {
    console.error(error);
    alert(error.error.mensajes[0]);
  }
    );
  }

  

  };


