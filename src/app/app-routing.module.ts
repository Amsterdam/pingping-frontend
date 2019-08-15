import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './landing/index/index.component';
import { QuestionsComponent } from './application/questions/questions.component';
import { SplashScreenComponent } from './application/splash-screen/splash-screen.component';

const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'route-questionnaire', component: QuestionsComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
