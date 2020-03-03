import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BodyhomeComponent } from './bodyhome/bodyhome.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormCoachComponent } from './form-coach/form-coach.component';
import { FormClientComponent } from './form-client/form-client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatIconModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { DashboradclientComponent } from './dashboradclient/dashboradclient.component';
import { DashadminComponent } from './dashadmin/dashadmin.component';
import { DashcoachComponent } from './dashcoach/dashcoach.component';
import { UpdateclientComponent } from './updateclient/updateclient.component';
import { ContactComponent } from './contact/contact.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyhomeComponent,
    SignupComponent,
    LoginComponent,
    FormCoachComponent,
    
    FormClientComponent,
    
    DashboradclientComponent,
    
    DashadminComponent,
    
    DashcoachComponent,
    
    UpdateclientComponent,
    
    ContactComponent,
    
    ChatComponent,
  
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSelectModule,           // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule, 
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
