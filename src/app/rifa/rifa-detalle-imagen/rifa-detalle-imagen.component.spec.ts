import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaDetalleImagenComponent } from './rifa-detalle-imagen.component';

describe('RifaDetalleImagenComponent', () => {
  let component: RifaDetalleImagenComponent;
  let fixture: ComponentFixture<RifaDetalleImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaDetalleImagenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaDetalleImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
