import { Routes } from '@angular/router';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'app/auth/login',
        title: 'Login',
        loadComponent: () => import('./auth/login/login.component'),
        canActivate: [AuthenticatedGuard]
        
    },
    {
        path: 'app/auth/register',
        title: 'Register',
        loadComponent: () => import('./auth/register/register.component'),
        
    },
    {
        path: 'app',
        loadComponent: () => import('./layout/layout.component'),
       
        children:[
            
            {
                path: 'practica-1/inicio',
                title: 'Inicio',
                loadComponent: () => import('./pages/practica 1/mensaje/mensaje.component'),
                canActivate: [AuthGuard],
            }, 
            {
                path: 'practica-1/nombre-edad',
                title: 'Nombre y Edad',
                loadComponent: () => import('./pages/practica 1/nombre-edad/nombre-edad.component'),
                canActivate: [AuthGuard],
            },
            {
                path: 'practica-1/resta-producto',
                title: 'Resta y Producto',
                loadComponent: () => import('./pages/practica 1/resta-producto/resta-producto.component'),
                canActivate: [AuthGuard],
            },
            {
                path: 'practica-1/area',
                title: 'Area',
                loadComponent: () => import('./pages/practica 1/area-circulo/area-circulo.component'),
                canActivate: [AuthGuard],
            },
            {
                path: 'practica-1/condicional',
                title: 'Condicional',
                loadComponent: () => import('./pages/practica 1/condicional/condicional.component'),
                canActivate: [AuthGuard],
            },
            {
                path: 'practica-1/fecha',
                title: 'Fecha',
                loadComponent: () => import('./pages/practica 1/fecha/fecha.component'),
                canActivate: [AuthGuard],
            },

            {
                path: 'practica-2/persona',
                title: 'Personas',
                loadComponent: () => import('./pages/practica 2/persona/persona.component'),
                canActivate: [AuthGuard],
            },
            {
                path: 'practica-2/formulario/reactivo',
                title: 'Formulario',
                loadComponent: () => import('./components/formulario/formularios/reactivo/reactivo.component'),
                canActivate: [AuthGuard],
            },

            {
                path: '', redirectTo: 'practica-1/inicio', pathMatch: 'full'
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