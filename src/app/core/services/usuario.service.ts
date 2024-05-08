import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario.model";

const apiURL = "http://localhost:5175/api";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private readonly _http = inject(HttpClient);

    registrarUsuario(usuario : Usuario):Observable<any>{
        return this._http.post(apiURL + '/usuario/registro-usuario', usuario);
    };

    recuperarContrasenia(correoElectronico : string):Observable<any>{
        return this._http.put(apiURL + '/usuario/recuperar-password', {}, {params: {"oEmail": correoElectronico}});
    };
}