import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatomoModule } from 'ngx-matomo';

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
import { RouteScreenComponent } from './application/app-navigation/route-screen/route-screen.component';
import { AppNavigationComponent } from './application/app-navigation/app-navigation.component';
import { RouteConfirmationComponent } from './application/route-confirmation/route-confirmation.component';
import { TaskComponent } from './application/app-navigation/route-screen/task/task.component';
import { RewardsComponent } from './application/app-navigation/rewards/rewards.component';
import { WhatIsPingpingComponent } from './application/what-is-pingping/what-is-pingping.component';
import { RewardPopupComponent } from './application/app-navigation/rewards/reward-popup/reward-popup.component';
import { TaskPopupComponent } from './application/app-navigation/route-screen/task/task-popup/task-popup.component';
import { GoalsComponent } from './application/app-navigation/goals/goals.component';
import { CreateGoalComponent } from './application/app-navigation/goals/create-goal/create-goal.component';
import { RouteOverviewComponent } from './application/route-overview/route-overview.component';
import { AchievementsComponent } from './application/app-navigation/rewards/achievements/achievements.component';
import { DeleteDataComponent } from './application/app-navigation/more/delete-data/delete-data.component';
import { DeleteDataPopupComponent } from './application/app-navigation/more/delete-data/delete-data-popup/delete-data-popup.component';
import { MoreComponent } from './application/app-navigation/more/more.component';
import { ExportComponent } from './application/app-navigation/more/export/export.component';
import { ImportComponent } from './application/app-navigation/more/import/import.component';
import { ImportConfirmationComponent } from './application/app-navigation/more/import/import-confirmation/import-confirmation.component';
import { DeleteDataConfirmationComponent } from './application/app-navigation/more/delete-data/delete-data-confirmation/delete-data-confirmation.component';
import { PrivacyComponent } from './application/app-navigation/more/privacy/privacy.component';
import { TipsComponent } from './application/app-navigation/route-screen/task/tips/tips.component';

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
    RouteScreenComponent,
    AppNavigationComponent,
    RouteConfirmationComponent,
    TaskComponent,
    RewardsComponent,
    WhatIsPingpingComponent,
    RewardPopupComponent,
    TaskPopupComponent,
    GoalsComponent,
    CreateGoalComponent,
    RouteOverviewComponent,
    AchievementsComponent,
    DeleteDataComponent,
    DeleteDataPopupComponent,
    MoreComponent,
    ExportComponent,
    ImportComponent,
    ImportConfirmationComponent,
    DeleteDataConfirmationComponent,
    PrivacyComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    MatomoModule,
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
