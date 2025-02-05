import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../../services/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agentlogin',
  templateUrl: './agentlogin.component.html',
  styleUrls: ['./agentlogin.component.css']
})
export class AgentloginComponent {
  username: string = '';
  password: string = '';

  constructor(private agentService: AgentService) {}

  // Submit login
  loginAgent(): void {
    this.agentService.loginAgent(this.username, this.password).subscribe(
      (data) => {
        alert('Login successful!');
        console.log('Logged in agent:', data);
      },
      (error) => {
        console.error('Login failed:', error);
        alert('Login failed. Please check your credentials.');
      }
    );
  }
}
