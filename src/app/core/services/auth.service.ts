import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginI } from '../../interfaces/interface';



@Injectable({
  providedIn: 'root'
})
export  class AuthService {

  private usuariosUrl = '/usuarios.json';
  private tokenKey = 'authToken';

  constructor( private httpClient: HttpClient, private router: Router) { }
  

  login(userData: LoginI): Observable<any> {
    return this.httpClient.get<any[]>(this.usuariosUrl).pipe(
      tap(usuarios => {
        const user = usuarios.find(u => u.user === userData.user && u.password === userData.password);
        if (user) {
          const token = 'static-token'; // Puedes generar un token estático o dinámico aquí
          this.setToken(token);
          console.log(this.isAuthenticated());
        } else {
          throw new Error('Invalid credentials');
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean{
    const token = this.getToken();
    if (!token) {
      return false;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    console.log('Token válido: ', Date.now() < exp);
    
    return Date.now() < exp;
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/app/auth/login'])
  }


}
