import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaItemComponent } from './medida-item.component';

describe('MedidaItemComponent', () => {
  let component: MedidaItemComponent;
  let fixture: ComponentFixture<MedidaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedidaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedidaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
