import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-material-item',
  imports: [
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './material-item.component.html',
  styleUrl: './material-item.component.scss',
  standalone: true
})
export class MaterialItemComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  @Output() remover = new EventEmitter<void>();

  onRemover() {
    console.log("Remover material");
    this.remover.emit();
  }
}
