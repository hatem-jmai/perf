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
    this.getOneClient();
  }
  update(){
    console.log(this.user);
    this.authservice.updateclient(this.username,this.user).subscribe((data:any) => {
    console.log(data);
    this.username=data;
    console.log(this.username);
    
    });
  }
      getOneClient(){
        console.log(this.username);
        this.authservice.getOneClient(this.username).subscribe((data:any) => {
        console.log(data);
        //this.user=data;
        for (let key in data)
        if(data.hasOwnProperty(key)){
          this.user.idclient=data[key].idclient;
          this.user.nom=data[key].nom;
          this.user.prenom=data[key].prenom;
          this.user.username=data[key].username;
          this.user.password=data[key].password;
          this.user.genre=data[key].genre;
          this.user.date_naiss=data[key].date_naiss;
          this.user.cin=data[key].cin;
          this.user.adresse_mail=data[key].adresse_mail;
          this.user.adresse=data[key].adresse;
        }
          
      });
    }

}
