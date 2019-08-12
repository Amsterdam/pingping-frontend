import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { WhatIsItComponent } from './pages/what-is-it/what-is-it.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'wat-is-het', component: WhatIsItComponent },
  { path: '**', pathMatch: 'full', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
