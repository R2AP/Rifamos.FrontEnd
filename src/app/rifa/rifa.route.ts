import { Routes } from '@angular/router';
import { RifaDetalleComponent } from './rifa-detalle/rifa-detalle.component';
import { PasarelaPagoComponent } from './pasarela-pago/pasarela-pago.component';
import { CompraRealizadaComponent } from './compra-realizada/compra-realizada.component';


export const RIFA_ROUTES: Routes = [
    { path: '', component: RifaDetalleComponent },
    { path: 'pago', component: PasarelaPagoComponent},
    { path: 'compra-realizada', component: CompraRealizadaComponent}
];
