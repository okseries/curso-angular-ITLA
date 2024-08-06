import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const rouer = inject(Router);
  if (authService.isAuthenticated()) {
    return rouer.navigate(['/'])
  }
  return true
};
