import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { Chat_historyComponent } from './chat_history/chat_history.component';
import { NicknameComponent } from './nickname/nickname.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      FooterComponent,
      MessageComponent,
      Chat_historyComponent,
      NicknameComponent
   ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
