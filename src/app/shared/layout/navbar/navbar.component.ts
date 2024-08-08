import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor( private router: Router){}

  logout(): void{
    //aqui se remueve el dique token y se redirecciona al login
    localStorage.removeItem('usuarioAutenticado');
        this.router.navigate(['/app/auth/login'])
  }

}
