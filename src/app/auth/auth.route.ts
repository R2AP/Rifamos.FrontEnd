import { Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

export const AUTH_ROUTES: Routes = [
    { path: 'iniciar', component: IniciarSesionComponent },
    { path: 'registrate', component: RegistrarUsuarioComponent},
    { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent}
];
