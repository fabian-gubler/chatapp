import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NicknameService {
  private nicknameurl = 'http://localhost:3000/nicknames';

  constructor (private httpClient: HttpClient) {}

  public register_nickname(nickname: any): Observable<any> {
    const params = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      };
    
      return this.httpClient.post<any>(this.nicknameurl, nickname, params);

  }

}