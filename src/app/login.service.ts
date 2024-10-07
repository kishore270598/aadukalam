import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  // login service call
  login(email: string, password: string) {
    console.log('login service');
    console.log(email, password);
    return 'True';
  }
}
