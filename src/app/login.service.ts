import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Base URL of the API
  private base_url: string = 'https://er-tracker-pink.vercel.app/';
  constructor(private http: HttpClient) {}

  // Signup method with dynamic body
  signup(userData: {
    name: string;
    username: string;
    password: string;
    phoneNumber: string;
  }): Observable<any> {
    // Define the API endpoint
    const url = `${this.base_url}/signup`;

    // Headers are disabled, so no need to add them
    const httpOptions = {
      headers: new HttpHeaders({
        // No active headers
      }),
    };

    // Make the POST request with the body passed from the component
    return this.http.post(url, userData, httpOptions);
  }
}
