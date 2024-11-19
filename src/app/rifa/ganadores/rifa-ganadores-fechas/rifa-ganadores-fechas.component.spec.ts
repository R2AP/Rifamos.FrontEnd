import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaGanadoresFechasComponent } from './rifa-ganadores-fechas.component';

describe('RifaGanadoresFechasComponent', () => {
  let component: RifaGanadoresFechasComponent;
  let fixture: ComponentFixture<RifaGanadoresFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaGanadoresFechasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaGanadoresFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
