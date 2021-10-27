import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  public chatMessage = '';

  public post_message(message: string): void {
    console.log(message)
    this.chatMessage = ''
    return
  }

}