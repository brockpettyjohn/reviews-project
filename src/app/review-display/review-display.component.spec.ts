import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReviewDisplayComponent } from './review-display.component';

describe('ReviewDisplayComponent', () => {
  let component: ReviewDisplayComponent;
  let fixture: ComponentFixture<ReviewDisplayComponent>;
  const reviews = [
    {
      rating: 2,
      "publish_date": "2016-09-05T23:25:47.642350Z",
      "id": 9783221620868,
      "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "author": "Kaley Schiller"
    },
    {
      rating: 3,
      "publish_date": "2016-09-04T23:25:47.642388Z",
      "id": 9793364045824,
      "body": "Can one desire too much of a good thing?.",
      "author": "Fay Lemke"
    },
    {
      rating: 4,
      "publish_date": "2016-09-03T23:25:47.642545Z",
      "id": 9784620626604,
      "body": "How bitter a thing it is to look into happiness through another man's eyes!",
      "author": "Tatyana Olson"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewDisplayComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('averageReviewRating should equal 3', () => {
    component.reviews = reviews;
    component.calculateTotalAverageRating()
    expect(component.averageReviewRating).toEqual(3);
  });

  it('after running calculateRatingCounts rating counts should have array and have values', () => {
    component.reviews = reviews;
    component.calculateRatingCounts()
    expect(Array.isArray(component.ratingsCounts)).toBeTrue();
    expect(component.ratingsCounts.length).toBeGreaterThan(0);
  });
});
