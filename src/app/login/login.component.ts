import { Component, OnInit } from '@angular/core';
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
  ch:any;
  valide:string;
  constructor(private userService: AuthService, private chat:ChatService , private router: Router) { }

  ngOnInit() {
    this.user =new login();
    console.log(this.ch);
  }
  login(){
    console.log(this.user);
   this.result= this.userService.loginCoach(this.user)
   .subscribe((data:any) =>{
        console.log(data),
        error => console.log(error),
        this.ch=data;
        console.log(this.ch);
        this.chat.username = data.username ;
        if(this.ch=="coach")
      this.router.navigate(['/dcoach']);  
      if(this.ch=="client")
      this.router.navigate(['/dclient']);
      if(this.ch=="false") 
        this.valide="username or password invalid";
   });
   
  }
}