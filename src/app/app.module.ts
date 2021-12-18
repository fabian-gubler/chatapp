import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { chat_historyComponent } from './chat_history/chat_history.component';
import { NicknameComponent } from './nickname/nickname.component';
import { PageloadComponent } from './pageload/pageload.component';
import {AutosizeModule} from '@techiediaries/ngx-textarea-autosize';

@NgModule({
  declarations: [							
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    chat_historyComponent,
    NicknameComponent,
    PageloadComponent,
   ],
  imports: [
    BrowserModule,
		AutosizeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
