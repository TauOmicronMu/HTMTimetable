import { Component, OnInit } from '@angular/core';
import { EventHelper } from "../appHelpers/eventHelper"
import { HttpClient } from '@angular/common/http';
import { DataLoaderService } from "../services/data-loader.service"

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  public timetableData: any;

  constructor(public http: HttpClient, private data: DataLoaderService) { }

  ngOnInit() {
    this.calculateFeatured();
    this.getTimetableData()
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
    let result = [];
    this.http.get('http://localhost:9000/timetable').subscribe(data => {
      console.log(data);
      let i = 0;
      for (let key in data) {
        let eventData = data[i];
        // console.log(eventData[i]);
        result.push(new EventHelper(eventData.eventName, eventData.eventDesc, eventData.eventDay, eventData.eventTime, eventData.eventLocation));
        i++
      }
      this.timetableData = result;
    });


    // this.loadTimetableData()
    //   .then((data) => {
    //     console.log('Data:');
    //     console.log(data);
    //   });
    // for(let i =7; i <= 25; i++){
    //   let timeString = "";
    //   if(i < 10){
    //     timeString = "0"
    //   }
    //   else{
    //     timeString = "";
    //   }
    //   timetableArray.push(new EventHelper('Test event', 'This is an event description', 'Saturday', timeString+i+':00', 'Main Hall'));
    // }

  }

  calculateFeatured(){
    // //Create an empty array to push and pop featured events to
    // let featureArray = [];
    //
    // //Create variable to get current time
    // let currentTime = new Date().getHours();
    // // console.log(currentTime); //log this value
    //
    // //Create variable to store the events array
    // let timetableArray = this.getTimetableData();
    //
    // let featureFilled = false;
    // let startTime = currentTime;
    // while(!featureFilled && timetableArray.length > 0){
    //   //Iterate through all events
    //   for(let i = 0; i < timetableArray.length; i++){
    //     let event = timetableArray[i];
    //     let eventTime = event.getEventTime();
    //     if(eventTime.split(':')[0] === startTime.toString() && event.getFeatured() != true){
    //       console.log(event.getEventName());
    //       featureArray.push(event);
    //       event.setFearured(true);
    //     }
    //   }
    //   startTime++;
    //   if(startTime > 24 || featureArray.length == 2){
    //     featureFilled = true;
    //   }
    // }
    // console.log(featureArray);
    // return featureArray;
  }


}
