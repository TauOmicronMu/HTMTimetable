import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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

  getTimetableData(): [{event: string, location: string, time: string}]{
    return [
      {
        event: 'Hacking Starts',
        location: 'Main Hall',
        time: '12:00'
      },
      {
        event: 'Hacking Starts',
        location: 'Main Hall',
        time: '12:00'
      },
      {
        event: 'Hacking Starts',
        location: 'Main Hall',
        time: '12:00'
      },
      {
        event: 'Hacking Starts',
        location: 'Main Hall',
        time: '12:00'
      }
    ];
  }

}
