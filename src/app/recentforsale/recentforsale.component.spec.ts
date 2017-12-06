/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecentforsaleComponent } from './recentforsale.component';

describe('RecentforsaleComponent', () => {
  let component: RecentforsaleComponent;
  let fixture: ComponentFixture<RecentforsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentforsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
