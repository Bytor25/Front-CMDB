import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../Servicios/cliente.service';
import { Router } from '@angular/router';
import { TipoDocumentoService } from '../../Servicios/tipoDocumento.service';
import { tipoIdentificacion } from '../../clases/tipoDocumento';
import { cliente } from '../../clases/cliente';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  visible: boolean = false;
  persona: cliente = new cliente;
  mensaje: string = "";
  tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
  tiposDocumentos: tipoIdentificacion[] = [];

  
  constructor(private clienteservice: ClienteService, private router: Router, private tipoDocumentoService: TipoDocumentoService){}

  ngOnInit(): void {
    this.getTiposDocumentos();
  }


  create(): void {
    this.clienteservice.create(this.persona).subscribe(
      (resp)=>{
        alert(resp.mensajes[0]);
        this.router.navigate(['principal/clientes'])
      },
   (error) => {
    console.error(error);
    alert(error.error.mensajes[0]);
  }
    );
  }

  getTiposDocumentos(): void{
    this.tipoDocumentoService.getTipoDocumento().subscribe(
      (response) =>{
        this.tiposDocumentos = response;
      },
      (error) => console.error('Error fetching clientes:', error)
    );
  }
}
