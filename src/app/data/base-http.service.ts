import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  public http = inject(HttpClient);
  public apiUrl = environment.API_URL;
}
