import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  open: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('ppUserID')) {
      this.isLoggedIn = true;
    }
  }

  openDropdown() {
    if (!this.open) {
      this.open = true;
    } else {
      this.open = false;
    }
  }

  proceedRoute() {
    if (localStorage.getItem('defaultRoute')) {
      this.appService.requestDefaultRoute().subscribe((response: any) => {
        localStorage.setItem('ppUserID', JSON.stringify(response.user_user_key.user_key));

        this.router.navigate(['/route-confirmation']);
      });

    } else {
      this.router.navigate(['/route-questionnaire']);
    }
  }
}
