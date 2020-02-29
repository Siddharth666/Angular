import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAppComponent } from './simple-app.component';

describe('SimpleAppComponent', () => {
  let component: SimpleAppComponent;
  let fixture: ComponentFixture<SimpleAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
