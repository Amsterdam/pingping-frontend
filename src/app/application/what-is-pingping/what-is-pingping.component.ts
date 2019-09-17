import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-is-pingping',
  templateUrl: './what-is-pingping.component.html',
  styleUrls: ['./what-is-pingping.component.scss']
})
export class WhatIsPingpingComponent implements OnInit {

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('defaultRoute')) {
      localStorage.removeItem('defaultRoute');
    }
  }

  requestDefaultRoute() {
    localStorage.setItem('defaultRoute', '1');

    this.router.navigate(['/privacy']);
  }
}
