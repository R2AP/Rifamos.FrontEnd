import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaComprimidaComponent } from './rifa-comprimida.component';

describe('RifaComprimidaComponent', () => {
  let component: RifaComprimidaComponent;
  let fixture: ComponentFixture<RifaComprimidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaComprimidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaComprimidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
