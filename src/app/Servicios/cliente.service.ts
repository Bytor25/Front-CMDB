import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cliente } from "../clases/cliente";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url: string = "https://localhost:8080/generales/api/v1/clientes";

  constructor(private http: HttpClient) { }

  create(Cliente: any): Observable<any> {
    return this.http.post<cliente>(this.url, Cliente);
  }

  update(numeroDocumento: String, Cliente: any): Observable<any> {
    return this.http.put<void>(`${this.url}/${numeroDocumento}`, Cliente)
  }

  consultarPorId(numeroDocumento: string): Observable<any> {
    return this.http.get<{ datos: cliente[] }>(`${this.url}/${numeroDocumento}`).pipe(
      map(response => response.datos),
    );
  }

  getCliente(): Observable<any> {
    return this.http.get<{ datos: cliente[] }>(this.url).pipe(
      map(response => response.datos)
    );
  }

  consultarPorIdTipoDocumento(identificador: String, tipoDocumento: any): Observable<any> {
    return this.http.get<{datos: cliente[]}>(`${this.url}/${identificador}/${tipoDocumento}`).pipe(
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
