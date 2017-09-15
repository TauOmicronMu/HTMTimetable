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

  constructor() {
  }

  ngOnInit() {
    setTimeout(()=>{
      this.componentState = 'active';
    },500)
  }

  getWorkshops(){
    let workshops = [];
    for(let i = 0; i < 10; i++){
      workshops.push(new EventHelper(
        'JS Workshops',
        'In this workshops, we will introduce ES6 and all of the new features being released in the new release of JavaScript',
        'Saturday',
        '12:00',
        'Workshop Zone',
        './assets/img/workshops/js.png'
      ));
    }
    return workshops;
  }

}
