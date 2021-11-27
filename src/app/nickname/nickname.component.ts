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

  public save_nickname(nickname: string): void {
    this.submitNickname.emit(nickname);

    this.savemsg = 'Nickname: ' + nickname + ' gespeichert'

    window.alert(this.savemsg)

    return

  }

  constructor() { }

  ngOnInit() {
  }

}
