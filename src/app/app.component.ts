import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ping-ping';

  constructor(
    private matomoInjector: MatomoInjector
  ) {
	if(environment.production){
		this.matomoInjector.init(environment.matomoUrl, environment.matomoSiteId);
	}
  }
}
