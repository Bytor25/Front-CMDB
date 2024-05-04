import { Component } from '@angular/core';
import { Persona } from './persona';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

  persona: Persona = {
    nombre: "Juan Pablo",
    edad: 30
  }

  numero: number =1;
  decrementar(){
    this.numero--;
  }
  incrementar(){
    this.numero ++;
  }
}



