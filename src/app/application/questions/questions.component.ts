import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  questions: FormGroup;
  @ViewChild('question1', { static: false }) question1: HTMLElement;

  years: number[] = [];

  constructor() {
    this.questions = new FormGroup({});

    this.getYearsArray();
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
}
