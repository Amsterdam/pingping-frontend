import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task: any = {
    id: null,
    city_points_value: null,
    description: null,
    name: null,
    media: null,
    steps: null
  };

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {
    this.appService.getTask(this.route.snapshot.paramMap.get('task')).subscribe((response: any) => {
      this.task = response;

      this.task.media = this.sanitizer.bypassSecurityTrustResourceUrl(response.media);
    });}

  ngOnInit() {
  }

  completeTask() {
    this.appService.completeTask(this.task.id).subscribe(response => {
      console.log(response);
    });
  }
}
