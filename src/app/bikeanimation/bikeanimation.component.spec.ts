/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BikeanimationComponent } from './bikeanimation.component';

describe('BikeanimationComponent', () => {
  let component: BikeanimationComponent;
  let fixture: ComponentFixture<BikeanimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeanimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
