import { HttpClient, HttpHeaders } from '@angular/common/http';
import { computed, inject, Inject, Injectable, signal } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { UserI, UsuariosI } from '../../interfaces/interface';

interface State {
  users: UserI[];
  success: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private http = inject(HttpClient);

  private API_URL = 'http://localhost:3000/api/v1/user';

  #state = signal<State>({
    users: [],
    success: true,
  })

  public users = computed(() => this.#state().users);
  public success = computed(() => this.#state().success);

  constructor(){
    const token = this.getToken();
    // Configurar los encabezados de la solicitud, incluyendo el token de autenticación
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, 
    });

    this.http.get<UsuariosI>(this.API_URL, { headers })
    .pipe(delay(1000))
    .subscribe(res => {
      this.#state.set({
        users: res.data,
        success: res.success
      })
    })
  }

  private getToken(): string {
    return localStorage.getItem('access_token') || '';
  }
  
}
