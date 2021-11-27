import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public messageHistory = '';

  public nickname = '';

  public onSubmitMessage(message: string): void {
    this.messageHistory += message

  }

  public onSubmitNickname(nickname: string): void {
    this.nickname = nickname
  }

}