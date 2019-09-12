import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-route-overview',
  templateUrl: './route-overview.component.html',
  styleUrls: ['./route-overview.component.scss']
})
export class RouteOverviewComponent implements OnInit {
  tasks: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRoute().subscribe(response => {
      this.tasks = response;
    });
  }

}
