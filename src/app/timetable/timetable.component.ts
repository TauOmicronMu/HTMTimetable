import { Component, OnInit } from '@angular/core';
import { EventHelper } from "../appHelpers/eventHelper"

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.calculateFeatured();
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
      hour = date.getHours() - 12;
    }
    else{
      suffix = 'am';
      hour = date.getHours();
    }
    return {
      day: day[date.getDay()],
      hour: hour,
      suffix: suffix
    };
  }

  getTimetableData(){
    var timetableArray = new Array();
    for(let i =7; i <= 25; i++){
      let timeString = "";
      if(i < 10){
        timeString = "0"
      }
      else{
        timeString = "";
      }
      timetableArray.push(new EventHelper('Test event', 'This is an event description', timeString+i+':00', 'Main Hall'));
    }
    return timetableArray;
  }

  calculateFeatured(){
    //Create an empty array to push and pop featured events to
    let featureArray = [];

    //Create variable to get current time
    let currentTime = new Date().getHours();
    console.log(currentTime); //log this value

    //Create variable to store the events array
    let timetableArray = this.getTimetableData();

    let featureFilled = false;
    let startTime = currentTime;
    while(!featureFilled){
      //Iterate through all events
      for(let i = 0; i < timetableArray.length; i++){
        let event = timetableArray[i];
        let eventTime = event.getEventTime();
        if(eventTime.split(':')[0] === startTime.toString() && event.getFeatured() != true){
          console.log(event.getEventName());
          featureArray.push(event);
          event.setFearured(true);
        }
      }
      startTime++;
      if(startTime > 24 || featureArray.length == 2){
        featureFilled = true;
      }
    }
    console.log(featureArray);
    return featureArray;
  }

}
