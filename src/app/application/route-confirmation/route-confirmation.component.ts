import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-confirmation',
  templateUrl: './route-confirmation.component.html',
  styleUrls: ['./route-confirmation.component.scss']
})
export class RouteConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('defaultRoute')) {
      localStorage.removeItem('defaultRoute');
    }
  }
}
