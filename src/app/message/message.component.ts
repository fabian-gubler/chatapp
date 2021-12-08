import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {

  @Output() public submitMessage = new EventEmitter<object>();

  public chatMessage = '';
  public errorMessage = '';
  public validMessage = '';

  public post_message(message: string): void {

		switch(true) {
			// No Nickname
			case !Person.Nickname:
				this.errorMessage = 'Bitte erstelle einen Nickname bevor du eine Nachricht schreibst';
				break;

			// No Message
			case !message.trim():
				this.errorMessage = 'Du kannst keine leeren Nachrichten abschicken';
				break;

			// Needed to check validity
			default:
				this.errorMessage = ''
		

				// Chat Output
				const msg_item = {
					name: Person.Nickname,
					msg: message,
					t_stamp: new Date().toLocaleDateString('de')
				}
				
				this.submitMessage.emit(msg_item);

				this.chatMessage = '';
				
				return
			}

		};

}
