import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../shared/models/chatmessage';
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
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

}
