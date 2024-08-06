import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

const PRIME_MODULES = [ButtonModule]

@Component({
  selector: 'app-buttom',
  standalone: true,
  imports: [PRIME_MODULES],
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.css'
})
export class ButtomComponent {

  public titulo = input.required<string>()
  public estilos = input.required<string>()



}
