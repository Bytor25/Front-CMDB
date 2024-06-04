export class proveedor {

    numero_documento: number | null = null;
    tipo_documento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    telefono: number | null = null;
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}