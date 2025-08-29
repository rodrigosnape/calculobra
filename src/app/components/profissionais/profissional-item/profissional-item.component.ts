import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-profissional-item',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    ],
    templateUrl: './profissional-item.component.html',
    styleUrl: './profissional-item.component.scss',
    standalone: true
})
export class ProfissionalItemComponent {
  @Input({ required: true }) formGroup!: FormGroup;

  @Output() remover = new EventEmitter<void>();

  onRemover() {
    console.log("Remover material");
    this.remover.emit();
  }
}
