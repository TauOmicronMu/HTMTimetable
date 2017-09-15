import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
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
export class ChallengesComponent implements OnInit {

  public componentState: string = 'inactive';

  constructor() { }

  ngOnInit() {
    this.componentState = 'active'
  }

}
