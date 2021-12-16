<<<<<<< HEAD
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, Output, EventEmitter } from '@angular/core';
import { NicknameComponent } from '../nickname/nickname.component';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> e341bde5376edda52db2dc556ec480477bde30d8
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
<<<<<<< HEAD
				this.errorMessage = ''

				// Message to be send as Post request to the server
	  			const url = 'http://localhost:3000/history';
	  			const options = {
						method: 'POST',
						headers: {
							'Accept': 'application/json',
		  					'Content-Type': 'application/json;charset=UTF-8'
						},
						body: JSON.stringify({
		  				message: message,
						nickname: Person.Nickname
						})
	  				};
	  
	  			fetch(url, options)
						.then(response => {
		  				console.log(response.status);
						});

				// Chat Output
				setInterval(function get_histoy(){
				const history_url = 'http://localhost:3000/history';
	  			const history_options = {
						method: 'GET',
						headers: {
		  					'Content-Type': 'application/json;charset=UTF-8'
						},
	  				};
	  
	  			fetch(history_url, history_options)
						.then(response => {
		  				console.log(response.status);
						});
				},1000)


				//const msg_item = {
				//	name: Person.Nickname,
				//	msg: message,
				//	t_stamp: new Date().toLocaleDateString('de')
				//}
				
				//this.submitMessage.emit(msg_item);

				//this.chatMessage = '';
				
				return
=======
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
>>>>>>> e341bde5376edda52db2dc556ec480477bde30d8
			}

		};

}
