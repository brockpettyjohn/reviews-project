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
  reviewsAbove0: number;
  reviewsAbove1: number;
  reviewsAbove2: number;
  reviewsAbove3: number;
  reviewsAbove4: number;
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
      return totalRatingsAdded
    }, 0) / this.reviews.length
    this.averageReviewRating = addedRating.toFixed(2);
  }



}
