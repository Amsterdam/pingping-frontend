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

      // this.task.media = this.sanitizer.bypassSecurityTrustResourceUrl(this.task.media);
      this.task.media = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/jv68lO2uPUw');
    });}

  ngOnInit() {
  }
}
