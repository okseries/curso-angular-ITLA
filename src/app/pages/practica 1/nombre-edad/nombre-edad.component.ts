import { Component, input } from '@angular/core';


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
  imports: [],
  templateUrl: './nombre-edad.component.html',
  styleUrl: './nombre-edad.component.css'
})
export default class NombreEdadComponent {

  public persona: PersonaI = data;

  //public persona = input.required()

}
