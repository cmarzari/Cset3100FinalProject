/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewarticleComponent } from './newarticle.component';

describe('NewarticleComponent', () => {
  let component: NewarticleComponent;
  let fixture: ComponentFixture<NewarticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewarticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
