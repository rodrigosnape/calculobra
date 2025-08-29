import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { IProfissional, ProfissionaisService } from '../../services/profissionais.service';
import { ProfissionalItemComponent } from './profissional-item/profissional-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profissionais',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ProfissionalItemComponent
    ],
    templateUrl: './profissionais.component.html',
    styleUrl: './profissionais.component.scss'
})
export class ProfissionaisComponent {
        private readonly _profissionaisService = inject(ProfissionaisService);
        private readonly _fb = inject(FormBuilder);

        formProfissionais!: FormGroup;

    get profissionaisFormArray(): FormArray<FormGroup> { console.log('profissionaisFormArray()');
        return this.formProfissionais.get('profissionais') as FormArray<FormGroup>;
    }

    ngOnInit() {

        this.formProfissionais = this._fb.group({
            profissionais: this._fb.array([])
        });

        let lista = this._profissionaisService.getProfissionais();
        if (lista.length === 0) {
            lista = [
                { id: '1', nome: 'Zeca', categoria:'Faz tudo', valor: 6000 },
                { id: '2', nome: 'Toninho', categoria: 'Arquiteto', valor: 125 }
            ];
            this._profissionaisService.addProfissionais(lista);
        }

        lista.forEach(m => this.adicionarCampo(m));
    }

    adicionarCampo(profissional?: IProfissional) {
        const grupo = this._fb.group({
        id: [profissional?.id ?? crypto.randomUUID()],
        nome: [profissional?.nome ?? '', Validators.required],
        categoria: [profissional?.categoria ?? '', Validators.required],
        valor: [profissional?.valor ?? 0, [Validators.required, Validators.min(0.01)]]
        });

        this.profissionaisFormArray.push(grupo);
    }

    salvarProfissionais() {
        if (this.formProfissionais.valid) {
        const valores = this.formProfissionais.value.profissionais;
        this._profissionaisService.salvarProfissionais(valores);
        console.log("Profissionais salvos!", valores);
        } else {
        this.formProfissionais.markAllAsTouched();
        console.log("Formulário inválido");
        }
    }

    removerCampo(index: number) {
        this.profissionaisFormArray.removeAt(index);
    }
}
