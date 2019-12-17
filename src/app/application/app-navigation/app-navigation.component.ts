import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-app-navigation',
	templateUrl: './app-navigation.component.html',
	styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent implements OnInit {
	isLoggedIn: boolean = false;
	pendingTasks: boolean = false;

	constructor(
		private appService: AppService,
		private router: Router
	) {
		this.appService.getRoute().subscribe((response: any) => {
			for (let task of response) {
				if (!task.complete) {
					this.pendingTasks = true;
				}
			}
		});
	}

	ngOnInit() {
		if (localStorage.getItem('ppUserID')) {
			this.isLoggedIn = true;
		}
	}
	redirectTo(url: string) {
		if (this.pendingTasks == true) {
			this.router.navigate([url])
		} else {
			if (url == 'route-screen') {
				this.router.navigate(['route-overview']);
			} else {
				this.router.navigate([url]);
			}
		}
	}
}
