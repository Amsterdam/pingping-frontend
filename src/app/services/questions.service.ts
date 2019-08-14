import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questionsNumber = 5;

  constructor() { }
}
