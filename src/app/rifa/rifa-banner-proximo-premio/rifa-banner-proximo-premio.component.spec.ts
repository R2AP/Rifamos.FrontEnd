import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaBannerProximoPremioComponent } from './rifa-banner-proximo-premio.component';

describe('RifaBannerProximoPremioComponent', () => {
  let component: RifaBannerProximoPremioComponent;
  let fixture: ComponentFixture<RifaBannerProximoPremioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaBannerProximoPremioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaBannerProximoPremioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
