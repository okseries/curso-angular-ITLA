import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

export const routes: Routes = [
    {
        path: 'app/auth/login',
        title: 'Login',
        loadComponent: () => import('./auth/login/login.component'),
        //canActivate: [AuthenticatedGuard]
    },
    {
        path: 'app',
        loadComponent: () => import('./layout/layout.component'),
       
        children:[
            
            {
                path: 'inicio',
                title: 'Inicio',
                loadComponent: () => import('./pages/practica 1/mensaje/mensaje.component'),
                //canActivate: [AuthGuard]
            }, 
            {
                path: 'usuarios',
                title: 'Usuarios',
                loadComponent: () => import('./pages/users/users.component'),
                //canActivate: [AuthGuard]
            },

            {
                path: '', redirectTo: 'inicio', pathMatch: 'full'
            }
        ] 
    },
    {
        path: '',
        redirectTo: '/app',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/app',
        pathMatch: 'full'
    }
];