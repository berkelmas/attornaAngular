import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainpageComponent} from './mainpage/mainpage.component';
import {AboutpageComponent} from './aboutpage/aboutpage.component';
import {AvsinglepageComponent} from './avsinglepage/avsinglepage.component';
import {PracticespageComponent} from './practicespage/practicespage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'hakkimizda', component: AboutpageComponent},
  {path: 'av-ali-keser', component: AvsinglepageComponent},
  {path: 'uzmanlik-alanlarimiz', component: PracticespageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
