import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  public chatMessage = '';

  public post_message(message: string): void {
    
    /* test for empty (empty or newline because enter; maybe profanity filter*/
    if (message === '' || message.startsWith('\n')) {
      return
    }
    console.log(message)

    this.chatMessage = ''


    return
  }

}