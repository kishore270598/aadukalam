import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Signupservice {
  // Base URL of the API
  private base_url: string = 'https://er-tracker-pink.vercel.app/api';
  constructor(private http: HttpClient) {}

  // Signup method with dynamic body
  signup(userData: {
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
  }): Observable<any> {
    // Define the API endpoint
    const url = `${this.base_url}/auth/signup`;

    // Headers are disabled, so no need to add them
    const httpOptions = {
      headers: new HttpHeaders({
        // No active headers
      }),
    };

    // Make the POST request with the body passed from the component
    return this.http
      .post(url, userData, httpOptions)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      if (error.status === 400 && error.error.message) {
        errorMessage = error.error.message; // Use server message
      }
    }

    return throwError(errorMessage);
  }
}
