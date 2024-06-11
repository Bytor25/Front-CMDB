import { Component } from '@angular/core';
import { proveedor } from '../../clases/proveedor';

@Component({
  selector: 'app-actualizacion-proveedor',
  templateUrl: './actualizacion-proveedor.component.html',
  styleUrl: './actualizacion-proveedor.component.css'
})
export class ActualizacionProveedorComponent {

  visible: boolean = false;

  persona : proveedor = new proveedor();
}
