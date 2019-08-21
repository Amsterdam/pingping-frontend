import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteQuestionnaireComponent } from './questions.component';

describe('QuestionsComponent', () => {
  let component: RouteQuestionnaireComponent;
  let fixture: ComponentFixture<RouteQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
