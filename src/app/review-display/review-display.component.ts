import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Review } from '../review';

@Component({
  selector: 'app-review-display',
  templateUrl: './review-display.component.html',
  styleUrls: ['./review-display.component.scss']
})
export class ReviewDisplayComponent implements OnInit {

  constructor(private dataService: DataService) { }

  averageReviewRating: string;
  ratingsAbove0: Review[] = [];
  ratingsAbove1: Review[] = [];
  ratingsAbove2: Review[] = [];
  ratingsAbove3: Review[] = [];
  ratingsAbove4: Review[] = [];
  reviews: Review[] = [];

  ngOnInit(): void {
    this.dataService.getReviews().subscribe(rev => {
      rev.forEach((r: Review) => this.reviews.push(r));
      this.getAverageRating();
    });
  }

  getAverageRating(): void {
    var addedRating = this.reviews.reduce((totalRatingsAdded, current) => {
      totalRatingsAdded += current.rating
      this.getRatingCounts(current);
      return totalRatingsAdded
    }, 0) / this.reviews.length
    this.averageReviewRating = addedRating.toFixed(2);
  }

  getRatingCounts(review: Review): void {
    const rating = review.rating;
    if (rating > 4) {
      this.ratingsAbove4.push(review)
    } else if (rating >= 3 && rating < 4) {
      this.ratingsAbove3.push(review)
    } else if (rating >= 2 && rating < 3) {
      this.ratingsAbove2.push(review)
    } else if (rating >= 1 && rating < 2) {
      this.ratingsAbove1.push(review)
    } else {
      this.ratingsAbove0.push(review)
    }
  }

}
