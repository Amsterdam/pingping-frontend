import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questionsForm: FormGroup;

  years: number[] = [];

  constructor() {
    this.getYearsArray();

    this.questionsForm = new FormGroup({
      'question1': new FormGroup({
        'birthDay': new FormControl(''),
        'birthMonth': new FormControl(''),
        'birthYear': new FormControl('')
      })
    });
  }

  ngOnInit() {
  }

  getYearsArray() {
    const currentYear = new Date().getFullYear();
    const finalYear = currentYear - 18;

    for (let i = 1980 ; i <= finalYear ; i++) {
      this.years.push(i);
    }
  }

  nextQuestion() {
    console.log(this.questionsForm);
  }
}
