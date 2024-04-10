import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaDetalleDatosComponent } from './rifa-detalle-datos.component';

describe('RifaDetalleDatosComponent', () => {
  let component: RifaDetalleDatosComponent;
  let fixture: ComponentFixture<RifaDetalleDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaDetalleDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaDetalleDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
