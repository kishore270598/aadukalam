import { Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SignUpComponent, NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginService],
})
export class LoginComponent {
  isError: boolean = false;
  constructor(private router: Router, private service: LoginService) {}
  onSubmit(values: any) {}
  onSignup() {
    console.log('Yes! signup');
    this.router.navigate(['/sign-up']);
  }
}
