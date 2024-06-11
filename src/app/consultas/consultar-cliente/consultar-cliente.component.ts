import { Component, OnInit } from '@angular/core';
import { cliente } from '../../clases/cliente';
import { ClienteService } from '../../Servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrl: './consultar-cliente.component.css'
})
export class ConsultarClienteComponent implements OnInit {

  personas: cliente[] = [];
  personaBusqueda: cliente = new cliente();

  constructor(private clienteService: ClienteService, private router: Router){}

  ngOnInit(): void{
    this.getClientes();
  }

  getClientes(): void {
    this.clienteService.getCliente().subscribe(
      (clientes: cliente[]) => {
        this.personas = clientes;
        console.log('Clientes fetched successfully:', this.personas);
      },
      (error) => console.error('Error fetching clientes:', error)
    );
  }

  editarCliente(numeroDocumento: string): void {
    this.router.navigate(['clientes/ActualizarCliente', numeroDocumento]);
  }

  
}
