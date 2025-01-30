import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  loginForm: FormGroup;
  showPassword = false; // Track password visibility state

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword; // Toggle visibility state
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login successful:', this.loginForm.value);
      alert('User successfully logged in!');
      // Add your login logic here, such as calling a service for authentication.
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
  
}