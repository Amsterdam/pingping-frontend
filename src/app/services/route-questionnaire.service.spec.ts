import { TestBed } from '@angular/core/testing';

import { RouteQuestionnaireService } from './route-questionnaire.service';

describe('QuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteQuestionnaireService = TestBed.get(RouteQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
