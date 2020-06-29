import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { client } from '../service/entity/client';

@Component({
  selector: 'app-profileclient',
  templateUrl: './profileclient.component.html',
  styleUrls: ['./profileclient.component.css']
})
export class ProfileclientComponent implements OnInit {
  username:string;
  user:client;
  items=[];
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user=new client();
    this.username=this.authservice.username;
    this.getOneClient();
  }

  getOneClient(){
    console.log(this.username);
    this.authservice.getOneClient(this.username).subscribe((data:any) => {
    console.log(data);
    this.user=data;
    for (let key in data)
    if(data.hasOwnProperty(key))
    this.items.push(data[key]);
console.log(this.items)
  });
}
}
