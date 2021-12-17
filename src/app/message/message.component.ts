import { Component, OnInit} from '@angular/core';
import { Person } from '../shared/models/person';
import { ChatMessage } from '../shared/models/chatmessage';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit{

	public chatMessage = '';
	public errorMessage = '';

	constructor(private _chatService: ChatService) {
	}

	public ngOnInit(): void {}

  	public post_message(message: string): void {

		switch(true) {
			// No Message
			case !message.trim():
				this.errorMessage = 'Du kannst keine leeren Nachrichten abschicken';
				this.chatMessage = '';
				break;
			
			// No Nickname
			case !Person.Nickname:
				this.errorMessage = 'Bitte erstelle einen Nickname bevor du eine Nachricht schreibst';
				break;

			default:
				//create Message Item
				const msg_item: ChatMessage = {
					message: message,
					nickname: Person.Nickname,
				};

				this._chatService.addMessage(msg_item).subscribe(
					(response: ChatMessage) => {
						this.chatMessage = '';
					},

					(error: any) => {
						this.errorMessage = error;
					}
				);
			}

		};

}
