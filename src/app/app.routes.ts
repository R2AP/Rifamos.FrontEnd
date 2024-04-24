import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './shared/components/layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './shared/components/layout/login-layout/login-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        loadChildren: () => import('./rifa/rifa.route').then(m => m.RIFA_ROUTES)
    },
    {
        path: 'iniciar-sesion',
        component: LoginLayoutComponent,
        loadChildren: () => import('./auth/auth.route').then(m => m.AUTH_ROUTES)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];