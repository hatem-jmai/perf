import { Component, OnInit } from '@angular/core';
import { client } from '../service/entity/client';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  user: client;
 username:string;
  cl=[];
  
  constructor(private authservice:AuthService ) { 
  
  }

  ngOnInit() {
    this.user=new client();
    console.log(this.authservice.username);
    this.username=this.authservice.username;
  }
  update(){
    console.log(this.user)
    this.authservice.updateclient(this.username,this.user).subscribe((data:any) => {
    console.log(data);
    this.username=data;
console.log(this.username)

    });
  }
}
