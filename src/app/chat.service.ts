import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  url = "http://127.0.0.1:3000" ;
  socket = io(this.url);
  username = '' ;

  constructor() {}

  getSocket() {
    return this.socket ;
  }

  join(){
    this.socket.emit('create');
  }

  sendMessage( m ) {
    this.socket.emit('message', { message : m }) ;
  }

}
