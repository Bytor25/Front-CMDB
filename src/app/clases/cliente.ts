export class cliente {
    id: string = '';
    numero_documento: string = '';
    tipo_documento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    apellidos: string = '';
    email: string = '';
    telefono: number | null = null;
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}