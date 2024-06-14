import { Component } from '@angular/core';
import { proveedor } from '../../clases/proveedor';
import { ProveedorService } from '../../Servicios/proveedor.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizacion-proveedor',
  templateUrl: './actualizacion-proveedor.component.html',
  styleUrl: './actualizacion-proveedor.component.css'
})
export class ActualizacionProveedorComponent {

  persona: proveedor = new proveedor();
  visible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private proveedorService: ProveedorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const numeroDocumento = this.route.snapshot.paramMap.get('id');
    const tipoDocumento = this.route.snapshot.paramMap.get('tipoDocumento');

    if (numeroDocumento) {
      this.proveedorService.consultarPorIdTipoDocumento(numeroDocumento,tipoDocumento).subscribe(
        (data: proveedor) => {
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
      this.proveedorService.update(this.persona.identificador, this.persona).subscribe(

        response => {
          alert(response.mensajes[0])
          this.router.navigate(['principal/proveedores']);
        },
        error => {
          console.error(error);
          alert(error.error.mensajes[0]);
        }
      );
    }
  }

  navigateToClientes() {
    this.router.navigate(['principal/proveedores']);
  }
}
