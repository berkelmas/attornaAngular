import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainpageComponent} from './mainpage/mainpage.component';
import {AboutpageComponent} from './aboutpage/aboutpage.component';
import {AvsinglepageComponent} from './avsinglepage/avsinglepage.component';

import {PracticespageComponent} from './practicespage/practicespage.component';
import {SinglepracticepageComponent} from './practicespage/singlepracticepage/singlepracticepage.component';

import {MakalelerpageComponent} from './makalelerpage/makalelerpage.component';
import {SinglemakalepageComponent} from './singlemakalepage/singlemakalepage.component';

import {ContactpageComponent} from './contactpage/contactpage.component';

import {ErrorpageComponent} from './errorpage/errorpage.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainpageComponent},
  {path: 'hakkimizda', component: AboutpageComponent},
  {path: 'av-ali-keser', component: AvsinglepageComponent},

  {path: 'uzmanlik-alanlarimiz', component: PracticespageComponent},
  {path: 'singlepracticepage', component: SinglepracticepageComponent},

  {path: 'hukuki-yayinlar', component: MakalelerpageComponent},
  {path: 'singlemakalepage', component: SinglemakalepageComponent},

  {path: 'iletisim', component: ContactpageComponent},

  {path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
