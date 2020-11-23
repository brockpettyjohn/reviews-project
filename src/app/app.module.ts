import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewDisplayComponent } from './review-display/review-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ReviewDetailModalComponent } from './review-detail-modal/review-detail-modal.component';
import { RatingPercentageBarComponent } from './rating-percentage-bar/rating-percentage-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewDisplayComponent,
    ReviewsListComponent,
    LoadingSpinnerComponent,
    ReviewDetailModalComponent,
    RatingPercentageBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
