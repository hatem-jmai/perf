import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BodyhomeComponent } from './bodyhome/bodyhome.component';
import { FormCoachComponent } from './form-coach/form-coach.component';
import { FormClientComponent } from './form-client/form-client.component';
import { DashboradclientComponent } from './dashboradclient/dashboradclient.component';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { DashcoachComponent } from './dashcoach/dashcoach.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {path:'acceuil',component:BodyhomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'formCoach',component:FormCoachComponent},
  {path:'formClient',component:FormClientComponent},
  {path:'dclient',component:DashboradclientComponent},
  {path:'1920**hatem',component:DashadminComponent},
  {path:'updateclient',component:UpdateclientComponent},
  {path:'dcoach',component:DashcoachComponent},
  {path:'contact',component:ContactComponent},
  {path:'chat',component:ChatComponent},

  {path:'',redirectTo:'acceuil',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
