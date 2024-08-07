import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css'
})
export default class FechaComponent {

  public titulo: string = 'Fecha formateada';

  public fecha = () => {
    const currentDate: Date = new Date();

    const day: string = String(currentDate.getDate()).padStart(2, '0');
  const month: string = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year: string = String(currentDate.getFullYear());

  const fechaFormateada: string = `${day}/${month}/${year}`;

    return fechaFormateada;
  }

}
