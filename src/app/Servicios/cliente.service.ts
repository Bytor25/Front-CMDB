import { HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { cliente } from "../clases/cliente";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })

  export class ClienteService {
    private url: string = "http://localhost:8080/api/v1/clientes";

    id:string = '';
    
    constructor(private http:HttpClient){ }

    create(Cliente:any):Observable<any>{

      return this.http.post<cliente>(this.url,Cliente);

    }

    update(Cliente:cliente):Observable<any>{
      return this.http.post<cliente>(this.url,Cliente);
    }

    consultarPorId(numeroDocumento: string): Observable<any> {
      const url = `${this.url}/${numeroDocumento}`;
      return this.http.get<{datos: cliente}>(this.url).pipe(
        map(response => response.datos)
      );
    }

    getCliente(): Observable<any> {
      return this.http.get<{ datos: cliente[] }>(this.url).pipe(
        map(response => response.datos)
      );
    }

  }