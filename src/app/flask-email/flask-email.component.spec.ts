import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskEmailComponent } from './flask-email.component';

describe('FlaskEmailComponent', () => {
  let component: FlaskEmailComponent;
  let fixture: ComponentFixture<FlaskEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaskEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
