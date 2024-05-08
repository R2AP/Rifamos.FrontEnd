interface IUsuario {
    nombres:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    email:string;
    password:string;
    tipoDocumento:number;
    numeroDocumento:string;
    telefono:string;
    ip:string;
    auditoriaUsuario:string;
}

export class Usuario implements IUsuario {
    public nombres : string;
    public apellidoPaterno : string;
    public apellidoMaterno : string;
    public email : string;
    public password : string;
    public tipoDocumento : number;
    public numeroDocumento : string;
    public telefono:string;
    public ip : string;
    public auditoriaUsuario:string;

    constructor(nombres : string,
                apellidoPaterno : string,
                apellidoMaterno : string,
                email: string,
                password:string,
                tipoDocumento:number,
                numeroDocumento:string,
                telefono:string,
                ip:string,
                auditoriaUsuario:string){
        this.nombres = nombres;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.email = email;
        this.password = password;
        this.tipoDocumento = tipoDocumento;
        this.numeroDocumento = numeroDocumento;
        this.telefono = telefono;
        this.ip = ip;
        this.auditoriaUsuario = auditoriaUsuario;
    }
}