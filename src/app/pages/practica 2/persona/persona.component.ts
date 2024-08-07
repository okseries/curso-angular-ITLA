import { Component, inject } from '@angular/core';
import { TableComponent } from '../../../components/table/table.component';
import { datosPersonas } from './persona.data';
import { PersonaService } from './persona.service';

const header: any = ['nombre', 'apellido', 'cedula', 'direccion', 'edad',]



@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export default class PersonaComponent {
  public header: any = header;
  public personas: any = datosPersonas;

  public personaService = inject(PersonaService);

  click() {
    alert('hola');
  }

  mostrarEventos(id: number) {
    this.personaService.mostrarEventos(id);
  }

  eventos(data: any) {
    switch (true) {
      case data.id % 2 === 0 && data.id < 11:
        console.log('Persona:', data);

        break;

      case data.id % 2 != 0 && data.id < 10:
        alert("La persona " + data.nombre + " con la cedula " + data.cedula + " vive en la dirección " + data.direccion)

        break;

      case data.id % 2 === 0 && data.id > 11 && data.id <= 20:
        alert("La persona " + data.nombre + " tiene " + data.edad + " años ")

        break;


      default:
        break;
    }
  }



}
