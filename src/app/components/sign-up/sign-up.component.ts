import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Signupservice } from '../../services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NavbarComponent, NgIf, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [Signupservice],
})
export class SignUpComponent {
  signupForm: FormGroup;
  isError: boolean = false;
  ErrorMessage: string = ' ';
  constructor(
    private fb: FormBuilder,
    private SignupService: Signupservice,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
        phoneNo: ['', [Validators.required, Validators.pattern('[0-9 ]{10}')]],
      },
      {
        validators: [this.passwordMatchValidator],
      }
    );
  }

  // Custom validator to check if password and confirm password fields match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Handles form submission
  onSubmit() {
    if (this.signupForm.valid) {
      // Handle user signup logic here, e.g., sending data to a backend API
      const signupData = this.signupForm.value;
      console.log('Signup successful', signupData);
      console.log(this.signupForm);
      const user_data: {
        name: string;
        username: string;
        password: string;
        phoneNumber: string;
      } = {
        name: this.signupForm.value.name,
        username: this.signupForm.value.username,
        password: this.signupForm.value.password,
        phoneNumber: this.signupForm.value.phoneNo,
      };
      this.SignupService.signup(user_data).subscribe(
        (response: any) => {
          // Handle the response, which should include a value and token
          this.isError = true;
          const token = response.token;
          const value = response.value;
          console.log('SIGNUP SUCCESS');
          this.router.navigate(['/login']);
        },
        (error: any) => {
          this.ErrorMessage = error;
          this.isError = true;
          console.error(this.ErrorMessage);
        }
      );
      // You can perform additional actions such as calling an API service
    } else {
      console.log('Form is invalid');
    }
  }
}
