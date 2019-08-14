import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './landing/index/index.component';
import { WhatIsItComponent } from './landing/what-is-it/what-is-it.component';
import { QuestionsComponent } from './application/questions/questions.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'wat-is-het', component: WhatIsItComponent },
  { path: 'route-questionnaire', component: QuestionsComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
