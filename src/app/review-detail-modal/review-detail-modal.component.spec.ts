import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailModalComponent } from './review-detail-modal.component';

describe('ReviewDetailModalComponent', () => {
  let component: ReviewDetailModalComponent;
  let fixture: ComponentFixture<ReviewDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
