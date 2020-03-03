import { Component, OnInit } from '@angular/core';
import { coach } from '../service/entity/coach';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashcoach',
  templateUrl: './dashcoach.component.html',
  styleUrls: ['./dashcoach.component.css']
})
export class DashcoachComponent implements OnInit {
  user:coach;
  cl=[];
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user=new coach();

    this.authservice.getcoach().toPromise().then(data => {
      console.log(data);
      for (let key in data)
      if(data.hasOwnProperty(key))
      this.cl.push(data[key]);
  })
  }
  update(id:number){
    console.log(id)
  this.authservice.updatecoach(id,this.user).subscribe(data => console.log(data), 
    error1 => console.log(error1));
}}
