import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaDetalleComponent } from './rifa-detalle.component';

describe('RifaDetalleComponent', () => {
  let component: RifaDetalleComponent;
  let fixture: ComponentFixture<RifaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaDetalleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
