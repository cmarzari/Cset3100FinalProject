/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomejumboComponent } from './homejumbo.component';

describe('HomejumboComponent', () => {
  let component: HomejumboComponent;
  let fixture: ComponentFixture<HomejumboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomejumboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomejumboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
