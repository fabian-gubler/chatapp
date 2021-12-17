import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../shared/models/chatmessage';
import { Person } from '../shared/models/person';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat_history',
  templateUrl: './chat_history.component.html',
  styleUrls: ['./chat_history.component.css']
})
export class chat_historyComponent implements OnInit{

  public chat_history: ChatMessage[] = [];

  constructor(private chatService: ChatService) {
  }

  public ngOnInit(): void{
    
    this.getHistory();

    setInterval(() => {
      this.getHistory();
    }, 2000);

  }

  private getHistory(): void {
    this.chatService.getHistory().subscribe(
      (response: ChatMessage[]) => {
        this.chat_history = response;
        this.chat_history.map((obj:any) => {obj.nickname == Person.Nickname? obj.loggedin = true: obj.loggedin = false})
        console.log(this.chat_history);
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}


