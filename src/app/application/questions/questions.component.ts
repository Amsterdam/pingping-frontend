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
  questionPosition: number = 1;
  skippedQuestions: number[] = [];
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

    for (let i = 1990 ; i <= currentYear ; i++) {
      this.years.push(i);
    }
  }

  previousQuestion(previousQuestion: number, breakPointQuestion?: number) {
    if (!this.skippedQuestions.includes(previousQuestion)) {
      this.questionPosition -= 1;
    } else {
      this.questionPosition = breakPointQuestion;
    }

    this.updateProgressBar();
  }

  nextQuestion(nextQuestion: number, breakPointQuestion?: number) {
    if (!this.skippedQuestions.includes(nextQuestion)) {
      if ((nextQuestion) <= this.questionsNumber) {
        this.questionPosition = nextQuestion;
      }
    } else {
      if (breakPointQuestion > this.questionsNumber) {
        console.log('Questionnaire finished!');
      } else {
        this.questionPosition = breakPointQuestion;
      }
    }

    this.updateProgressBar();
  }

  addToSkippedQuestions(questionToAdd: number) {
    if (!this.skippedQuestions.includes(questionToAdd)) {
      this.skippedQuestions.push(questionToAdd);
    }

    console.log('Skipped questions: ', this.skippedQuestions);
  }

  removeFromSkippedQuestions(questionToSkip: number) {
    const index = this.skippedQuestions.indexOf(questionToSkip, 0);

    if (index > -1) {
      this.skippedQuestions.splice(index, 1);
    }

    console.log('Skipped questions: ', this.skippedQuestions);
  }

  updateProgressBar() {
    this.progressPercentage = (100 * this.questionPosition) / this.questionsNumber;
  }

  finishQuestionnaire() {
    console.log('Form: ', this.questionsForm.value);
    console.log('Skipped Question: ', this.skippedQuestions);
  }
}
