import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaComprimidaCarouselComponent } from './rifa-comprimida-carousel.component';

describe('RifaComprimidaCarouselComponent', () => {
  let component: RifaComprimidaCarouselComponent;
  let fixture: ComponentFixture<RifaComprimidaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RifaComprimidaCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RifaComprimidaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
