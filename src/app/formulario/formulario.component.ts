import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  openAlert: boolean = false;
  nombre: string = "";
  
imprimirNombre(name: string){
  this.nombre = name;
  this.openAlert = true;
}


}
