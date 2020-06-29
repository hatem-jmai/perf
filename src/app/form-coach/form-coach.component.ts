import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';
//import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {pipe, from} from 'rxjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatDatepickerInputEvent, MatDialog, MatDialogRef,MatFormFieldModule} from '@angular/material';
import {error} from 'util';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
type Type = 'text' | 'password' ;

export interface gouvernorat {
  value: string;
  viewValue: string;
}
export interface Ville {
  value: string;
  viewValue: string;
}
export interface genre {
  value: string;
  viewValue: string;
}
export interface type {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-form-coach',
  templateUrl: './form-coach.component.html',
  styleUrls: ['./form-coach.component.css']
})
export class FormCoachComponent implements OnInit {
  fileData: File = null;
  user: coach ;
  formcoach:FormGroup;
  gender;




  constructor(private formBuilder: FormBuilder,private http: HttpClient,
     private userService: AuthService, public dialog: MatDialog,private route:Router) {
  }

  ngOnInit() {
    this.user = new coach();
    this.formcoach = this.formBuilder.group({
      name: [this.user.nom, [Validators.required]],
      prenom: [this.user.prenom, [Validators.required]],
      email: [this.user.adresse_mail, [Validators.required, Validators.email]],
      dateBirth: [this.user.date_naiss, [Validators.required]],
      gender: [this.user.genre, [Validators.required]],
      adress: [this.user.gouernorat, [Validators.required]],
      phoneNumber: [this.user.tel, [Validators.required]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
      ]]});
  }
   
  gouvernerats : gouvernorat[]= [
    {value: 'Tunis', viewValue: 'Tunis'},
    {value: 'Ariana', viewValue: 'Ariana'},
    {value: 'Ben arous', viewValue: 'Ben arous'}
  ];
  villes :Ville[]=  [
    {value: 'Ariana', viewValue: 'Raoued'},
    {value: 'Ariana', viewValue: 'ghazela'},
    {value: 'Tunis', viewValue: 'charguia'},
    {value: 'Tunis', viewValue: 'Menzah'},
    {value: 'Ben arous', viewValue: 'Ben arous'}
  ];
  gendre :genre[]=  [
    {value: 'Man', viewValue: 'Man'},
    {value: 'Women', viewValue: 'Women'},
  ];

  types:type[]= [
    {value: 'Musculation', viewValue: 'Musculation'},
    {value: 'Fitness', viewValue: 'Fitness'},
    {value: 'MMA', viewValue: 'MMA'},
    {value: 'Boxing', viewValue: 'Boxing'}
];



  add() {
    console.log(this.user);
    this.userService.createcoach(this.user).subscribe
    (res => this.route.navigate(['/login']) ,
     error1 => {
     confirm("ivalide Registre"),
       console.log(error1)} );

     
     
    //image upload
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log(this.fileData);
    this.http.post('http://localhost:3000/addcoachs', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })


    }
  
  }



