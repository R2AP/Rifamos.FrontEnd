import { Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { PoliticasPrivacidadComponent } from './politicas-privacidad/politicas-privacidad.component';
import { TerminosCondicionesComponent } from './terminos-condiciones/terminos-condiciones.component';

export const ENTERPRISE_ROUTES: Routes = [
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
    { path: 'politicas-privacidad', component: PoliticasPrivacidadComponent },
    { path: 'terminos-condiciones', component: TerminosCondicionesComponent },    
];
