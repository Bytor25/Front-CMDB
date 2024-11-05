import { tipoIdentificacion } from "./tipoDocumento";

export class cliente {
    identificador: string = '';
    numeroDocumento: string = '';
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    apellidos: string = '';
    correo: string = '';
    telefono: number | null = null;
    estado: boolean = true
}
