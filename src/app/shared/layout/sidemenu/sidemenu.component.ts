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
export class SidemenuComponent  {
public menuItems = routes
.map(route => route.children ?? [])
.flat()
.filter(route => route && route.path)
.filter(route => !route.path?.includes('app/auth/login'))

dropdownConfig: any = {
  buttonTitle: 'Opciones',
  items: this.menuItems};

}
