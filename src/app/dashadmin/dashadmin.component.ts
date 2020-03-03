import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashadmin',
  templateUrl: './dashadmin.component.html',
  styleUrls: ['./dashadmin.component.css']
})
export class DashadminComponent implements OnInit {
  items = [];
  id:any;
  client=[];
  
  
    constructor(private authservice:AuthService) { }
  
  ngOnInit() {
    this.authservice.getcoach().toPromise().then(data => {
      console.log(data);
      for (let key in data)
      if(data.hasOwnProperty(key))
      this.items.push(data[key]);
    })
      this.authservice.getclient().toPromise().then(data => {
        console.log(data);
        for (let key in data)
        if(data.hasOwnProperty(key))
        this.client.push(data[key]);
    
    }
    )}

    deletecoach(id: number){
      console.log(id)
      if(confirm('Are u sure to delete this coach!?')){
      this.authservice.deletecoach(id).subscribe(data => console.log(data))
    }}

    deleteclient(id: number){
      console.log(id)
      if(confirm('Are u sure to delete this client !?')){
      this.authservice.deleteclient(id).subscribe(data => console.log(data))
    }}
  }


