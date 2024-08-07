import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-area-circulo',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './area-circulo.component.html',
  styleUrl: './area-circulo.component.css'
})
export default class AreaCirculoComponent {

  public titulo: string = 'Área del circulo'

  public areaCirculo(radius: number){
    return Math.PI * (Math.pow(radius, 2))
  }

}
