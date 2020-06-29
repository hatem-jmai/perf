import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Contact } from '../service/entity/Contact';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user: Contact ;
  registerForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder,
    private userService: AuthService,private router :Router) { }

  ngOnInit() {
    this.user = new Contact();
    this.registerForm = this.formBuilder.group({
      Name: [this.user.Name, [Validators.required]],
      Email: [this.user.Email, [Validators.required, Validators.email]],
      Message:[this.user.Message,[Validators.required]]
    
    })
  }

  add(){
    console.log(this.user);
    this.userService.addcontact(this.user).subscribe
    (res => confirm("your Message send With successeful ") ,
     error1 => {
     confirm("ivalide Registre"),
       console.log(error1)} );


  }

}
