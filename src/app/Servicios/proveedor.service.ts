import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { proveedor } from "../clases/proveedor";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class ProveedorService {
    private url: string = "http://localhost:8080/api/v1/proveedores";

  constructor(private http: HttpClient) { }

  create(Proveedor: any): Observable<any> {
    return this.http.post<proveedor>(this.url, Proveedor);
  }

  update(numeroDocumento: String, Proveedor: any): Observable<any> {
    return this.http.put<void>(`${this.url}/${numeroDocumento}`, Proveedor)
  }

  consultarPorId(numeroDocumento: string): Observable<any> {
    return this.http.get<{ datos: proveedor[] }>(`${this.url}/${numeroDocumento}`).pipe(
      map(response => response.datos),
    );
  }

  getProveedor(): Observable<any> {
    return this.http.get<{ datos: proveedor[] }>(this.url).pipe(
      map(response => response.datos)
    );
  }

  consultarPorIdTipoDocumento(numeroDocumento: String, tipoDocumento: any): Observable<any> {
    return this.http.get<{datos: proveedor[]}>(`${this.url}/${numeroDocumento}/${tipoDocumento}`).pipe(
      map(response => response.datos[0]),
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      if (error.error && error.error.mensajes) {
        errorMessage = error.error.mensajes.join(', ');
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
    }
    return throwError({ mensajes: [errorMessage] });
  }


  }