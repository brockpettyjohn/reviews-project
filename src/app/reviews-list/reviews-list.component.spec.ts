import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewDisplayComponent } from '../review-display/review-display.component';
import { ReviewsListComponent } from './reviews-list.component';

describe('ReviewsListComponent', () => {
  let component: ReviewsListComponent;
  let fixture: ComponentFixture<ReviewsListComponent>;
  const reviews = [
    {
      "rating": 0.8,
      "publish_date": "2016-09-05T23:25:47.642350Z",
      "id": 9783221620868,
      "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      "author": "Kaley Schiller"
    },
    {
      "rating": 3.2,
      "publish_date": "2016-09-04T23:25:47.642388Z",
      "id": 9793364045824,
      "body": "Can one desire too much of a good thing?.",
      "author": "Fay Lemke"
    },
    {
      "rating": 4.1,
      "publish_date": "2016-09-03T23:25:47.642545Z",
      "id": 9784620626604,
      "body": "How bitter a thing it is to look into happiness through another man's eyes!",
      "author": "Tatyana Olson"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewsListComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('filteredReviews should be array with values', () => {
    component.reviews = reviews;
    component.filterByRating("All");
    expect(Array.isArray(component.filteredReviews)).toBeTruthy();
    expect(component.filteredReviews.length).toBeGreaterThan(0);
  })

  it('sortedReviews should be array with values', () => {
    component.filteredReviews = reviews;
    component.sortReviewsList("publish_date");
    expect(Array.isArray(component.sortedReviews)).toBeTruthy();
    expect(component.sortedReviews.length).toBeGreaterThan(0);
  })
});
