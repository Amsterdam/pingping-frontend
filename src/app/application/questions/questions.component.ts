import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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

  constructor(private questionsService: QuestionsService,
              private deviceDetectorService: DeviceDetectorService) {
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

    console.log('Device detector: ', {
      deviceInfo: this.deviceDetectorService,
      isMobile: this.deviceDetectorService.isMobile(),
      isTablet: this.deviceDetectorService.isTablet(),
      isDesktop: this.deviceDetectorService.isDesktop(),
    });
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
      } else {
        console.log(this.questionsForm);

        this.sendQuestionsForm();
      }
    } else {
      if (breakPointQuestion > this.questionsNumber) {
        console.log(this.questionsForm);

        this.sendQuestionsForm();
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

  sendQuestionsForm() {
    let questionsPayload = {
      tasks: {
        question1_birthDay: parseInt(this.questionsForm.value.question1.birthDay),
        question1_birthMonth: parseInt(this.questionsForm.value.question1.birthMonth),
        question1_birthYear: parseInt(this.questionsForm.value.question1.birthYear),
        question2: this.questionsForm.value.question2.answer2,
        question3: this.questionsForm.value.question3.answer3,
        question4: this.questionsForm.value.question4.answer4,
        question5: this.questionsForm.value.question5.answer5,
        question6: this.questionsForm.value.question6.answer6
      }
    };


    // Nullify skipped questions

    if (this.questionsForm.value.question2.answer2.search('Ja') >= 0) {
      questionsPayload.tasks.question3 = null;
    }

    if (this.questionsForm.value.question5.answer5.search('Ja') >= 0) {
      questionsPayload.tasks.question6 = null;
    }

    console.log(questionsPayload);

    this.questionsService.sendQuestionsForm(questionsPayload);
  }
}
