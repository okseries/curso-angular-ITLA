import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

interface DropItem {
  path: string | undefined;
  title: string;
}

export interface DropdownConfig {
  buttonTitle: string;
  items: DropItem[];
}


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  public config = input.required<DropdownConfig>()
  

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ruta(ruta:any){
    console.log(ruta);
    
  }

}
