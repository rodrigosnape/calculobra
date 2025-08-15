import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MedidaItemComponent } from './medida-item/medida-item.component';

@Component({
  selector: 'app-medidas',
  imports: [
    MedidaItemComponent,
    MatFormFieldModule, MatInputModule, MatSelectModule
],
  templateUrl: './medidas.component.html',
  styleUrl: './medidas.component.scss'
})
export class MedidasComponent {
    listaMedidas = [];
}
