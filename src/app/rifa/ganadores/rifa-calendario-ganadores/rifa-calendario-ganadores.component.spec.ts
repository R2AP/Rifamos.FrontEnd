import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaCalendarioGanadoresComponent } from './rifa-calendario-ganadores.component';

describe('RifaCalendarioGanadoresComponent', () => {
  let component: RifaCalendarioGanadoresComponent;
  let fixture: ComponentFixture<RifaCalendarioGanadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaCalendarioGanadoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaCalendarioGanadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
