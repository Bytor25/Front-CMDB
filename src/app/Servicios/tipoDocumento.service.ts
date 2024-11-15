import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from "rxjs";
import { tipoIdentificacion } from "../clases/tipoDocumento";
@Injectable({
    providedIn: 'root'
  })
export class TipoDocumentoService {
    private url: string = "https://localhost:8080/generales/api/v1/tiposdocumento";
    constructor(private http: HttpClient){}

    getTipoDocumento(): Observable<any> {
        
        return this.http.get<{ datos: tipoIdentificacion }>(this.url).pipe(
          map(response => response.datos)
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