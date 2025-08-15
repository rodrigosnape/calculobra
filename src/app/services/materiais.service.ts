import { Injectable } from '@angular/core';

export interface IMaterial {
  id: string,
  nome: string;
  unidade: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class MateriaisService {

    storageKey = 'materiais';

  getMateriais(): IMaterial[] {
    const dados = localStorage.getItem(this.storageKey);
    return dados ? JSON.parse(dados) : [];
  }

    addMateriais(materiaisNovos: IMaterial[]): void {
    const materiais = this.getMateriais();
    materiais.push(...materiaisNovos);
    this.salvarMateriais(materiais);
    }

  salvarMateriais(materiais: IMaterial[]){
    localStorage.setItem(this.storageKey, JSON.stringify(materiais));
  }
}
