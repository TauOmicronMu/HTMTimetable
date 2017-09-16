import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { DataLoaderService } from "./services/data-loader.service"
import { } from './services/event-emmitter/event-emmitter.service';

import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { EventBoxComponent } from './event-box/event-box.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { FaqComponent } from './faq/faq.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { TilePopupComponent } from './tile-popup/tile-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    EventBoxComponent,
    WorkshopsComponent,
    FaqComponent,
    ChallengesComponent,
    TilePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DataLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
