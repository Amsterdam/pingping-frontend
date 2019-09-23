import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  goals: any = {};

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.appService.getGoals().subscribe(response => {
      this.goals = response;
    });
  }

  createGoal() {
    this.router.navigate(['/create-goal']);
  }
}
