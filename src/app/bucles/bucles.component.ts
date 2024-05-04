import { Component } from '@angular/core';
import { Persona } from '../hello-world/persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas:Persona[] = [
    {nombre: 'Juan', edad:20},
    {nombre: 'Luna', edad:15},
    {nombre: 'Carlos', edad:18},
    {nombre: 'Andres', edad:20}
  ];

}
