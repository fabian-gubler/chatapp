import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ChatMessage } from '../models/chatmessage';

@Injectable({ providedIn: 'root' })

export class ChatService {
  private historyurl = 'http://localhost:3000/history';

  constructor(private httpClient: HttpClient) {}

  public addMessage(message: ChatMessage): Observable<ChatMessage> {
    const params = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.httpClient.post<ChatMessage>(this.historyurl, message, params);
  }

  public getHistory(): Observable<ChatMessage[]> {
    return this.httpClient.get<ChatMessage[]>(this.historyurl);
  }
}