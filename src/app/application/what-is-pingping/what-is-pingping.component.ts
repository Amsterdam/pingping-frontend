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

  ngOnInit() { }

  requestDefaultRoute() {
    this.appService.requestDefaultRoute().subscribe((response: any) => {
      localStorage.setItem('ppUserID', JSON.stringify(response.user_user_key.user_key));

      this.router.navigate(['/route-confirmation']);
    });
  }
}
