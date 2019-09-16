import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('ppUserID')) {
      this.isLoggedIn = true;
    }
  }
}
