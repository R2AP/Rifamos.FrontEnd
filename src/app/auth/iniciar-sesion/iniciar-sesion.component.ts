import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private readonly sesionSvc = inject(SesionService);
  private readonly cookieSvc = inject(CookieService);
  private readonly router = inject(Router);

  constructor (
    private formBuilder : FormBuilder
  ){}

  sesionForm = this.formBuilder.group({
    usuario: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  })

  get usuario() {
    return this.sesionForm.get('usuario') as FormControl;
  }

  get contrasena() {
    return this.sesionForm.get('contrasena') as FormControl;
  }

  onSubmit(){
    const usuario:Usuario = new Usuario(
                                  '', //nombres
                                  '', //apellidoPaterno
                                  '', //apellidoPaterno
                                  this.sesionForm.value.usuario ? this.sesionForm.value.usuario: '',
                                  this.sesionForm.value.contrasena ? this.sesionForm.value.contrasena: '',
                                  1, //tipoDocumento
                                  '', //numeroDocumento
                                  '', //telefono
                                  "00.00.00.00",
                                  ''); //auditoriaUsuario

      this.sesionSvc.iniciarSesion(usuario).subscribe({
        next:(res: any) => {

          if (res.token){
            this.cookieSvc.set('token', res.token);
            this.router.navigate(['/pago']);
            sessionStorage.setItem('usuario',res.nombres);
            sessionStorage.setItem('email',res.email);
          }
  
        },
        error:(error) => console.log('Error consultando la rifa', error)
      })
  }

  obtenerLlave(){
    return this.sesionSvc.obtenerLlave("/core/keys/rifamostodopbl.pem");
  }
}
