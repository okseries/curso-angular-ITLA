import { Component, inject } from '@angular/core';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
import { ButtomComponent } from '../../../components/buttom/buttom.component';
import { DropdownComponent } from '../../../components/dropdown/dropdown.component';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtomComponent, DropdownComponent],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes('app/auth/login'))
    .filter(route => !route.path?.includes('practica-2'))



    public menuItemsPractica2 = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes('app/auth/login'))
    .filter(route => !route.path?.includes('practica-1'))

  public buttonTitle: string = 'Práctica -1'
  public buttonTitlePractica2: string = 'Práctica -2'

  dropdownConfigPractica1: any = {
    buttonTitle: this.buttonTitle,
    items: this.menuItems
  };

  dropdownConfigPractica2: any = {
    buttonTitle: this.buttonTitlePractica2,
    items: this.menuItemsPractica2
  };

}
