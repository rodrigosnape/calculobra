import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-materiais',
  imports: [
     MatFormFieldModule, MatInputModule, MatSelectModule,
  ],
  templateUrl: './materiais.component.html',
  styleUrl: './materiais.component.scss'
})
export class MateriaisComponent {

}
