import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  
  constructor(private proveedorService: ProveedorService, private router: Router ){}

  ngOnInit(): void {
  }

  create(): void {

    console.log(this.persona)
    this.proveedorService.create(this.persona).subscribe(
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


