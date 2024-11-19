import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaPremiosComponent } from './rifa-premios.component';

describe('RifaPremiosComponent', () => {
  let component: RifaPremiosComponent;
  let fixture: ComponentFixture<RifaPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaPremiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
