import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionsForm: FormGroup;
  questionsNumber: number = 6;
  questionPosition = 1;
  progressPercentage: number;
  years: number[] = [];

  constructor() {
    this.progressPercentage = 0;
    this.getYearsArray();
    this.questionsForm = new FormGroup({
      'question1': new FormGroup({
        'birthDay': new FormControl(''),
        'birthMonth': new FormControl(''),
        'birthYear': new FormControl('')
      }),
      'question2': new FormGroup({
        'answer2': new FormControl('')
      }),
      'question3': new FormGroup({
        'answer3': new FormControl('')
      }),
      'question4': new FormGroup({
        'answer4': new FormControl('')
      }),
      'question5': new FormGroup({
        'answer5': new FormControl('')
      }),
      'question6': new FormGroup({
        'answer6': new FormControl('')
      })
    });
  }

  ngOnInit() {
    this.updateProgressBar();
  }

  getYearsArray() {
    const currentYear = new Date().getFullYear();
    const finalYear = currentYear - 18;

    for (let i = 1980 ; i <= finalYear ; i++) {
      this.years.push(i);
    }
  }

  previousQuestion() {
    if ((this.questionPosition - 1) > 0) {
      this.questionPosition -= 1;

      this.updateProgressBar();
    }
  }

  nextQuestion() {
    if ((this.questionPosition + 1) <= this.questionsNumber) {
      this.questionPosition += 1;

      this.updateProgressBar();
    }
  }

  updateProgressBar() {
    this.progressPercentage = (100 * this.questionPosition) / this.questionsNumber;
  }

  finishQuestionnaire() {
    console.log(this.questionsForm.value);
  }
}
