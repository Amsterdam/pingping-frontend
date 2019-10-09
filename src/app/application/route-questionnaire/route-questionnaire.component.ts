import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteQuestionnaireService } from '../../services/route-questionnaire.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ActivatedRoute, Router } from '@angular/router';
import { MatomoTracker } from 'ngx-matomo';

@Component({
  selector: 'app-questions',
  templateUrl: './route-questionnaire.component.html',
  styleUrls: ['./route-questionnaire.component.scss']
})
export class RouteQuestionnaireComponent implements OnInit {
  questionForm: FormGroup;
  currentQuestion: any = {};
  questionPosition: any;
  progressPercentage = 0;
  days: number[];
  month: string[] = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December'
  ];
  years: number[] = [];

  constructor(private questionsService: RouteQuestionnaireService,
              private deviceDetectorService: DeviceDetectorService,
              private route: ActivatedRoute,
              private matomoTracker: MatomoTracker,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.questionPosition = this.route.snapshot.paramMap.get('questionPosition');
      this.currentQuestion.type = null;
      this.questionForm = new FormGroup({
        question: new FormControl(''),

        birthDay: new FormControl(''),
        birthMonth: new FormControl(''),
        birthYear: new FormControl(''),

        answer: new FormControl('')
      });

      if (this.questionPosition) {
        this.questionsService.getQuestion(this.questionPosition).subscribe((response: any) => {
          this.updateProgressBar(response);

          this.currentQuestion = response;

          this.initForm(response);
        });
      } else {
        this.questionsService.getFirstQuestion().subscribe((response: any) => {
          this.router.navigate([`/route-questionnaire/${ response.currentQuestion }/`]);

          localStorage.setItem('ppCookie', response.cookie);
        });
      }
    });
  }

  showInfoInConsole() {
    console.log(this.questionForm);
    console.log('Question position: ', this.questionPosition);
    // console.log('Device detector: ', {
    //   deviceInfo: this.deviceDetectorService,
    //   isMobile: this.deviceDetectorService.isMobile(),
    //   isTablet: this.deviceDetectorService.isTablet(),
    //   isDesktop: this.deviceDetectorService.isDesktop(),
    // });
  }

  setDaysArray() {
    this.questionForm.controls['birthDay'].reset();

      let daysCount: any = new Date(
      this.questionForm.controls['birthYear'].value,
      this.questionForm.controls['birthMonth'].value,
      0).getDate();

    this.days = [].constructor(daysCount);
  }

  setYearsArray() {
    const currentYear = new Date().getFullYear();

    for (let i = 1990 ; i <= currentYear ; i++) {
      this.years.push(i);
    }
  }

  initForm(response) {
    if (response.questionType == 'date') {
      this.setYearsArray();

      this.questionForm = null;
      this.questionForm = new FormGroup({
        birthDay: new FormControl('', Validators.required),
        birthMonth: new FormControl('', Validators.required),
        birthYear: new FormControl('', Validators.required)
      });

      this.questionForm.controls['birthMonth'].valueChanges.subscribe(() => {
        this.setDaysArray();
      });
      this.questionForm.controls['birthYear'].valueChanges.subscribe(() => {
        this.setDaysArray();
      });
    } else {
      this.questionForm = new FormGroup({
        answer: new FormControl('', Validators.required)
      });
    }
  }

  sendQuestion() {
    const data: any = { answer: null };
    const ppCookie = localStorage.getItem('ppCookie');

    if (this.questionForm.value.answer) {
      data.answer = this.questionForm.value.answer;
      data.cookie = ppCookie;
    } else {
      data.answer = this.questionForm.value;
      data.cookie = ppCookie;
    }

    this.questionsService.sendQuestion(data, this.currentQuestion.currentQuestion).subscribe((response: any) => {
      this.matomoTracker.trackEvent('question', this.currentQuestion.question, data.answer);

      if (!response.user_user_key) {
        this.router.navigate([`/route-questionnaire/${ response.currentQuestion }/`]);
        localStorage.setItem('ppCookie', response.cookie);
      } else {
        localStorage.setItem('ppUserID', JSON.stringify(response.user_user_key.user_key));

        this.router.navigate(['/route-confirmation']);
      }
    });
  }

  updateProgressBar(question: any) {
    this.progressPercentage = (100 * question.order) / question.numberOfQuestions;
  }
}
