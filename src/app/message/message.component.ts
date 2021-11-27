import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  @Input() public nickname = '';

  @Output() public submitMessage = new EventEmitter<string>();

  public chatMessage = '';

  public post_message(message: string, nickname: string): void {
    
    /* test for empty (empty or newline because enter; maybe profanity filter -- Problem : Closing Error with Enter prompts another error because of keyup event*/
    if (message === '' || message.startsWith('\n')) {
      window.alert("Du kannst keine leeren Nachrichten abschicken");

      this.chatMessage = '';
      return
    }
    
    const timestamp: string = new Date().toLocaleString('de');
    const finalmessage = `${nickname} : ${message} - ${timestamp} <br>`;


    this.submitMessage.emit(finalmessage);
    this.chatMessage = '';

    return
  }

}