import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
  
  if (usuarioAutenticado) {
    return router.navigate(['/'])
  }
  return true

};
