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

  it('percentage should be equal to 20 and color should be orange', () => {
    component.highestPossibleCount = 10;
    component.rating = 4;
    component.calculatePercentage();
    expect(component.percentage).toEqual(40);
    expect(component.color).toEqual('orange');
  });
});
