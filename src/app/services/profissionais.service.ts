import { Injectable } from '@angular/core';

export interface IProfissional {
  id: string,
  nome: string;
  categoria: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

    storageKey = 'profissionais';

  getProfissionais(): IProfissional[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

    addProfissionais(profissionaisNovos: IProfissional[]): void {
    const profissionais = this.getProfissionais();
    profissionais.push(...profissionaisNovos);
    this.salvarProfissionais(profissionais);
    }

  salvarProfissionais(profissionais: IProfissional[]){
    localStorage.setItem(this.storageKey, JSON.stringify(profissionais));
  }
}
