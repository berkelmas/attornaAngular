import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { LawwithnumbersComponent } from './lawwithnumbers/lawwithnumbers.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AboutcounterComponent } from './aboutpage/aboutcounter/aboutcounter.component';
import { AvsinglepageComponent } from './avsinglepage/avsinglepage.component';
import { PracticespageComponent } from './practicespage/practicespage.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    LawwithnumbersComponent,
    MainpageComponent,
    AboutpageComponent,
    AboutcounterComponent,
    AvsinglepageComponent,
    PracticespageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
