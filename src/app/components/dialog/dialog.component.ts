import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
const   PRIMENG_MODULE = [DialogModule,
  ButtonModule,
  InputTextModule,]
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [PRIMENG_MODULE],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

}
