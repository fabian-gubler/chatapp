/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Chat_historyComponent } from './chat_history.component';

describe('Chat_historyComponent', () => {
  let component: Chat_historyComponent;
  let fixture: ComponentFixture<Chat_historyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chat_historyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chat_historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
