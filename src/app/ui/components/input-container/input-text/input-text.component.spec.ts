import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { configureTestSuite } from 'ng-bullet';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
  let component: InputTextComponent;
  let fixture: ComponentFixture<InputTextComponent>;
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
