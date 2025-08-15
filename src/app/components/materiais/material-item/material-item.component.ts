import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-material-item',
  imports: [ MatFormFieldModule, MatInputModule, MatSelectModule,],
  templateUrl: './material-item.component.html',
  styleUrl: './material-item.component.scss'
})
export class MaterialItemComponent {
    @Input({required: true}) nome:string = '';
    @Input() unidade: string = 'm²';
    @Input() valor: number = 0;
}
