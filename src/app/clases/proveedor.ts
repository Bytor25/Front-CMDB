export class proveedor {
    numeroDocumento: number | null = null;
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    telefono: number | null = null;
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}