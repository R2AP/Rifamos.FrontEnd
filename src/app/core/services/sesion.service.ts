import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { CookieService } from 'ngx-cookie-service';

const apiURL = "http://localhost:5175/api";

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private readonly _http = inject(HttpClient);
  private tokenSaved = inject(CookieService);
  constructor() { }

  iniciarSesion(usuario : Usuario): Observable<any> {
    return this._http.post(apiURL + '/login/loguearse', usuario);
  }

  obtenerLlave(ruta:string): Observable<string> {
    return this._http.get(ruta, {responseType: 'text'});
  }

  sesionIniciada():boolean{
    return (this.tokenSaved.get('token') ? true:false);
  }

  cerrarSesion(){
    this.tokenSaved.delete('token');
  }
}
