import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {
  private readonly usuarioSvc = inject(UsuarioService);
  private readonly router = inject(Router);
  errorFormulario:string = "";
  correoEnviado:boolean=false;

  constructor (
    private formBuilder : FormBuilder
  ){}

  sesionForm = this.formBuilder.group({
    correoElectronico: ['', [Validators.required, Validators.email]]
  })

  get correoElectronico() {
    return this.sesionForm.get('correoElectronico') as FormControl;
  }

  onSubmit(){
    let correo: string;
    if (!this.sesionForm.value.correoElectronico){
      alert("Ingrese un correo electrónico correcto");
      return;
    }
    else correo = this.sesionForm.value.correoElectronico

      this.usuarioSvc.recuperarContrasenia(correo).subscribe({
        next:(res: any) => {
          this.correoEnviado=true;
          
          setTimeout( () => {
            this.router.navigate(['/sesion/iniciar']);
         }, 4000); 
        },
        error:(error) => {
          this.errorFormulario = error.error.mensaje;
          console.log('Error consultando la rifa', error)
        }
      })
  }
}
