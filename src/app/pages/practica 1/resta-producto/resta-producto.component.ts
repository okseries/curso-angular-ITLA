import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-resta-producto',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './resta-producto.component.html',
  styleUrl: './resta-producto.component.css'
})
export default class RestaProductoComponent {

  public titulo: string = 'Resta Y Producto de numeros'

  public restar(a: number, b: number): number {
    return a - b;
  }

  public multiplicar(a: number, b: number): number {
    return a * b;
  }

}
