import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './shared/layout/sidemenu/sidemenu.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent, FooterComponent, NavbarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
}

