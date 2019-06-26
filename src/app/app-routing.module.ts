import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainpageComponent} from './mainpage/mainpage.component';
import {AboutpageComponent} from './aboutpage/aboutpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'hakkimizda', component: AboutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
