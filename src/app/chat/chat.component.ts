import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [] ;
  message = '' ;

  constructor(private chat:ChatService) { }

  ngOnInit() {
    this.chat.join() ;
    var socket = this.chat.getSocket() ;
    socket.on('update',function ( data) {
      this.messages.push(data) ;
    })

  }

  send() {
    var data = { message : this.message} ;
    this.chat.sendMessage(data) ;
    this.messages.push(data) ;
  }



}
