import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './landing/index/index.component';
import { RouteQuestionnaireComponent } from './application/route-questionnaire/route-questionnaire.component';
import { SplashScreenComponent } from './application/splash-screen/splash-screen.component';
import { WelcomeScreenComponent } from './application/welcome-screen/welcome-screen.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'what-is-pingping', component: RouteQuestionnaireComponent },
  { path: 'route-questionnaire', component: RouteQuestionnaireComponent },
  { path: 'route-questionnaire/:questionPosition', component: RouteQuestionnaireComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
