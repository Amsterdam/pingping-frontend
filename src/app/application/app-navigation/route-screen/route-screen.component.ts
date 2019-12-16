import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { Router } from '@angular/router';

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
  pendingTasks: boolean = false;

  constructor(private AppService: AppService,
              private router: Router) {}

  ngOnInit() {
	
	if(localStorage.getItem('ppUserID')) {
		if (localStorage.getItem('ppCookie')) {
			localStorage.removeItem('ppCookie');
		  }
	  
		  if (localStorage.getItem('tempID')) {
			localStorage.removeItem('tempID');
		  }
	  
		  
		  this.AppService.getRoute().subscribe(response => {
			console.log(response);
			this.tasks = response;
			this.setTasksStatus(this.tasks);
			this.pendingTasks = this.tasks.forEach(task => {
				if(task.status != 'completed') {
					return true;
				}
			});
			if(this.tasks.length == 0 || !this.pendingTasks) {
				this.router.navigate(['route-overview']);
			}
		  });
	} else {
		this.router.navigate(['welcome']);
	}
    
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

  goToTips() {
    this.router.navigate(['/tips']);
  }
}
