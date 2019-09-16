import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss']
})
export class WelcomeScreenComponent implements OnInit {

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

  import() {
    this.router.navigate(['/import']);
  }
}
