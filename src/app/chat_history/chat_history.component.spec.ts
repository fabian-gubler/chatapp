/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { chat_historyComponent } from './chat_history.component';

describe('Chat_historyComponent', () => {
  let component: chat_historyComponent;
  let fixture: ComponentFixture<chat_historyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chat_historyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chat_historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
