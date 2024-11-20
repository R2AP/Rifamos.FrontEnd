import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaBannerQueEncontrarasComponent } from './rifa-banner-que-encontraras.component';

describe('RifaBannerQueEncontrarasComponent', () => {
  let component: RifaBannerQueEncontrarasComponent;
  let fixture: ComponentFixture<RifaBannerQueEncontrarasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaBannerQueEncontrarasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaBannerQueEncontrarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
