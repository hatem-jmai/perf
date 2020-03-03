import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';
//import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {pipe} from 'rxjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatDatepickerInputEvent, MatDialog, MatDialogRef,MatFormFieldModule} from '@angular/material';
import {error} from 'util';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
type Type = 'text' | 'password' ;

/*
// la fonction de password et confirm password
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}*/
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
export class FormCoachComponent implements OnInit{
  minPw=8;
  minCn=8;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  
  name = new FormControl(null, [Validators.required]);
  lastname = new FormControl(null, [Validators.required]);
  genre = new FormControl(null, [Validators.required]);
  login= new FormControl(null, [Validators.required]);
  gender= new FormControl(null, [Validators.required]);
  cin= new FormControl(null, [Validators.required, Validators.minLength(this.minCn)]);
  phoneNumber = new FormControl(null, [Validators.required]);
  password=new FormControl(null, [Validators.required,
    Validators.minLength(this.minPw),
    Validators.maxLength(50)]);
 
  fileData: File = null;
  constructor(private formBuilder: FormBuilder,private http: HttpClient, 
    private userService: AuthService, public dialog: MatDialog,private router:Router) {
  }
  
  /*user: coach = new coach();
  registerForm: FormGroup;
  
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';

  }
  constructor(private formBuilder: FormBuilder, private userService: AuthService, public dialog: MatDialog) {
  }
  add() {
   this.userService.createcoach(this.user).subscribe(data => console.log(data), error1 => console.log(error1));
     
     this.registerForm.reset();
 }*/
  //@Input() panParent: boolean;
  //@Output() closeAll = new EventEmitter<boolean>();

  user: coach ;
  registerForm: FormGroup;
  maxDate = new Date(2003, 0, 0);
  minDate = new Date(1920, 0, 1);
  private convertDate: string;

  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  
  
  
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
fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
}
  ngOnInit() {
    this.user = new coach();
    this.registerForm = this.formBuilder.group({
      name: [this.user.nom, [Validators.required]],
      lastname: [this.user.prenom, [Validators.required]],
      login:[this.user.username,[Validators.required]],
      email: [this.user.adresse_mail, [Validators.required, Validators.email]],
      dateBirth: [this.user.date_naiss, [Validators.required]],
      gender: [this.user.genre, [Validators.required]],
      cin: [this.user.cin, [Validators.required]],
      gouvernorat:[this.user.gouernorat,[Validators.required]],
      ville:[this.user.ville,[Validators.required]],
      type:[this.user.type,[Validators.required]],
      certif:[this.user.certificat,[Validators.required]],
      phoneNumber: [this.user.tel, [Validators.required]],
      
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(this.minPw),
        Validators.maxLength(50)
      ]]});
  }
  get f() { return this.registerForm.controls; }



  date(e) {
    this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get('birthDate').setValue(this.convertDate, {
      onlyself: true
    });
  }

  add() {
    console.log(this.user);
    this.userService.createcoach(this.user).subscribe(data => console.log(data), 
    error1 => console.log(error1));
    this.router.navigate(['/login']);
    this.registerForm.reset();

    //image upload
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('http://localhost:3000/addcoachs', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
}
}

  



