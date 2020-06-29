import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { login } from '../service/entity/login';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: login ;
  result:object;
  valide:string;
  username:string;
  type:string;
  constructor(private userService: AuthService, private chat:ChatService , private router: Router) { }

  ngOnInit() {
    this.user =new login();
  }
  loginClient(){
    console.log(this.user);
   this.userService.loginClient(this.user).subscribe((data:any) =>{
        console.log(data);
        error => {
        console.log(error)};
       
      if(data == "client"){
        this.userService.username=this.user.username;
        this.router.navigate(['/dclient']);
       }
   });
   
  }
  loginCoach(){
    this.userService.loginCoach(this.user).subscribe((data:any) =>{
      console.log(data);
      if(data == "coach"){
        this.userService.username=this.user.username;
        this.router.navigate(['/profile']); 
      }
    });
  }
}