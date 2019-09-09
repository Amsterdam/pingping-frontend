import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-route-screen',
  templateUrl: './route-screen.component.html',
  styleUrls: ['./route-screen.component.scss']
})
export class RouteScreenComponent implements OnInit {
  tasks: any = [{
    brief_description: null,
    card_description: null,
    card_icon: null,
    city_points_value: null,
    complete: null,
    info_b: null,
    task: null
  }];
  currentTask: number = 0;

  constructor(private AppService: AppService) {}

  ngOnInit() {
    if (localStorage.getItem('ppCookie')) {
      localStorage.removeItem('ppCookie');
    }

    if (localStorage.getItem('tempID')) {
      localStorage.removeItem('tempID');
    }

    this.AppService.getRoute().subscribe(response => {
      this.tasks = response;

      this.setTasksStatus(this.tasks);
    });
  }

  setTasksStatus(tasks: any[]) {
    // Set Current task
    for (let i = 0 ; i < tasks.length ; i++) {
      if (tasks[i].complete != null) {
        this.currentTask = i + 1;
        tasks[i].status = 'current';
      }
    }

    // Set completed tasks
    for (let i = (this.currentTask - 1) ; i >= 0 ; i--) {
      tasks[i].status = 'completed';
    }

    // Set completed tasks
    for (let i = (this.currentTask + 1) ; i < tasks.length ; i++) {
      tasks[i].status = 'upcoming';
    }
  }
}
