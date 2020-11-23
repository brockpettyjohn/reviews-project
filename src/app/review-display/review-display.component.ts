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

  averageReviewRating: number;
  reviews: Review[] = [];
  ratingsCounts: any[] = [];
  isLoading: boolean = true

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.dataService.getReviews().subscribe(reviews => {
      reviews.forEach((review: Review) => this.reviews.push({ ...review, publish_date: new Date(review.publish_date).toLocaleDateString() }));
      this.calculateTotalAverageRating();
      this.calculateRatingCounts();
      this.isLoading = false
    });
  }

  calculateTotalAverageRating(): void {
    var addedRating = this.reviews.reduce((totalRatingsAdded, current) => {
      totalRatingsAdded += current.rating
      return totalRatingsAdded
    }, 0) / this.reviews.length
    this.averageReviewRating = parseFloat(addedRating.toFixed(2));
  }

  calculateRatingCounts(): void {
    this.reviews.forEach(review => {
      const rating = Math.floor(review.rating)
      if (this.ratingsCounts[rating]) {
        this.ratingsCounts[rating]++;
      } else {
        this.ratingsCounts[rating] = 1;
      }
    });
  }
}

