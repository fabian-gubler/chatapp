import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  @Output() public submitNickname = new EventEmitter<string>();

  public init_nickname = ''
  public savemsg = ''
	public errorMessage = ''

  public save_nickname(nickname: string): void {

		// Empty Nickname
		if (!nickname) {
			this.errorMessage = 'Bitte erstelle Einen Nicknamen';
			return
		}
		// Check whether multiple words
		if (nickname.includes(' ')) {
			this.errorMessage = 'Dein Nickname soll keine Leerzeichen beinhalten';
      return
		}

		// Maximum character length
		if (nickname.length > 15) {
			this.errorMessage = 'Dein Nickname darf maximal 15 Zeichen haben';
		}

		// Submit Nickname
    this.submitNickname.emit(nickname);

    this.savemsg = 'Nickname: ' + nickname + ' gespeichert'

    return

  }

  constructor() { }

  ngOnInit() {
  }

}
