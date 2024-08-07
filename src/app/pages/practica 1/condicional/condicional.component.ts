import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condicional',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './condicional.component.html',
  styleUrl: './condicional.component.css'
})
export default class CondicionalComponent {
  public isLoggedIn: boolean = false;
  
  public login () {
    const estado = this.isLoggedIn = !this.isLoggedIn;
    const  titulo = `Condicional: ${this.isLoggedIn}`;
    return {estado, titulo }
  }

   
}
