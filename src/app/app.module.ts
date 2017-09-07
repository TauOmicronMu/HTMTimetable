import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { EventBoxComponent } from './event-box/event-box.component';


@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    EventBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
