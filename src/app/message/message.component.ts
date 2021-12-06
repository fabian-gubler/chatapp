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
	public errorMessage = '';
	public validMessage = true;


  public post_message(message: string, nickname: string): void {

		switch(true) {
			// No Nickname
			case !nickname:
				this.errorMessage = 'Bitte erstelle einen Nickname bevor du eine Nachricht schreibst';
				break;

			// No Message
			case !message.trim():
				this.errorMessage = 'Du kannst keine leeren Nachrichten abschicken';
				break;

			// Needed to check validity
			default:
				this.errorMessage = ''
		}

		// Chat Output
    const timestamp: string = new Date().toLocaleString('de');
    const finalmessage = `${nickname} <br> ${message} --- ${timestamp} <br>`;

		// Push only if valid
		if (this.errorMessage == '') {
			console.log("sucess")
			this.submitMessage.emit(finalmessage);
		}

		// Initialize variable
    this.chatMessage = '';

    return
  }

}
