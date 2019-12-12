import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

  isLoggedIn: boolean = false;	
  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('defaultRoute')) {
      localStorage.removeItem('defaultRoute');
	}
	
	if( localStorage.getItem('ppUserID')){
		this.isLoggedIn = true;
	}
  }

  requestRoute() {
	localStorage.setItem('defaultRoute', '1');
	if (this.isLoggedIn){
		this.router.navigate(['/route-screen']);
	} else {
		this.router.navigate(['/privacy']);
	}
    
  }

  import() {
    this.router.navigate(['/import']);
  }
}
