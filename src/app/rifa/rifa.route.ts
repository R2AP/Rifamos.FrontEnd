import { Routes } from '@angular/router';
import { RifaDetalleComponent } from './rifa-detalle/rifa-detalle.component';
import { PasarelaPagoComponent } from './pasarela-pago/pasarela-pago.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';
import { userGuard } from '../core/guards/user.guard';
import { LandingComponent } from './landing/landing.component';


export const RIFA_ROUTES: Routes = [
    { path: '', component: LandingComponent },
    { path: 'rifa/:rifaId', component: RifaDetalleComponent },
    { path: 'pago', component: PasarelaPagoComponent, canActivate: [userGuard]},
    { path: 'compra-realizada', component: CompraRealizadaComponent, canActivate: [userGuard]},
];