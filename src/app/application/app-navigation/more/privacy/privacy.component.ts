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
  defaultRoute: boolean = false;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('defaultRoute') == '1') {
      this.defaultRoute = true;
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
	if (this.defaultRoute) {
		this.appService.requestDefaultRoute().subscribe((response: any) => {
			localStorage.setItem('ppUserID', JSON.stringify(response.user_user_key.user_key));
			this.router.navigate(['/route-confirmation']);
		});
	} else {
		this.router.navigate(['route-questionnaire']);
	}
}
  
}
