import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-profissionais',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './profissionais.component.html',
  styleUrl: './profissionais.component.scss'
})
export class ProfissionaisComponent {

}
