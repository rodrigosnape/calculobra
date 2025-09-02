import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { combineLatest, map, Observable } from 'rxjs';
import { MateriaisService, IMaterial } from '../services/materiais.service';
import { ProfissionaisService, IProfissional } from '../services/profissionais.service';

@Component({
  selector: 'app-resultado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
})
export class ResultadoComponent {
  private readonly _materiaisService = inject(MateriaisService);
  private readonly _profissionaisService = inject(ProfissionaisService);

  totalMateriais$!: Observable<number>;
  totalProfissionais$!: Observable<number>;
  totalResultado$!: Observable<number>;

  ngOnInit() {

    this.totalMateriais$ = this._materiaisService.materiais$.pipe(
      map((materiais: IMaterial[]) => materiais.reduce((acc, m) => acc + m.valor, 0))
    );

    this.totalProfissionais$ = this._profissionaisService.profissionais$.pipe(
      map((profissionais: IProfissional[]) => profissionais.reduce((acc, p) => acc + p.valor, 0))
    );

    this.totalResultado$ = combineLatest([
      this.totalMateriais$,
      this.totalProfissionais$
    ]).pipe(
      map(([materiais, profissionais]) => materiais + profissionais)
    );
  }
}
