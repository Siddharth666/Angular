import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleApp3Component } from './simple-app3.component';

describe('SimpleApp3Component', () => {
  let component: SimpleApp3Component;
  let fixture: ComponentFixture<SimpleApp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleApp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleApp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
