import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaPremiosGanadoresComponent } from './rifa-premios-ganadores.component';

describe('RifaPremiosGanadoresComponent', () => {
  let component: RifaPremiosGanadoresComponent;
  let fixture: ComponentFixture<RifaPremiosGanadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaPremiosGanadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaPremiosGanadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
