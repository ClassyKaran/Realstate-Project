import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Modals/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  // Register User
  registerUser(user: any, profilePicture?: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    return this.http.post(`${this.baseUrl}/registerUser`, formData);
  }

  // Login User
  loginUser(credentials: { username: string; password: string }): Observable<any> {
    // Assuming the backend expects a POST request to '/loginUser' with the user's credentials
    return this.http.post(`${this.baseUrl}/loginUser`, credentials);
  }


  //Get All Users
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllUsers`);
  }

  //Get User By Id
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);
  }

  //Update User
  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateUser`, user);
  }

  //Delete User
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteUser/${id}`);
  }

}