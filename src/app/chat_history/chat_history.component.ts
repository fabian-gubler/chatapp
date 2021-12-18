import { AfterViewChecked, ViewChild, Component, OnInit } from '@angular/core';
import { ChatMessage } from '../shared/models/chatmessage';
import { Person } from '../shared/models/person';
import { ChatService } from '../shared/services/chat.service';

@Component({
  selector: 'app-chat_history',
  templateUrl: './chat_history.component.html',
  styleUrls: ['./chat_history.component.css']
})
export class chat_historyComponent implements OnInit, AfterViewChecked {
	@ViewChild('scrollMe') input: any;
	
  public chat_history: ChatMessage[] = [];

  constructor(private chatService: ChatService) {
  }

  public ngOnInit(): void{
    
		console.log("ngOnInit trigger")
    this.getHistory();

    setInterval(() => {
      this.getHistory();
    }, 2000);

  }

  public active_nick_check(nickname: string): boolean {
    if (!Person.Nickname) {
      return false;
    }

    return Person.Nickname === nickname;

  }

	public ngAfterViewChecked():void{
			this.scrollToBottom();
   }

	private scrollToBottom(): void {
		console.log("Checked Within the Function");
		try {
      this.input.nativeElement.scrollTop = this.input.nativeElement.scrollHeight;
    } catch(err) { }
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


