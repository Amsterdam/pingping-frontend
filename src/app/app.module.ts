import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/components/header/header.component';
import { WhatIsItComponent } from './landing/what-is-it/what-is-it.component';
import { IndexComponent } from './landing/index/index.component';
import { SideNavComponent } from './landing/components/side-nav/side-nav.component';
import { RouteQuestionnaireService } from './services/route-questionnaire.service';
import { RouteQuestionnaireComponent } from './application/route-questionnaire/route-questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SplashScreenComponent } from './application/splash-screen/splash-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeScreenComponent } from './application/welcome-screen/welcome-screen.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { RouteScreenComponent } from './application/route-screen/route-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatIsItComponent,
    IndexComponent,
    SideNavComponent,
    RouteQuestionnaireComponent,
    SplashScreenComponent,
    WelcomeScreenComponent,
    RouteScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    RouteQuestionnaireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
