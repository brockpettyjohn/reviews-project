import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'app-rating-percentage-bar',
  templateUrl: './rating-percentage-bar.component.html',
  styleUrls: ['./rating-percentage-bar.component.scss']
})
export class RatingPercentageBarComponent implements OnInit {

  @Input() rating: number;
  @Input() showStarsImage: boolean = true;
  @Input() highestPossibleCount: number;
  percentage: number;
  color: string;

  ngOnInit(): void {
    this.calculatePercentage();
  }

  calculatePercentage(): void {
    const highestPossibleRating = 5;
    this.percentage = this.rating / this.highestPossibleCount * 100;
    console.log(this.rating);
    if(this.percentage > 60) {
      this.color = "green";
    } else {
      this.color = "orange";
    }
  }

}
