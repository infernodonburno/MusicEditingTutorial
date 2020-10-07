import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverbSliderComponent } from './reverb-slider.component';

describe('ReverbSliderComponent', () => {
  let component: ReverbSliderComponent;
  let fixture: ComponentFixture<ReverbSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReverbSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
