import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleApp2Component } from './simple-app2.component';

describe('SimpleApp2Component', () => {
  let component: SimpleApp2Component;
  let fixture: ComponentFixture<SimpleApp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleApp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleApp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
