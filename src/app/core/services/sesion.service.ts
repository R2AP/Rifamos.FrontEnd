import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

const apiURL = "http://localhost:5175/api";

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private readonly _http = inject(HttpClient);
  constructor() { }

  iniciarSesion(usuario : Usuario): Observable<any> {
    return this._http.post(apiURL + '/login/loguearse', usuario);
  }
}
