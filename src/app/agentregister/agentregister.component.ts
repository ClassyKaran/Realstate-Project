import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentService } from '../../services/agent.service';
import { Agent } from '../../modal/agent';


@Component({
  selector: 'app-agentregister',
  templateUrl: './agentregister.component.html',
  styleUrls: ['./agentregister.component.css']
})
export class AgentregisterComponent {

  agent: Agent = new Agent();
  profilePicture?: File;
  agreementChecked: boolean = false; // Track the checkbox state

  constructor(private agentService: AgentService, private router: Router) {} // Inject Router

  // File selection handler
  onFileSelected(event: any): void {
    this.profilePicture = event.target.files[0];
  }

  // Submit registration
  registerAgent(): void {
    if (this.agreementChecked) {
      this.agentService.registerAgent(this.agent, this.profilePicture).subscribe(
        (data) => {
          alert('Agent registered successfully!');
          console.log(data);
          this.agent = new Agent(); // Reset the form.

          // Redirect to the login page after successful registration
          this.router.navigate(['/agentlogin']);
        },
        (error) => {
          console.error('Error registering agent:', error);
          alert('Failed to register agent. Please try again.');
        }
      );
    } else {
      alert('Please agree to the terms and conditions before registering.');
    }
  }
}
