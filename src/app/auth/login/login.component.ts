import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  form!: FormGroup; // Uso del modificador de aseguramiento
  private fb: FormBuilder; // Declaración de fb

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router ) {
    this.fb = fb; // Inicialización de fb en el constructor
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  
  
  favoriteColorControl = new FormControl('');
  name = new FormControl('');
  
  
  
  
  login(): void {
    if (true) {
      const formData = this.form.value;
      
      const data = {
        user: formData.user,
        password: formData.password,
      }
      console.log(' Data:', data);

      this.authService.login(data).subscribe({
        next: ()=> this.router.navigate(['/dasboard']),
        error: (err) => console.log('Error al iniciar sesion', err)
      })

    } else {
      console.log('Formulario inválido');
    }
  }

}
