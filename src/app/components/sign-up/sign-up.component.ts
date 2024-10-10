import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers: [LoginService],
})
export class SignUpComponent {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
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

      // You can perform additional actions such as calling an API service
    } else {
      console.log('Form is invalid');
    }
  }
}
