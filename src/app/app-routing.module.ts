import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AgentloginComponent } from './agentlogin/agentlogin.component';
import { AgentregisterComponent } from './agentregister/agentregister.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AgentdashboardComponent } from './agentdashboard/agentdashboard.component';
const routes: Routes = [

  { path: 'userlogin', component: UserloginComponent},
  { path: 'userregister', component: UserregisterComponent},
  { path: 'agentpanel', component: AgentdashboardComponent},
  { path: 'agentlogin', component: AgentloginComponent},
  { path: 'agentregister', component: AgentregisterComponent},
  { path: 'adminregister', component: AdminregisterComponent},
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'adminpanel', component: AdmindashboardComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'footer', component: FooterComponent},
  { path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
