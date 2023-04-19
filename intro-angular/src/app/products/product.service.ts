import { Injectable } from '@angular/core';
import { IProduct } from '../common/models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSerivce {
  private productUrl = 'api/products/products.json';

  // inject the HttpClient service instance into this variable
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // simple error handling demo
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side or network error occured
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      // backend returned an unsuccessful response code
      // response body may contain clues as to what went wrong
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
