import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string;
  user:coach;
  items=[];
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user=new coach();
   this.username=this.authservice.username;
    this.getOneCoach();
  }
  getOneCoach(){
      console.log(this.username);
      this.authservice.getOneCoach(this.username).subscribe((data:any) => {
      console.log(data);
      this.user=data;
      for (let key in data)
      if(data.hasOwnProperty(key))
      this.items.push(data[key]);
console.log(this.items)
    });
  }

}
