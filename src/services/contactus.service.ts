import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  private apiUrl = 'http://localhost:8080/api/contact-us'; // Backend API URL

  constructor(private http: HttpClient) {}

  saveContact(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
