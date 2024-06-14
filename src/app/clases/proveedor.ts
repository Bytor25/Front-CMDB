export class proveedor {
    numeroDocumento: string = '';
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    telefono: number | null = null;
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}