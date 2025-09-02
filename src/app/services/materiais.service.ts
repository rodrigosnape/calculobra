import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IMaterial {
  id: string;
  nome: string;
  unidade: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {
  private storageKey = 'materiais';
  private readonly _materiais$ = new BehaviorSubject<IMaterial[]>(this.getMateriaisFromStorage());

  materiais$: Observable<IMaterial[]> = this._materiais$.asObservable();

  private getMateriaisFromStorage(): IMaterial[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

  private updateStorage(materiais: IMaterial[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(materiais));
  }

  getMateriais(): IMaterial[] {
    return this._materiais$.value;
  }

  addMateriais(materiaisNovos: IMaterial[]): void {
    const atualizados = [...this.getMateriais(), ...materiaisNovos];
    this._materiais$.next(atualizados);
    this.updateStorage(atualizados);
  }

  salvarMateriais(materiais: IMaterial[]) {
    this._materiais$.next(materiais);
    this.updateStorage(materiais);
  }

  getSomatorio(): number {
    return this.getMateriais().reduce((total, m) => total + m.valor, 0);
  }
}
