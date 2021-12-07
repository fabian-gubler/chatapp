import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public chat_history: Array<any> = [];

  public onSubmitMessage(msg_item: object):void {
    this.chat_history.push(msg_item)

  }

}