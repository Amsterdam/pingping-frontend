import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteQuestionnaireService } from '../../services/route-questionnaire.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-questions',
  templateUrl: './route-questionnaire.component.html',
  styleUrls: ['./route-questionnaire.component.scss']
})
export class RouteQuestionnaireComponent implements OnInit {
  questionsForm: FormGroup;
  questionsNumber: number = 6;
  questionPosition: number = 1;
  progressPercentage: number;
  years: number[] = [];

  constructor(private questionsService: RouteQuestionnaireService,
              private deviceDetectorService: DeviceDetectorService) {
    this.progressPercentage = 0;
    this.getYearsArray();
    this.questionsForm = new FormGroup({
      'birthDay': new FormControl('', Validators.required),
      'birthMonth': new FormControl('', Validators.required),
      'birthYear': new FormControl('', Validators.required)
    });

    console.log(this.questionsForm);
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

  previousQuestion(previousQuestion: number) {
    this.updateProgressBar();
  }

  nextQuestion(nextQuestion: number) {
    this.updateProgressBar();
  }

  updateProgressBar() {
    this.progressPercentage = (100 * this.questionPosition) / this.questionsNumber;
  }
}
