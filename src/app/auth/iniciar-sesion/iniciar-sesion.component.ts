import { Component, inject } from '@angular/core';
//import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { SesionService } from '../../core/services/sesion.service';
import { Usuario } from '../../core/models/usuario.model';
import { CookieService } from 'ngx-cookie-service'
import { Router, RouterLink } from '@angular/router';
import * as forge from 'node-forge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [/*MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, ReactiveFormsModule, CommonModule, MatIconModule, RouterLink*/],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  private readonly sesionSvc = inject(SesionService);
  private readonly cookieSvc = inject(CookieService);
  private readonly router = inject(Router);
  errorFormulario:string = "";

  // constructor (
  //   private formBuilder : FormBuilder
  // ){}

  // sesionForm = this.formBuilder.group({
  //   usuario: ['', [Validators.required, Validators.email]],
  //   contrasena: ['', [Validators.required, Validators.minLength(8)]]
  // })

  // get usuario() {
  //   return this.sesionForm.get('usuario') as FormControl;
  // }

  // get contrasena() {
  //   return this.sesionForm.get('contrasena') as FormControl;
  // }

  onSubmit(){
    const usuario:Usuario = new Usuario(
                                  '', //nombres
                                  '', //apellidoPaterno
                                  '', //apellidoPaterno
                                  '',//this.sesionForm.value.usuario ? this.sesionForm.value.usuario: '',
                                  '', //this.sesionForm.value.contrasena ? this.sesionForm.value.contrasena: '',
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
        error:(error) => {
          this.errorFormulario = error.error.mensaje;
          console.log('Error consultando la rifa', error)
        }
      })
  }

  obtenerLlave(){
    return this.sesionSvc.obtenerLlave("/core/keys/rifamostodopbl.pem");
  }
}
