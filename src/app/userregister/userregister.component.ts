import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../modal/user';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  registerForm: FormGroup;
  profilePicture: File | null = null;
  showPassword: boolean = false; // For toggling password visibility

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNo: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      agreement: [false, Validators.requiredTrue], // Ensures user agrees to terms
    });
  }

  /**
   * Toggle the visibility of the password field
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Handle file input changes for profile picture
   */
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.profilePicture = file;
    } else {
      this.profilePicture = null;
    }
  }

  /**
   * Submit the registration form
   */
  onSubmit(): void {
    if (this.registerForm.invalid) {
      alert('Please fill out all required fields correctly.');
      return;
    }

    const { agreement, ...userData } = this.registerForm.value;

    this.userService
      .registerUser(userData, this.profilePicture || undefined)
      .subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          alert('Registration successful!');
          this.router.navigate(['/userlogin']);
        },
        (error) => {
          console.error('Error during registration:', error);
          alert('An error occurred. Please try again later.');
        }
      );
  }
}
