import { Component, inject, OnInit } from '@angular/core';
import { UserI } from '../../interfaces/interface';
import { UsuariosService } from '../../core/services/usuarios.service';
import { ModalService } from '../../components/modal/modal.service';
import { ModalComponent } from '../../components/modal/modal.component';
import { ButtomComponent } from '../../components/buttom/buttom.component';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ButtomComponent, DialogComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent{

  public usuariosService = inject(UsuariosService);
  private readonly _modalSVC = inject(ModalService) 

  openModal(): void{
    this._modalSVC.openModal<ModalComponent>(ModalComponent)
  }

  closeModal(){
    this._modalSVC.closeModal()
  }



}
