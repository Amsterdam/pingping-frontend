import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteQuestionnaireService } from '../../services/route-questionnaire.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './route-questionnaire.component.html',
  styleUrls: ['./route-questionnaire.component.scss']
})
export class RouteQuestionnaireComponent implements OnInit {
  questionsForm: FormGroup;
  question: any = null;
  questionPosition: any;
  progressPercentage = 0;
  years: number[] = [];

  constructor(private questionsService: RouteQuestionnaireService,
              private deviceDetectorService: DeviceDetectorService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // this.updateProgressBar();
    this.questionPosition = this.route.snapshot.paramMap.get('questionPosition');

    if (this.questionPosition == '1') {
      this.question = this.questionsService.getFirstQuestion().subscribe(response => {
        console.log(this.question);
        this.setYearsArray();

        this.questionsForm = new FormGroup({
          'question': new FormControl(this.question.question),
          'birthDay': new FormControl('', Validators.required),
          'birthMonth': new FormControl('', Validators.required),
          'birthYear': new FormControl('', Validators.required)
        });
      });
    } else {
      this.questionsForm = new FormGroup({
        'question': new FormControl('Question title'),
        'answer': new FormControl('')
      });
    }

    this.showInfoInConsole();
  }

  showInfoInConsole() {
    console.log(this.questionsForm);
    console.log('Question position: ', this.questionPosition);
    console.log('Device detector: ', {
      deviceInfo: this.deviceDetectorService,
      isMobile: this.deviceDetectorService.isMobile(),
      isTablet: this.deviceDetectorService.isTablet(),
      isDesktop: this.deviceDetectorService.isDesktop(),
    });
  }

  setYearsArray() {
    const currentYear = new Date().getFullYear();

    for (let i = 1990 ; i <= currentYear ; i++) {
      this.years.push(i);
    }
  }

  previousQuestion(previousQuestion: number) {
    // this.updateProgressBar();
  }

  sendQuestion(data: any) {
    const nextQuestion = this.questionsService.sendQuestion(data);

    this.questionsForm = new FormGroup({
      'question': new FormControl(nextQuestion.question),
      'answer': new FormControl('')
    });

    this.question = nextQuestion;

    // this.updateProgressBar();
  }

  // updateProgressBar() {
  //   this.progressPercentage = (100 * this.question.questionPosition) / this.question.questionsNumber;
  // }
}
