import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaPasosComponent } from './rifa-pasos.component';

describe('RifaPasosComponent', () => {
  let component: RifaPasosComponent;
  let fixture: ComponentFixture<RifaPasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaPasosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaPasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
