import { Component } from '@angular/core';

@Component({
  selector: 'app-agentdashboard',
  templateUrl: './agentdashboard.component.html',
  styleUrls: ['./agentdashboard.component.css']
})
export class AgentdashboardComponent {
  isVisible = true;
  toggle() {
    this.isVisible = !this.isVisible;
  }








  
}
