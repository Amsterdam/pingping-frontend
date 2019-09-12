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
import { AppNavigationComponent } from './application/app-navigation/app-navigation.component';
import { RouteConfirmationComponent } from './application/route-confirmation/route-confirmation.component';
import { TaskComponent } from './application/task/task.component';
import { RewardsComponent } from './application/rewards/rewards.component';
import { WhatIsPingpingComponent } from './application/what-is-pingping/what-is-pingping.component';
import { RewardPopupComponent } from './application/reward-popup/reward-popup.component';
import { TaskPopupComponent } from './application/task-popup/task-popup.component';
import { GoalsComponent } from './application/goals/goals.component';
import { CreateGoalComponent } from './application/create-goal/create-goal.component';
import { RouteOverviewComponent } from './application/route-overview/route-overview.component';
import { AchievementsComponent } from './application/achievements/achievements.component';
import { DeleteDataComponent } from './application/delete-data/delete-data.component';
import { DeleteDataPopupComponent } from './application/delete-data-popup/delete-data-popup.component';
import { MoreComponent } from './application/more/more.component';
import { ExportComponent } from './application/export/export.component';
import { ImportComponent } from './application/import/import.component';
import { ImportConfirmationComponent } from './application/import-confirmation/import-confirmation.component';

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
    ImportConfirmationComponent
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
