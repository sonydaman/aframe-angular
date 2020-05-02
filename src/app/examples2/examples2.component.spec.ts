import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Examples2Component } from './examples2.component';

describe('Examples2Component', () => {
  let component: Examples2Component;
  let fixture: ComponentFixture<Examples2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Examples2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Examples2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
