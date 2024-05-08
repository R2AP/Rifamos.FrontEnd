import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule,MatIconModule, ReactiveFormsModule],
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent {
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
  
}
