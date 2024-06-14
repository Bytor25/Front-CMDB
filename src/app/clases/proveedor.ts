export class proveedor {
    identificador: string = '';
    numeroDocumento: string = '';
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    telefono: number | null = null;
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}