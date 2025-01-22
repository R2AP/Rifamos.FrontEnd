import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './shared/components/layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './shared/components/layout/login-layout/login-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { QuienesSomosComponent } from './enterprise/quienes-somos/quienes-somos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        loadChildren: () => import('./rifa/rifa.route').then(m => m.RIFA_ROUTES)
    },
    {
        path: 'sesion',
        component: LoginLayoutComponent,
        loadChildren: () => import('./auth/auth.route').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'enterprise',
        component: HomeLayoutComponent,
        loadChildren: () => import('./enterprise/enterprise.route').then(m => m.ENTERPRISE_ROUTES)        
    },
    {
        path: '**',
        component: NotFoundComponent
        //loadComponent: () => import('./shared/components/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];