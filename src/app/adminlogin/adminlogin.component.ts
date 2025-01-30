import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}
  loginAdmin(): void {
    const params = new HttpParams()
      .set('username', this.username)
      .set('password', this.password);
  
    this.http.post('http://localhost:8080/api/admin/loginAdmin', params)
      .subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          if (error.status === 401) {
            this.errorMessage = 'Invalid credentials. Please try again.';
          } else {
            this.errorMessage = 'An error occurred. Please try again later.';
          }
        }
      });
  }
  
  
  
}