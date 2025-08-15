import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-medida-item',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './medida-item.component.html',
  styleUrl: './medida-item.component.scss'
})
export class MedidaItemComponent {

}
