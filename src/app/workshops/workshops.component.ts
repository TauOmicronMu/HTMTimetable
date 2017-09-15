import { Component, OnInit } from '@angular/core';
import { EventHelper } from '../appHelpers/eventHelper'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
  animations: [
    trigger('componentInit', [
      state('inactive', style({
        opacity: 0,
      })),
      state('active', style({
        opacity: 1,
      })),
      transition('inactive => active', animate('300ms ease-in')),
      transition('active => inactive', animate('300ms ease-out'))
    ])
  ]
})
export class WorkshopsComponent implements OnInit {

  public componentState: string = 'inactive';
  public data: any;
  public workshops: any = [];

  constructor() {
    this.data = [
      {
        title: 'Intro to Web VR Games',
        desc:  'A beginner friendly introduction to what WebVR is and how to build games using A-Frame',
        day: 'Saturday',
        time: new Date('Saturday 23 September 15:00 2017'),
        icon:  './assets/img/workshops/samsung.png',
        location:  'Workshop Room',

      },
      {
        title: 'Getting Started with the Nexmo Voice API',
        desc:  "Learn the concepts of the Nexmo Voice API and how to build your first application, along with seeing some of the more advanced features that are available such as Websockets",
        day: 'Saturday',
        time: new Date('Saturday 23 September 16:00 2017'),
        icon:  './assets/img/workshops/nexmo.png',
        location:  'Workshop Room',

      },
      {
        title: 'Introduction to Node-RED',
        desc:  'A beginner friendly introduction to what WebVR is and how to build games using A-Frame',
        day: 'Saturday',
        time: new Date('Saturday 23 September 16:00 2017'),
        icon:  './assets/img/workshops/ibm.png',
        location:  'Workshop Room',

      },
      {
        title: 'Newbies guide to APIs',
        desc:  'In this workshop, we will run through containerisation, the idea of Cattle vs Pets, and give a brief intro to Docker by building our own images, running them, and then sharing them with each other',
        day: 'Saturday',
        time: new Date('Saturday 23 September 16:00 2017'),
        location:  'Workshop Room',
      },
      {
        title: 'Opportunities in open source for open science – what, why and how?',
        desc:  'The way that scientific research is shared and evaluated still bears the legacy of a system based around print media. New technologies in the digital era present a huge opportunity to accelerate discovery and make science collaborative instead of competitive. Come to the eLife workshop to learn more about how open-source development is being applied to scientific research, the issues we face when bringing cutting-edge technology to the science publishing world, and to develop ideas for solutions that you could prototype at this hackathon and beyond.',
        day: 'Saturday',
        time: new Date('Saturday 23 September 16:00 2017'),
        location:  'Workshop Room',
      },
      {
        title: 'Intro to web dev',
        desc:  'The way that scientific research is shared and evaluated still bears the legacy of a system based around print media. New technologies in the digital era present a huge opportunity to accelerate discovery and make science collaborative instead of competitive. Come to the eLife workshop to learn more about how open-source development is being applied to scientific research, the issues we face when bringing cutting-edge technology to the science publishing world, and to develop ideas for solutions that you could prototype at this hackathon and beyond.',
        day: 'Saturday',
        time: new Date('Saturday 23 September 15:00 2017'),
        location:  'Workshop Room',
      },
      {
        title: 'Intro to Git/Github',
        desc:  'The way that scientific research is shared and evaluated still bears the legacy of a system based around print media. New technologies in the digital era present a huge opportunity to accelerate discovery and make science collaborative instead of competitive. Come to the eLife workshop to learn more about how open-source development is being applied to scientific research, the issues we face when bringing cutting-edge technology to the science publishing world, and to develop ideas for solutions that you could prototype at this hackathon and beyond.',
        day: 'Saturday',
        time: new Date('Saturday 23 September 14:00 2017'),
        icon:  './assets/img/workshops/git.png',
        location:  'Workshop Room',
      },
      {
        title: 'Intro to Nexmo voice API',
        desc:  'Learn the concepts of the Nexmo Voice API and how to build your first application, along with seeing some of the more advanced features that are available such as Websockets',
        day: 'Saturday',
        time: new Date('Saturday 23 September 17:00 2017'),
        icon:  './assets/img/workshops/git.png',
        location:  'Workshop Room',
      }
    ]
  }

  ngOnInit() {
    this.getWorkshops();
    setTimeout(()=>{
      this.getWotrkshopHeight()
      this.componentState = 'active';
    },500)
  }

  getWorkshops(){
    for(let i = 0; i < this.data.length; i++){
      this.workshops.push(new EventHelper(
        this.data[i].title,
        this.data[i].desc,
        this.data[i].day,
        this.data[i].time,
        this.data[i].location,
        this.data[i].icon
      ));
    }
    // return workshops;
  }

  getWotrkshopHeight(){
    let tiles: any = document.getElementsByClassName('event-box');
    let max = 0;
    for(let i = 0; i < this.workshops.length; i++){
      //console.log(tiles[i].scrollHeight);
      if(tiles[i].scrollHeight > max){
        max = tiles[i].scrollHeight;
      }
    }
    console.log(max);
    for(let e = 0; e < this.workshops.length; e++){
      tiles[e].style.height = `${max - 44}px`;
    }
  }

}
