import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { EventHelper } from "../appHelpers/eventHelper"
import { HttpClient } from '@angular/common/http';
import { DataLoaderService } from "../services/data-loader.service"

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  public timetableData;
  public featuredEvents: any;
  public loadingData: boolean;

  @Output() timetableLoaded: EventEmitter<any> = new EventEmitter();

  constructor(
    public http: HttpClient,
    private data: DataLoaderService,
    private ref: ChangeDetectorRef) {
    this.timetableLoaded.subscribe((data) => {
      console.log('Loaded timetable')
      this.calculateFeatured();
      this.loadingData = false;
      ref.detectChanges()
    })
  }

  ngOnInit() {
    this.loadingData = true;
    this.getTimetableData();
  }

  getCurrentDate(){
    let day = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    let date = new Date();
    let suffix: string;
    let hour: number;
    if(date.getHours() >= 12){
      suffix = 'pm';
      hour = Math.abs(date.getHours() - 12);
    }
    else{
      if(date.getHours() == 0){
        hour = Math.abs(date.getHours() - 12);
      }
      else{
        hour = date.getHours();
      }
      suffix = 'am';
    }
    return {
      day: day[date.getDay()],
      hour: hour,
      suffix: suffix
    };
  }


  getTimetableData(){
    let result = [];
    this.http.get('https://api.webaddressgoeshere.com/timetable').subscribe(data => {
      let i = 0;
      for (let key in data) {
        let eventData = data[i];
        // console.log(eventData[i]);
        result.push(new EventHelper(eventData.eventName, eventData.eventDesc, eventData.eventDay, eventData.eventTime, eventData.eventLocation));
        i++
      }
      this.timetableData = result;
      this.timetableLoaded.emit('loaded');
    });

  }

  hideLoadingData(){
    this.loadingData = false;
    console.log(this.loadingData);
  }

  calculateFeatured(){
    //Create an empty array to push and pop featured events to
    let featureArray = [];

    //Create variable to get current time
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    //Create variable to store the events array
    let timetableArray = this.timetableData;

    let featureFilled = false;
    //Start time
    let startTime = currentHour;
    startTime = 12;

    while(startTime <= 24 && featureArray.length < 2){

      for(let i = 0; i < timetableArray.length; i++){
        let event = timetableArray[i];
        if((startTime.toString() === event.getTimeDetailed().hours) && event.getFeatured() != true && featureArray.length < 2){
          event.setFearured(true);
          featureArray.push(event);
        }
      }

      startTime++;

    }
    this.featuredEvents = featureArray;

  }


}
