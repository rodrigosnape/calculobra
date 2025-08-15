import { IMaterial } from './../../services/materiais.service';
import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialItemComponent } from "./material-item/material-item.component";
import { MateriaisService } from '../../services/materiais.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-materiais',
  imports: [
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MaterialItemComponent
],
  templateUrl: './materiais.component.html',
  styleUrl: './materiais.component.scss'
})
export class MateriaisComponent implements OnInit {

    private readonly _materiaisService = inject(MateriaisService);

    listaMateriais: IMaterial[] = [];

    material1 = {
            id: '1',
            nome: 'Porcelanato',
            unidade: 'm²',
            valor: 50
        };

    material2 = {
            id: '2',
            nome: 'Revestimento',
            unidade: 'm²',
            valor: 40
        };

    ngOnInit() {
        if (this._materiaisService.getMateriais().length === 0) {
            this._materiaisService.addMateriais([this.material1, this.material2]);
        }
        this.listaMateriais = this._materiaisService.getMateriais();
    }

    adicionarCampo() {
        this.listaMateriais.push({
            id: crypto.randomUUID(),
            nome: '',
            unidade: '',
            valor: 0
        });
    }

    salvarMateriais(){
        this._materiaisService.salvarMateriais(this.listaMateriais);
    }
}
