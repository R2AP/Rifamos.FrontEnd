import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaBannerContactanosComponent } from './rifa-banner-contactanos.component';

describe('RifaBannerContactanosComponent', () => {
  let component: RifaBannerContactanosComponent;
  let fixture: ComponentFixture<RifaBannerContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaBannerContactanosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaBannerContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
