import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { LawwithnumbersComponent } from './lawwithnumbers/lawwithnumbers.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AboutcounterComponent } from './aboutpage/aboutcounter/aboutcounter.component';
import { AvsinglepageComponent } from './avsinglepage/avsinglepage.component';
import { PracticespageComponent } from './practicespage/practicespage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { MakalelerpageComponent } from './makalelerpage/makalelerpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SinglemakalepageComponent } from './singlemakalepage/singlemakalepage.component';
import { SinglepracticepageComponent } from './practicespage/singlepracticepage/singlepracticepage.component';

import {convertHtmlToText} from './convertHtmlToText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LawwithnumbersComponent,
    MainpageComponent,
    AboutpageComponent,
    AboutcounterComponent,
    AvsinglepageComponent,
    PracticespageComponent,
    ErrorpageComponent,
    MakalelerpageComponent,
    ContactpageComponent,
    SinglemakalepageComponent,
    SinglepracticepageComponent,

    convertHtmlToText
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
