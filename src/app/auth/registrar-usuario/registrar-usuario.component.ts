import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { Usuario } from '../../core/models/usuario.model';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule,MatIconModule, ReactiveFormsModule],
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  private readonly usuarioSvc = inject(UsuarioService);
  private readonly router = inject(Router);

  hide = true;
  constructor (
    private formBuilder : FormBuilder
  ){}

  sesionForm = this.formBuilder.group({
    nombres: [''],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    usuario: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
    contrasenaConfirmacion: ['', Validators.required],
    tipoDocumento: [''],
    numeroDocumento: ['']
  })

  get nombres() {
    return this.sesionForm.get('nombres') as FormControl;
  }

  get apellidoPaterno() {
    return this.sesionForm.get('apellidoPaterno') as FormControl;
  }

  get apellidoMaterno() {
    return this.sesionForm.get('apellidoMaterno') as FormControl;
  }
  
  get usuario() {
    return this.sesionForm.get('usuario') as FormControl;
  }

  get contrasena() {
    return this.sesionForm.get('contrasena') as FormControl;
  }

  get contrasenaConfirmacion() {
    return this.sesionForm.get('contrasenaConfirmacion') as FormControl;
  }

  get tipoDocumento() {
    return this.sesionForm.get('tipoDocumento') as FormControl;
  }

  get numeroDocumento() {
    return this.sesionForm.get('numeroDocumento') as FormControl;
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

      this.usuarioSvc.registrarUsuario(usuario).subscribe({
        next:(res: any) => {
          alert("Usuario registrado con éxito");
          this.router.navigate(['/sesion/iniciar']);
        },
        error:(error) => {
          alert('No se pudo registrar el usuario');
          console.log('Error consultando la rifa', error)
        }
      })
  }

}
