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
  filteredReviews: Review[];
  ascending: boolean = false;
  currentTerm: string;
  selectedTerm: string;
  selectableTerms = [
    {
      displayName: 'date published',
      selectedTerm: 'publish_date'
    },
    {
      displayName: 'author',
      selectedTerm: 'author'
    },
    {
      displayName: 'rating',
      selectedTerm: 'rating'
    }
  ]
  selectableFilterParams = ["All", 5, 4, 3, 2, 1, 0];

  ngOnInit(): void {
    this.filterByRating("All");
    this.sortReviewsList('publish_date');
  }

  sortReviewsList(term: string) {
    this.currentTerm === term ? this.ascending = !this.ascending : this.ascending = false;

    if (this.ascending) {
      this.sortedReviews = this.filteredReviews.sort((a, b) => {
        if (a[term] < b[term]) {
          return -1;
        }
        if (a.rating > b.rating) {
          return 1;
        }
        return 0;
      });
    } else {
      this.sortedReviews = this.filteredReviews.sort((a, b) => {
        if (a[term] > b[term]) {
          return -1;
        }
        if (a.rating < b.rating) {
          return 1;
        }
        return 0;
      });
    }
    this.currentTerm = term;
  }

  filterByRating(ratingToFilterBy?: number | string) {
    if (ratingToFilterBy === "All") {
      this.filteredReviews = this.reviews;
    } else {
      this.filteredReviews = this.reviews.filter(review => {
        return Math.floor(review.rating) === ratingToFilterBy
      })
    }
    this.sortReviewsList('publish_date');
  }

}
