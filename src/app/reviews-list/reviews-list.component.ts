import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../review';
type ReviewKeys =
  'author' |
  'body' |
  'id' |
  'publish_date' |
  'rating' 
@Component({
    selector: 'app-reviews-list',
    templateUrl: './reviews-list.component.html',
    styleUrls: ['./reviews-list.component.scss']
  })
export class ReviewsListComponent implements OnInit {

  constructor() { }

  @Input() reviews: Review[];

  ngOnInit(): void {
  }

  sortReviewsList(term: ReviewKeys) {
    var sorted = this.reviews.sort((a, b) => {
      if (a[term] < b[term]) {
        return -1;
      }
      if (a.rating > b.rating) {
        return 1;
      }
      return 0;
    });
    console.log(sorted);
  }

}
