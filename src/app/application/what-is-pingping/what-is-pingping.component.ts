import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-is-pingping',
  templateUrl: './what-is-pingping.component.html',
  styleUrls: ['./what-is-pingping.component.scss']
})
export class WhatIsPingpingComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private appService: AppService,
              private router: Router) { }

	ngOnInit() {
	if(localStorage.getItem('ppUserID')) {
		this.isLoggedIn = true;
	}
	}

	requestRoute(route: string) {
	if (this.isLoggedIn){
		this.router.navigate(['/route-screen']);
	} else {
		if(route == 'default') {
			localStorage.setItem('defaultRoute', '1');
		} else {
			localStorage.removeItem('defaultRoute');
		}
		this.router.navigate(['/privacy']);
	}
	}
	import() {
	this.router.navigate(['/import']);
	}
}
