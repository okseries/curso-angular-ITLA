import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UsuarioInterface } from '../../interfaces/interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  constructor( private router: Router ) {}

  public loginError: boolean = false;
  public errorMessage: string = '';

  public loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const usuario = this.loginForm.value;

    // Obtiene todos los usuarios desde localStorage y los parsea a un array
    const usuarios: UsuarioInterface[] = JSON.parse(localStorage.getItem('usuarios') || '[]');

    if (usuarios.length > 0) {
      // Busca el usuario que coincida con el nombre de usuario y la contraseña ingresados
      const userFound = usuarios.find(u => u.user === usuario.user && u.password === usuario.password);

      //creamos una especie de objeto que va a funcionar casi casi como un token
      const usuarioLogeado = {
        usuario: userFound?.user, 
        role: userFound?.role, 
      }

      

      if (userFound) {
        //aqui guardamos el objeto en el localStorage para que con un guard podamos verificar si hay un usuario logueado
      localStorage.setItem('usuarioAutenticado', JSON.stringify(usuarioLogeado));
        //se limpia el formulario
        this.loginForm.reset();

        //redireccionamos a la página principal
        this.router.navigate(['/'])

      } else {
        console.log('Usuario o contraseña incorrectos');
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.loginError = true;
      }
    } else {
      console.log('No se encontraron usuarios guardados');
      this.errorMessage = 'No se encontro el usuario';
      this.loginError = true;
    }
  }

}
