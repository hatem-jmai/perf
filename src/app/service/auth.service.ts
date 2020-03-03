import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {coach} from './entity/coach';
import { client } from './entity/client';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  creatclient(client: object):Observable<object>{
    return this.http.post('http://localhost:3000/addclient',client)
  }
  createcoach(coach: object): Observable<object> {
    return this.http.post(`http://localhost:3000/addcoachs`, coach);
  }

  loginCoach(coach: object): Observable<any>{ 
    return this.http.post(`http://localhost:3000/coachs/login`,coach);
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
  
  updateclient(id:number,client: object):Observable<object> {
    return this.http.put('http://localhost:3000/client/'+id,client)  ;
  }

  updatecoach(id:number,coach: object):Observable<object> {
    return this.http.put('http://localhost:3000/coachs/'+id,coach)  ;
  }

  
  

} 