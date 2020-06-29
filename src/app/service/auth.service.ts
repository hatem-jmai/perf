import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {coach} from './entity/coach';
import { client } from './entity/client';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id_client:string;
  username:string;
  id_coach:string;

  constructor(private http:HttpClient) {
    
   }

  creatclient(client: object):Observable<object>{
    return this.http.post('http://localhost:3000/addclient',client)
  }
  createcoach(coach: coach): Observable<object> {
    return this.http.post('http://localhost:3000/addcoachs', coach);
  }

  addcontact(contact :object):Observable<object>{
    return this.http.post('http://localhost:3000/addcontact',contact)
  }

  loginCoach(coach: object): Observable<any>{ 
    return this.http.post(`http://localhost:3000/coachs/login`,coach);
  }
  loginClient(coach: object): Observable<any>{ 
    return this.http.post(`http://localhost:3000/clients/login`,coach);
  }

  getcoach():Observable<any>{
    return this.http.get('http://localhost:3000/coachs');
  }
 

  getclient() :Observable<any>{
    return this.http.get('http://localhost:3000/clients');
  }

  deletecoach(id:number){
    return this.http.delete('http://localhost:3000/coachs/'+id);
  }
  deleteclient(id:number){
    return this.http.delete('http://localhost:3000/client/'+id);
  }
  
  updateclient(username:string,client: client):Observable<object> {
    return this.http.put('http://localhost:3000/client/'+username,client)  ;
  }

  updatecoach(username:string,coach: coach):Observable<object> {
    return this.http.put('http://localhost:3000/coachs/'+username,coach)  ;
  }
  getOneCoach(username:string){
    return this.http.get('http://localhost:3000/coach/'+username);
  }

  getOneClient(username:string){
    return this.http.get('http://localhost:3000/client/'+username);
  }
  
  
  

} 