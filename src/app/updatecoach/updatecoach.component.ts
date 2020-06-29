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
    this.getOneCoach();
  }
        update(){
          console.log(this.user);
          console.log(this.username);
        this.authservice.updatecoach(this.username,this.user).subscribe((data:any) => {
          console.log(data);
          this.username=data;
      });
      }
      getOneCoach(){
        console.log(this.username);
        this.authservice.getOneCoach(this.username).subscribe((data:any) => {
        console.log(data);
        //this.user=data;
        for (let key in data)
        if(data.hasOwnProperty(key)){
          this.user.id=data[key].id;
          this.user.nom=data[key].nom;
          this.user.prenom=data[key].prenom;
          this.user.username=data[key].username;
          this.user.password=data[key].password;
          this.user.genre=data[key].genre;
          this.user.date_naiss=data[key].date_naiss;
          this.user.cin=data[key].cin;
          this.user.adresse_mail=data[key].adresse_mail;
          this.user.tel=data[key].tel;
          this.user.type=data[key].type;
          this.user.ville=data[key].ville;
          this.user.certificat=data[key].certificat;
        }
          
      });
    }
}
