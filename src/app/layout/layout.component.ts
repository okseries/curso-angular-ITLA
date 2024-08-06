import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { NavbarComponent } from '../shared/layout/navbar/navbar.component';
import { SidemenuComponent } from '../shared/layout/sidemenu/sidemenu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, FooterComponent, NavbarComponent, SidemenuComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
