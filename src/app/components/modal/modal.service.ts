import {MatDialog} from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly _dialog = inject(MatDialog)

  openModal<CT, T = any>(component: ComponentType<CT>, data?: T, isEditing = false): void {
    const config = { data, isEditing };
  
    this._dialog.open(component, {
      data: config,
      width: '600px',
    });
  }

  closeModal(): void{
    this._dialog.closeAll()
  }



}
