import { Component, OnInit } from '@angular/core';
import { coach } from '../service/entity/coach';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-updatecoach',
  templateUrl: './updatecoach.component.html',
  styleUrls: ['./updatecoach.component.css']
})
export class UpdatecoachComponent implements OnInit {
  user:coach;
  cl=[];
  username:string;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user=new coach();
    console.log(this.authservice.username);
    this.username=this.authservice.username;
  }
  update(){
    console.log(this.user);
    console.log(this.username);
  this.authservice.updatecoach(this.username,this.user).subscribe((data:any) => {
    console.log(data);
    this.username=data;
});
}
}
