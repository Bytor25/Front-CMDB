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
        console.log('Clientes fetched successfully:', response);
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
          console.log('Cliente fetched successfully:', response);
          if (response) {
            this.personas = [response]; // Asegúrate de que siempre es un array
            console.log('Personas array:', this.personas);
          } else {
            console.log('No se encontró el cliente con el número de documento especificado.');
            this.personas = [];
          }
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

  editarCliente(numeroDocumento: string): void {
    if (numeroDocumento) {
      this.router.navigate(['clientes/ActualizarCliente', numeroDocumento]);
    } else {
      console.error('Número de documento es indefinido');
    }
  }
}
