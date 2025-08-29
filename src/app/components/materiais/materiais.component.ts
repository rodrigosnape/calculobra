import { IMaterial } from './../../services/materiais.service';
import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialItemComponent } from "./material-item/material-item.component";
import { MateriaisService } from '../../services/materiais.service';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-materiais',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MaterialItemComponent
],
  templateUrl: './materiais.component.html',
  styleUrl: './materiais.component.scss'
})
export class MateriaisComponent implements OnInit {

    private readonly _materiaisService = inject(MateriaisService);
    private readonly _fb = inject(FormBuilder);

    formMateriais!: FormGroup;

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

    get materiaisFormArray(): FormArray<FormGroup> {
        return this.formMateriais.get('materiais') as FormArray<FormGroup>;
    }

    ngOnInit() {
        //const materiais = this._materiaisService.getMateriais();

        this.formMateriais = this._fb.group({
            materiais: this._fb.array([])
        });

        let lista = this._materiaisService.getMateriais();
        if (lista.length === 0) {
            lista = [
                { id: '1', nome: 'Porcelanato', unidade: 'm²', valor: 50 },
                { id: '2', nome: 'Revestimento', unidade: 'm²', valor: 40 }
            ];
            this._materiaisService.addMateriais(lista);
        }

        lista.forEach(m => this.adicionarCampo(m));
    }

    adicionarCampo(material?: IMaterial) {
        const grupo = this._fb.group({
        id: [material?.id ?? crypto.randomUUID()],
        nome: [material?.nome ?? '', Validators.required],
        unidade: [material?.unidade ?? '', Validators.required],
        valor: [material?.valor ?? 0, [Validators.required, Validators.min(0.01)]]
        });

        this.materiaisFormArray.push(grupo);
    }

    salvarMateriais() {
        if (this.formMateriais.valid) {
        const valores = this.formMateriais.value.materiais;
        this._materiaisService.salvarMateriais(valores);
        console.log("Materiais salvos!", valores);
        } else {
        this.formMateriais.markAllAsTouched();
        console.log("Formulário inválido");
        }
    }

    removerCampo(index: number) {
        this.materiaisFormArray.removeAt(index);
    }
}
