import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { proveedor } from "../clases/proveedor";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class ProveedorService {
    private url: string = "http://localhost:8080/api/v1/proveedor";

    id:string = '';
    
    constructor(private http:HttpClient){}

    getCredenciales(Proveedor:proveedor):Observable<{datos:[proveedor],mensajes:[]}>{
      return this.http.post<{datos:[proveedor],mensajes:[]}>(this.url+'/consultar',Proveedor)
    }
  
    create(Proveedor:proveedor):Observable<proveedor>{
      return this.http.post<proveedor>(this.url,Proveedor);
    }

    update(Proveedor:proveedor,id:string):Observable<proveedor>{
      return this.http.put<proveedor>(this.url+'/'+id,Proveedor);
    }

    getProveedor(Proveedor:proveedor):Observable<{datos:[proveedor],mensajes:[]}>{
      return this.http.post<{datos:[proveedor],mensajes:[]}>(this.url+'/consultar',Proveedor);
    }

  }