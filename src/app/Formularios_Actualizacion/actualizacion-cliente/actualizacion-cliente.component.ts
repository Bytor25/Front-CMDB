import { Component, OnInit } from '@angular/core';
import { cliente } from '../../clases/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../Servicios/cliente.service';

@Component({
  selector: 'app-actualizacion-cliente',
  templateUrl: './actualizacion-cliente.component.html',
  styleUrl: './actualizacion-cliente.component.css'
})
export class ActualizacionClienteComponent implements OnInit {

  updateForm: FormGroup;
  persona: cliente = new cliente;
  visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private router: Router
  ) { 
    this.updateForm = this.fb.group({
      numeroDocumento: [{value: '', disabled: true}, Validators.required],
      tipoDocumento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const numeroDocumento = params.get('numeroDocumento');
      if (numeroDocumento) {
        this.clienteService.consultarPorId(numeroDocumento).subscribe(
          (data: cliente) => {
            if (data) {
              this.persona = data;
            } else {
              this.router.navigate(['clientes/ConsultarCLientes']);
            }
          },
          error => {
            console.error(error);
            alert(error.error.mensajes[0]);
          }
        );
      }
    });
  }

  actualizarCliente(): void {
    this.clienteService.update(this.persona).subscribe(
      (response) => {
        alert(response.mensajes[0]);
        this.router.navigate(['princpial/clientes']); // Redirigir a una página adecuada después de la actualización
      },
      error => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }

  navigateToClientes(): void {
    this.router.navigate(['principal/clientes']);
  }


}
