import { tipoIdentificacion } from "./tipoDocumento";

export class proveedor {
    identificador: string = '';
    numeroDocumento: string = '';
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    telefono: number | null = null;
}
