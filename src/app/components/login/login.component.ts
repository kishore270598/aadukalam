import { NavbarComponent } from '../navbar/navbar.component';
import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { HomepageComponent } from '../homepage/homepage.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SignUpComponent,
    NgIf,
    FormsModule,
    NavbarComponent,
    HomepageComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService],
})
export class LoginComponent {
  ErrorMessage: String = ' ';
  isError: boolean = false;
  constructor(private router: Router, private service: LoginService) {}
  onSubmit(values: any) {
    const user_data: {
      identifier: string;
      password: string;
    } = {
      identifier: values.username,
      password: values.password,
    };
    this.service.login(user_data).subscribe(
      (response: any) => {
        // Handle the response, which should include a value and token
        this.isError = false;
        const token = response.token;
        localStorage.setItem('token', token);
        localStorage.setItem('logged', 'true');
        this.router.navigate(['app-layout'], {
          queryParams: { username: values.username },
        });
      },
      (error: any) => {
        this.ErrorMessage = error;
        this.isError = true;
        console.error(this.ErrorMessage);
      }
    );
    // You can perform additional actions such as calling an API service
  }
  onSignup() {
    this.router.navigate(['sign-up']);
  }
}
