import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app/auth/login',
        title: 'Login',
        loadComponent: () => import('./auth/login/login.component'),
    },
    {
        path: 'app',
        loadComponent: () => import('./layout/layout.component'),
       
        children:[
            
            {
                path: 'practica-1/inicio',
                title: 'Inicio',
                loadComponent: () => import('./pages/practica 1/mensaje/mensaje.component'),
            }, 
            {
                path: 'practica-1/nombre-edad',
                title: 'Nombre y Edad',
                loadComponent: () => import('./pages/practica 1/nombre-edad/nombre-edad.component'),
            },
            {
                path: 'practica-1/resta-producto',
                title: 'Resta y Producto',
                loadComponent: () => import('./pages/practica 1/resta-producto/resta-producto.component'),
            },
            {
                path: 'practica-1/area',
                title: 'Area',
                loadComponent: () => import('./pages/practica 1/area-circulo/area-circulo.component'),
            },
            {
                path: 'practica-1/condicional',
                title: 'Condicional',
                loadComponent: () => import('./pages/practica 1/condicional/condicional.component'),
            },
            {
                path: 'practica-1/fecha',
                title: 'Fecha',
                loadComponent: () => import('./pages/practica 1/fecha/fecha.component'),
            },

            {
                path: 'practica-2/persona',
                title: 'Personas',
                loadComponent: () => import('./pages/practica 2/persona/persona.component'),
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