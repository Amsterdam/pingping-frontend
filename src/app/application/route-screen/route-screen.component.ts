import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-route-screen',
  templateUrl: './route-screen.component.html',
  styleUrls: ['./route-screen.component.scss']
})
export class RouteScreenComponent implements OnInit {
  route: any;

  constructor(private AppService: AppService) { }

  ngOnInit() {
    this.AppService.getRoute().subscribe(response => {
      this.route = response;

      console.log(this.route);
    });
  }
}
