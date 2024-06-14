import { Component, OnInit } from '@angular/core';
import { proveedor } from '../../clases/proveedor';
import { ProveedorService } from '../../Servicios/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-proveedor',
  templateUrl: './consultar-proveedor.component.html',
  styleUrl: './consultar-proveedor.component.css'
})
export class ConsultarProveedorComponent implements OnInit{

  personas: proveedor[] = [];
  personaBusqueda: proveedor = new proveedor();

  constructor(private proveedorService: ProveedorService, private router: Router) {}

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(): void {
    this.proveedorService.getProveedor().subscribe(
      (response) => {
        this.personas = response;
      },
      (error) => console.error('Error fetching clientes:', error)
    );
  }

  buscarCliente(): void {
    const numeroDocumento = this.personaBusqueda.numeroDocumento;
    if (numeroDocumento) {
      this.proveedorService.consultarPorId(numeroDocumento).subscribe(

        (response) => {
          this.personas = response;
        },
        (error) => {
          console.error('Error fetching cliente:', error);
          this.personas = [];
        }
      );
    } else {
      this.getProveedores();
    }
  }

  editarCliente(numeroDocumento: string, tipoDocumento: any): void {
    if (numeroDocumento) {
      this.router.navigate(['proveedores/ActualizarProveedor', numeroDocumento, tipoDocumento]);
    } 
  }

}
