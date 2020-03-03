import { Component, OnInit } from '@angular/core';
import { client } from '../service/entity/client';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
export interface genre {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {
hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  select = new FormControl(null, [Validators.required]);
  fileData: File = null;
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

  user: client  ;
  registerForm: FormGroup;
  maxDate = new Date(2003, 0, 0);
  minDate = new Date(1920, 0, 1);
  private convertDate: string;

  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  gender;
  
  gendre :genre[]=  [
    {value: 'Man', viewValue: 'Man'},
    {value: 'Women', viewValue: 'Women'},
  ];

  constructor(private formBuilder: FormBuilder,private http: HttpClient, 
    private userService: AuthService, public dialog: MatDialog,private router :Router) {
  }
 
fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
}
  ngOnInit() {
    this.user = new client();
    this.registerForm = this.formBuilder.group({
      name: [this.user.nom, [Validators.required]],
      lastname: [this.user.prenom, [Validators.required]],
      login:[this.user.username,[Validators.required]],
      email: [this.user.adresse_mail, [Validators.required, Validators.email]],
      dateBirth: [this.user.date_naiss, [Validators.required]],
      gender: [this.user.genre, [Validators.required]],
      adresse:[this.user.adresse,Validators.required],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
      ]]});
  }
     get f() {
        return this.registerForm.controls; }



  date(e) {
    this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get('birthDate').setValue(this.convertDate, {
      onlyself: true
    });
  }

  add() {
    console.log(this.user);
    this.userService.creatclient(this.user).subscribe(data => console.log(data), 
    error1 => console.log(error1));
    this.router.navigate(['/login']);
    this.registerForm.reset();      
}

reset(){
  
}

}