import { Component, OnInit } from '@angular/core';
import { cliente } from '../../clases/cliente';
import { ClienteService } from '../../Servicios/cliente.service';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  visible: boolean = false;
  persona: cliente = new cliente();
  mensaje: string = "";

  
  constructor(private clienteservice: ClienteService, private router: Router ){}

  navegarAClientes() {
    this.router.navigate(['/principal/clientes']);
  }
    

  ngOnInit(): void {
  }

  create(): void {
    this.clienteservice.create(this.persona).subscribe(
      (response)=>{
        alert("su registro a sido exitoso")
        this.router.navigate(['principal/clientes'])
      },
   (error) => {
      if (error.error && error.error.mensajes && error.error.mensajes.length > 0) {
      alert(error.error.mensajes[0])
      this.mensaje= error.error.mensajes[0];
    }
  }
    );
  }
}
