import { Component, OnInit } from '@angular/core';
import { client } from '../service/entity/client';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {
  user: client  ;
 id:number;
  cl=[];
  constructor(private authservice:AuthService ) { 
  
  }

  ngOnInit() {
    this.user=new client();

    this.authservice.getclient().toPromise().then(data => {
      console.log(data);
      for (let key in data)
      if(data.hasOwnProperty(key))
      this.cl.push(data[key]);
  })
  }
  update(id:number){
    console.log(this.user)
  this.authservice.updateclient(id,this.user).subscribe(data => console.log(data), 
    error1 => console.log(error1));
}}
