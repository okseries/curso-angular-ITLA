import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');

  if (usuarioAutenticado) {
    return true
  }

  return router.navigate(['./app/auth/login'])


};
