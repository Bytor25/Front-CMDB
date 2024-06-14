import { Component, OnInit } from '@angular/core';
import { cliente } from '../../clases/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../Servicios/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizacion-cliente',
  templateUrl: './actualizacion-cliente.component.html',
  styleUrl: './actualizacion-cliente.component.css'
})
export class ActualizacionClienteComponent implements OnInit {
  persona: cliente = new cliente();
  visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const numeroDocumento = this.route.snapshot.paramMap.get('id');
    const tipoDocumento = this.route.snapshot.paramMap.get('tipoDocumento');

    if (numeroDocumento) {
      this.clienteService.consultarPorIdTipoDocumento(numeroDocumento,tipoDocumento).subscribe(
        (data: cliente) => {
          this.persona = data;
        },
        (error) => {
          alert(error.error.mensajes[0]);
        }
      );
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.clienteService.update(this.persona.identificador, this.persona).subscribe(
        response => {
          alert(response.mensajes[0])
          this.router.navigate(['principal/clientes']);
        },
        error => {
          console.error(error);
          alert(error.error.mensajes[0]);
        }
      );
    }
  }

  navigateToClientes() {
    this.router.navigate(['principal/clientes']);
  }
}
