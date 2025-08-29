import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalItemComponent } from './profissional-item.component';

describe('ProfissionalItemComponent', () => {
  let component: ProfissionalItemComponent;
  let fixture: ComponentFixture<ProfissionalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfissionalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
