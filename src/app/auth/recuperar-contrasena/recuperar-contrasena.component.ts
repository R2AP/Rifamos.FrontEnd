import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {
  private readonly usuarioSvc = inject(UsuarioService);

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
          alert("Se ha enviado el correo");
        },
        error:(error) => console.log('Error consultando la rifa', error)
      })
  }
}
