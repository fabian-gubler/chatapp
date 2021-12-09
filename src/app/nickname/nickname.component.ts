import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Person } from '../shared/models/person';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent {

  public init_nickname = ''

  public exit_msg = '';

  public save_nickname(nickname: string): void {
    
    // Empty Nickname
		if (!nickname) {
			this.exit_msg = 'Bitte erstelle Einen Nicknamen';
			return
		}
		// Check whether multiple words
		if (nickname.includes(' ')) {
			this.exit_msg = 'Dein Nickname soll keine Leerzeichen beinhalten';
      		return
		}

		// Maximum character length
		if (nickname.length > 15) {
			this.exit_msg = 'Dein Nickname darf maximal 15 Zeichen haben';
		}

		Person.Nickname = nickname;

    this.exit_msg = 'Nickname: ' + nickname + ' gespeichert'

	  const url = 'http://localhost:3000/nicknames';
	  const options = {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json;charset=UTF-8'
		},
		body: JSON.stringify({
		  username: nickname,
		})
	  };
	  
	  fetch(url, options)
		.then(response => {
		  console.log(response.status);
		});


    return
  
  }
}