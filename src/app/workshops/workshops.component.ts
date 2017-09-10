import { Component, OnInit } from '@angular/core';
import { EventHelper } from '../appHelpers/eventHelper'

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getWorkshops(){
    let workshops = [];
    for(let i = 0; i < 10; i++){
      workshops.push(new EventHelper(
        'JS Workshops',
        'In this workshops, we will introduce ES6 and all of the new features being released in the new release of JavaScript',
        '12:00',
        'Workshop Zone',
        '/assets/img/workshops/js.png'
      ));
    }
    return workshops;
  }

}
