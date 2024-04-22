import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sesion',
        loadChildren: () => import('./auth/auth.route').then(m => m.AUTH_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./rifa/rifa.route').then(m => m.RIFA_ROUTES)
    },
    {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];