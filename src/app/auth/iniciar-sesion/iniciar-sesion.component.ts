import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SesionService } from '../../core/services/sesion.service';
import { Usuario } from '../../core/models/usuario.model';
import { CookieService } from 'ngx-cookie-service'
import { Router } from '@angular/router';
import * as forge from 'node-forge';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  sesionForm = this.formBuilder.group({
    usuario: '',
    contrasena: ''
  })
  private readonly sesionSvc = inject(SesionService);
  private readonly cookieSvc = inject(CookieService);
  private readonly router = inject(Router);

  constructor (
    private formBuilder : FormBuilder
  ){}

  onSubmit(){
    const usuario:Usuario = new Usuario(this.sesionForm.value.usuario ? this.sesionForm.value.usuario: '',
                                  this.sesionForm.value.contrasena ? this.sesionForm.value.contrasena: '');

      this.sesionSvc.iniciarSesion(usuario).subscribe({
        next:(res: any) => {
          
          if (res.token){
            this.cookieSvc.set('token', res.token);
            this.router.navigate(['/pago']);
          }
  
        },
        error:(error) => console.log('Error consultando la rifa', error)
      })
    /*let llave = this.obtenerLlave();
    let rsa;
    llave.subscribe((data: string)=> {
      console.log(data);
      rsa = forge.pki.publicKeyFromPem(data);
      var encryptedPassword = window.btoa(rsa.encrypt(this.sesionForm.value.contrasena ? this.sesionForm.value.contrasena: ''));
console.log(encryptedPassword);
      const usuario:Usuario = new Usuario(this.sesionForm.value.usuario ? this.sesionForm.value.usuario: '', encryptedPassword);

      this.sesionSvc.iniciarSesion(usuario).subscribe({
        next:(res: any) => {
          
          if (res.token){
            this.cookieSvc.set('token', res.token);
            this.router.navigate(['/pago']);
          }
  
        },
        error:(error) => console.log('Error consultando la rifa', error)
      })
    }) */

  }

  obtenerLlave(){
    return this.sesionSvc.obtenerLlave("/core/keys/rifamostodopbl.pem");
  }
}
