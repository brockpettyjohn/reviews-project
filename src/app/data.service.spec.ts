import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';


describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get reviews data', () => {
    service.getReviews().subscribe(response => {
      expect(response.length).toBeGreaterThan(0);
    })
  });

  it('should get review data', () => {
    const testID = 9783221620868
    service.getReview(testID).subscribe(response => {
      expect(response.length).toBeGreaterThan(0);
    })
  });

});

