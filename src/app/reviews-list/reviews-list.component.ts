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
  sortedReviews: Review[];
  selectedTerm: string;
  selectableTerms = ['date published', 'author', 'rating'];

  ngOnInit(): void {
    this.sortReviewsList('publish_date');
  }

  sortReviewsList(term: string) {
    this.sortedReviews = this.reviews.sort((a, b) => {
      if (a[term] < b[term]) {
        return -1;
      }
      if (a.rating > b.rating) {
        return 1;
      }
      return 0;
    });
  }

}
