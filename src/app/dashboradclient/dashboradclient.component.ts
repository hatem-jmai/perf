import { Component, OnInit } from '@angular/core';
import { coach } from '../service/entity/coach';
import { AuthService } from '../service/auth.service';
import { client } from '../service/entity/client';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-dashboradclient',
  templateUrl: './dashboradclient.component.html',
  styleUrls: ['./dashboradclient.component.css']
})
export class DashboradclientComponent implements OnInit {
items = [];
user:client;
name = "" ;

  constructor(private authservice:AuthService ,private chat:ChatService) { }

  ngOnInit() {

    this.name = this.chat.username ;

this.authservice.getcoach().toPromise().then(data => {
  console.log(data);
  for (let key in data)
  if(data.hasOwnProperty(key))
  this.items.push(data[key]);

}
)}
}





