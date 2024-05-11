import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { Usuario } from '../../core/models/usuario.model';
import { AbstractControl, FormBuilder, FormControl, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule,MatIconModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
  private readonly usuarioSvc = inject(UsuarioService);
  private readonly router = inject(Router);

  errorFormulario:string = "";
  
  hide = true;
  constructor (
    private formBuilder : FormBuilder
  ){}

  sesionForm = this.formBuilder.group({
    nombres: [''],
    apellidoPaterno: [''],
    apellidoMaterno: [''],
    usuario: ['', [Validators.required, Validators.email]],
    contrasena: ['', [Validators.required, Validators.minLength(8)]],
    contrasenaConfirmacion: ['', Validators.required],
    tipoDocumento: [''],
    numeroDocumento: ['']
  },
  {
    validators: this.passwordMatchValidator,
  });

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

  get f(): { [key: string]: AbstractControl } {
    return this.sesionForm.controls;
  }

  confirmErrorMatcher = {
    isErrorState: (control: FormControl, form: FormGroupDirective): boolean => {
      const controlInvalid = control.touched && control.invalid;
      const formInvalid = control.touched && this.contrasena.touched && this.sesionForm.hasError('mismatch');
      return controlInvalid || formInvalid;
    }
  }

passwordMatchValidator(control: AbstractControl) {
  return control.get('contrasena')?.value ===
        control.get('contrasenaConfirmacion')?.value
        ? null
        : { mismatch: true};
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
          this.errorFormulario = error.error.mensaje;
          console.log('Error consultando la rifa', error)
        }
      })
  }

}
