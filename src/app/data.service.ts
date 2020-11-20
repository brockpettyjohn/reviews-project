import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-api-key': environment.API_KEY
      })
    }
  }

  getReviews() {
    return this.http.get<any>(environment.API_ENDPOINT + `/reviews`, this.getHttpOptions()).pipe(
      catchError(err => {
        throw 'error at getReviews. Details: ' + err;
      })
    )
  }

  getReview(id: number) {
    return this.http.get<any>(environment.API_ENDPOINT + `/reviews/${id}`, this.getHttpOptions()).pipe(
      catchError(err => {
        throw 'error at getReview. Details: ' + err;
      })
    )
  }
}
