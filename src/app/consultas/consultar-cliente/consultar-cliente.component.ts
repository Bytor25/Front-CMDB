import { Component, OnInit } from '@angular/core';
import { cliente } from '../../clases/cliente';
import { ClienteService } from '../../Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  personas: cliente[] = [];
  personaBusqueda: cliente = new cliente();

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getCliente().subscribe(
      (response) => {
        this.personas = response;
      },
      (error) => console.error('Error fetching clientes:', error)
    );
  }

  buscarCliente(): void {
    const numeroDocumento = this.personaBusqueda.numeroDocumento;
    if (numeroDocumento) {
      this.clienteService.consultarPorId(numeroDocumento).subscribe(

        (response) => {
          this.personas = response;
        },
        (error) => {
          console.error('Error fetching cliente:', error);
          this.personas = [];
        }
      );
    } else {
      this.getClientes();
    }
  }

  editarCliente(numeroDocumento: string, tipoDocumento: string): void {
    if (numeroDocumento && tipoDocumento) {
      this.router.navigate(['clientes/ActualizarCliente', numeroDocumento, tipoDocumento]);
    } 
  }
}
