import { Component } from '@angular/core';
import { MatomoInjector } from 'ngx-matomo';
import { environment } from '../environments/environment.prod';

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
    this.matomoInjector.init(environment.matomoUrl, environment.matomoSiteId);
  }
}
