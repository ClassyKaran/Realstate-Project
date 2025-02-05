
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../modal/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/api/admin'; // API ka base URL

  constructor(private http: HttpClient) {}

  /** Admin Registration */
  registerAdmin(adminData: Admin, profilePicture?: File): Observable<string> {
    const formData = new FormData();
    formData.append('adminData', JSON.stringify(adminData));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    return this.http.post<string>(`${this.baseUrl}/registerAdmin`, formData);
  }

  /** Admin Login */
  loginAdmin(username: string, password: string): Observable<string> {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);
    return this.http.post<string>(`${this.baseUrl}/loginAdmin`, params.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    });
  }

  /** Admin Logout */
  logoutAdmin(username: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/logoutAdmin`, { username });
  }

  /** Get Admin by ID */
  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/getAdminById/${adminId}`);
  }

  /** Get Admin by Username */
  getAdminByUsername(username: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/getAdminByUsername/${username}`);
  }

  /** Get All Admins */
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.baseUrl}/getAllAdmins`);
  }

  /** Delete Admin */
  deleteAdmin(adminId: number): Observable<string> {
    return this.http.delete<string>(`${this.baseUrl}/deleteAdmin/${adminId}`);
  }

  /** Update Admin */
  updateAdmin(adminId: number, adminData: Admin, profilePicture?: File): Observable<string> {
    const formData = new FormData();
    formData.append('adminData', JSON.stringify(adminData));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }
    return this.http.put<string>(`${this.baseUrl}/updateAdmin/${adminId}`, formData);
  }

  /** Approve Property */
  approveProperty(tempPropertyId: number, adminId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/approve/${tempPropertyId}/${adminId}`, {},);
  }

  /** Reject Property */
  rejectProperty(tempPropertyId: number, adminId: number): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/reject/${tempPropertyId}/${adminId}`, {});
  }

  /** Get All Pending Properties */
  getAllPendingProperties(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pending`);
  }

}




