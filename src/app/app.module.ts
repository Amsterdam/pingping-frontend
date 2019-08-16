import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './landing/components/header/header.component';
import { WhatIsItComponent } from './landing/what-is-it/what-is-it.component';
import { IndexComponent } from './landing/index/index.component';
import { SideNavComponent } from './landing/components/side-nav/side-nav.component';
import { QuestionsService } from './services/questions.service';
import { QuestionsComponent } from './application/questions/questions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SplashScreenComponent } from './application/splash-screen/splash-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatIsItComponent,
    IndexComponent,
    SideNavComponent,
    QuestionsComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
