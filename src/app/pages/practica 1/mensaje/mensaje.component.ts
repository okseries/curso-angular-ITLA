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

  public estudiante: string = 'Malfry Natanael Pérez Rodríguez';

  public profesor: string = 'Jose Angel Cuello Fernandez';

}
