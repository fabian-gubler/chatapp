/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageloadComponent } from './pageload.component';

describe('PageloadComponent', () => {
  let component: PageloadComponent;
  let fixture: ComponentFixture<PageloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
