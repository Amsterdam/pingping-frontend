import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: any = {
    city_points_value: null,
    conditions: null,
    description: null,
    name: null,
    steps: null
  };

  constructor(private appService: AppService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.getTask(this.route.snapshot.paramMap.get('task')).subscribe((response: any) => {
      this.task = response;
    });
  }
}
