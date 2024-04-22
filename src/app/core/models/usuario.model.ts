interface IUsuario {
    email:string;
    password:string;
}

export class Usuario implements IUsuario {
    public email : string;
    public password : string;

    constructor(email: string, password:string){
        this.email = email;
        this.password = password;
    }
}