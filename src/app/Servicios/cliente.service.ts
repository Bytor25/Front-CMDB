import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { cliente } from "../clases/cliente";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  export class ClienteService {
    private url: string = "http://localhost:8080/api/v1/clientes";

    id:string = '';
    
    constructor(private http:HttpClient){ }

    getCredenciales(Cliente:cliente):Observable<{datos:[cliente],mensajes:[]}>{
      return this.http.post<{datos:[cliente],mensajes:[]}>(this.url+'/consultar',Cliente)
    }
  
    create(Cliente:cliente):Observable<cliente>{
      console.log(Cliente)
      return this.http.post<cliente>(this.url,Cliente);

    }

    update(Cliente:cliente,id:string):Observable<cliente>{
      return this.http.put<cliente>(this.url+'/'+id,Cliente);
    }

    getCliente(Cliente:cliente):Observable<{datos:[cliente],mensajes:[]}>{
      return this.http.post<{datos:[cliente],mensajes:[]}>(this.url+'/consultar',Cliente);
    }

  }