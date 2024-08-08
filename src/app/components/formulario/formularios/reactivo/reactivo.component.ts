import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.css'
})
export default class ReactivoComponent {

  public usuarioForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
    createdAt: new FormControl(new Date()),
  })

  registrar() {
    const newUser = this.usuarioForm.value;

    // Obtener el arreglo de usuarios existente
    const savedUsers = localStorage.getItem('usuarios');
    let usersArray = savedUsers ? JSON.parse(savedUsers) : [];

    // Agregar el nuevo usuario al arreglo
    usersArray.push(newUser);

    // Guardar el arreglo actualizado en localStorage
    localStorage.setItem('usuarios', JSON.stringify(usersArray));

    //se limpia el formulario
    this.usuarioForm.reset();


  }
}
