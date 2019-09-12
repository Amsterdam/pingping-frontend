import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent implements OnInit {
  form: FormGroup;
  disableButton: boolean = false;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      goalQuantity: new FormControl('0', Validators.required ),
      goalTitle: new FormControl('', Validators.required ),
      goalDescription: new FormControl('')
    });
  }

  emptyInput() {
    if (this.form.value.goalQuantity == '0') {
      this.form.controls.goalQuantity.reset();
    }
  }

  createGoal() {
    let goal = {
      user_user_key: localStorage.getItem('ppUserID'),
      desired_amount: this.form.value.goalQuantity,
      title: this.form.value.goalTitle,
      description: this.form.value.goalDescription,
      category: 2
    };

    this.appService.createGoal(goal).subscribe(response => {
      this.router.navigate(['/goals']);
    });
  }

  disableSend() {
    this.disableButton = true;
  }
}
