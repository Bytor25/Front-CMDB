export class cliente {
    identificador: string = '';
    numeroDocumento: string = '';
    tipoDocumento: tipoIdentificacion = new tipoIdentificacion;
    nombre: string = '';
    apellido: string = '';
    correo: string = '';
    telefono: number | null = null;
    estado: boolean = true
}
export class tipoIdentificacion{
    identificador: string = '';
    nombre: string = '';
}