import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Modals/admin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent {
  admin: any = { // Initialize the admin object
    username: '',
    fullname: '',
    email: '',
    password: '',
    mobileNo: '',
    role: 'ADMIN', // Default value
    status: 'ACTIVE' // Default value
  };
  
  profilePicture: File | null = null;
  errorMessage: string = '';

  constructor(private httpClient: HttpClient, private router: Router) {} // Inject Router

  // Method to handle registration
  registerAdmin() {
    const formData = new FormData();
    formData.append('adminData', JSON.stringify(this.admin));

    if (this.profilePicture) {
      formData.append('profilePicture', this.profilePicture);
    }

    this.httpClient.post('http://localhost:8080/api/admin/registerAdmin', formData, { responseType: 'text' })
      .subscribe(
        response => {
          // Handle the success response
          console.log('Registration successful:', response);
          alert(response); // Optionally show a success message
          this.router.navigate(['/adminlogin']); // Redirect to admin login page after successful registration
        },
        error => {
          console.error('Error during registration:', error);
          this.errorMessage = 'An error occurred during registration: ' + error.message;
        }
      );
  }

  // Method to handle profile picture change
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicture = file;
    }
  }
}