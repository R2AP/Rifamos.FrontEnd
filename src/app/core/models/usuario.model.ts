interface IUsuario {
    email:string;
    password:string;
    ip:string;
}

export class Usuario implements IUsuario {
    public email : string;
    public password : string;
    public ip : string;

    constructor(email: string, password:string, ip:string){
        this.email = email;
        this.password = password;
        this.ip = ip;
    }
}