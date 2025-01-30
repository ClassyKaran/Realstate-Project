import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../Modals/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiUrl = 'http://localhost:8080/api/agents'; // Base API URL.

  constructor(private http: HttpClient) {}

  // Register a new agent
  registerAgent(agent: Agent, profilePicture?: File): Observable<Agent> {
    const formData = new FormData();
    formData.append('agent', JSON.stringify(agent));
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    return this.http.post<Agent>(`${this.apiUrl}/registerAgent`, formData);
  }

  // Login agent
  loginAgent(username: string, password: string): Observable<Agent> {
    const loginDetails = { username, password };
    return this.http.post<Agent>(`${this.apiUrl}/loginAgent`, loginDetails);
  }
}

