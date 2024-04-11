import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

const apiURL = "http://localhost:5175/api";

@Injectable({
  providedIn: 'root'
})
export class RifaService {
  private readonly _http = inject(HttpClient);
  constructor() { }

  obtenerRifaDetalle(rifaId : number): Observable<any> {
    return this._http.get(apiURL + '/rifa/obtener-rifa/' + rifaId);
  }

  obtenerPremios(rifaId : number): Observable<any> {
    return this._http.get(apiURL + '/premio/obtener-lista-premio/' + rifaId);
  }

  obtenerPrecios(rifaId : number): Observable<any> {
    return this._http.get(apiURL + '/precio/listar-precio/' + rifaId);
  }
}
