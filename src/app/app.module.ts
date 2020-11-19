import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewDisplayComponent } from './review-display/review-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';
import { ReviewsDetailComponent } from './reviews-detail/reviews-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewDisplayComponent,
    ReviewsListComponent,
    ReviewsDetailComponent
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