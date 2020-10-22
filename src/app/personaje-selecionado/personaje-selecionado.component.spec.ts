import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajeSelecionadoComponent } from './personaje-selecionado.component';

describe('PersonajeSelecionadoComponent', () => {
  let component: PersonajeSelecionadoComponent;
  let fixture: ComponentFixture<PersonajeSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajeSelecionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajeSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
