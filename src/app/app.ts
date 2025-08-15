import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MedidasComponent } from './components/medidas/medidas.component';
import { MateriaisComponent } from './components/materiais/materiais.component';
import { ProfissionaisComponent } from './components/profissionais/profissionais.component';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatButtonModule,
    MedidasComponent, MateriaisComponent, ProfissionaisComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculobra');
}
