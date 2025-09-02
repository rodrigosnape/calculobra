import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IProfissional {
  id: string;
  nome: string;
  categoria: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {
  private storageKey = 'profissionais';
  private readonly _profissionais$ = new BehaviorSubject<IProfissional[]>(this.getProfissionaisFromStorage());

  profissionais$: Observable<IProfissional[]> = this._profissionais$.asObservable();

  private getProfissionaisFromStorage(): IProfissional[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

  private updateStorage(profissionais: IProfissional[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(profissionais));
  }

  getProfissionais(): IProfissional[] {
    return this._profissionais$.value;
  }

  addProfissionais(profissionaisNovos: IProfissional[]): void {
    const atualizados = [...this.getProfissionais(), ...profissionaisNovos];
    this._profissionais$.next(atualizados);
    this.updateStorage(atualizados);
  }

  salvarProfissionais(profissionais: IProfissional[]) {
    this._profissionais$.next(profissionais);
    this.updateStorage(profissionais);
  }

  getSomatorio(): number {
    return this.getProfissionais().reduce((total, p) => total + p.valor, 0);
  }
}
