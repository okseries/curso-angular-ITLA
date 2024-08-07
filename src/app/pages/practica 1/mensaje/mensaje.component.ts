import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export default class MensajeComponent {

  public titulo: string = 'Mensaje de Bienvenida'

  public body = `
    <h4 class="text-lg text-gray-800 mb-4">Bienvenido</h4>
    <p class="text-lg text-gray-600 text-center">
      Este es un proyecto desarrollado en el curso de Angular impartido por el profesor:
      <span class="font-semibold text-gray-800">Jose Angel Cuello Fernandez</span>.
    </p>
    <p class="text-lg text-gray-600 text-center mt-2">
      Estudiante: <span class="font-semibold text-gray-800">Malfry Natanel Perez Rodriguez</span>.
    </p>
  `;

}
