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
                path: 'inicio',
                title: 'Inicio',
                loadComponent: () => import('./pages/practica 1/mensaje/mensaje.component'),
            }, 
            {
                path: 'nombre-edad',
                title: 'Nombre y Edad',
                loadComponent: () => import('./pages/practica 1/nombre-edad/nombre-edad.component'),
            },
            {
                path: 'resta-producto',
                title: 'Resta y Producto',
                loadComponent: () => import('./pages/practica 1/resta-producto/resta-producto.component'),
            },
            {
                path: 'area',
                title: 'Area',
                loadComponent: () => import('./pages/practica 1/area-circulo/area-circulo.component'),
            },
            {
                path: 'condicional',
                title: 'Condicional',
                loadComponent: () => import('./pages/practica 1/condicional/condicional.component'),
            },
            {
                path: 'fecha',
                title: 'Fecha',
                loadComponent: () => import('./pages/practica 1/fecha/fecha.component'),
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