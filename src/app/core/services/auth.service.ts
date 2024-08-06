import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginI } from '../../interfaces/interface';



@Injectable({
  providedIn: 'root'
})
export  class AuthService {

  private LOGIN_URL = 'http://localhost:3000/api/auth/v1/login';
  private tokenKey = 'authToken';

  constructor( private httpClient: HttpClient, private router: Router) { }
  

  login(userData: LoginI): Observable<any>{
    return this.httpClient.post<any>(this.LOGIN_URL, userData).
    pipe(tap(response => {
      if (response.access_token) {
        console.log(response.access_token);
        this.setToken(response.access_token)
        console.log(this.isAuthenticated());
        
      }
    }));
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
