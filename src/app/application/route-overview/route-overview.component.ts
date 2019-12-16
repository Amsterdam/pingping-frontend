import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-route-overview',
  templateUrl: './route-overview.component.html',
  styleUrls: ['./route-overview.component.scss']
})
export class RouteOverviewComponent implements OnInit {
  tasks: any[] = [];
  pendingTasks: boolean = true;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRoute().subscribe((response: any) => {
      for (let task of response) {
        if (!task.complete) {
          this.tasks.push(task);
        }
	  }
	  this.tasks.forEach(task => {
		  if (task.status != 'completed') {
			  return false;
		  }
	  });
    });
  }
}
