import { Component, input } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';


interface PersonaI {
  nombre: string;
  edad: number;
}

const data: PersonaI ={
  nombre: 'Alan Ross',
  edad: 28,
}

@Component({
  selector: 'app-nombre-edad',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './nombre-edad.component.html',
  styleUrl: './nombre-edad.component.css'
})
export default class NombreEdadComponent {

  public persona: PersonaI = data;

  public titulo: string = 'Detalles de la Persona';

  
  


}
