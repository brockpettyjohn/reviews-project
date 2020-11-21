import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPercentageBarComponent } from './rating-percentage-bar.component';

describe('RatingPercentageBarComponent', () => {
  let component: RatingPercentageBarComponent;
  let fixture: ComponentFixture<RatingPercentageBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingPercentageBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingPercentageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
