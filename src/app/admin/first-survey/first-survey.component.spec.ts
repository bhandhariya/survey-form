import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSurveyComponent } from './first-survey.component';

describe('FirstSurveyComponent', () => {
  let component: FirstSurveyComponent;
  let fixture: ComponentFixture<FirstSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
