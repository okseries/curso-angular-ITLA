import { Component, Input, input } from '@angular/core';
import { ButtomComponent } from '../buttom/buttom.component';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ButtomComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  public tableHeader = input.required<any>();
  public tableData = input.required<any>();
  @Input() rowButtons: { label: string, action: (data: any) => void }[] = [];
 
}
