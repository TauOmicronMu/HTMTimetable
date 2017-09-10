import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-box',
  templateUrl: './event-box.component.html',
  styleUrls: ['./event-box.component.scss']
})
export class EventBoxComponent implements OnInit {

  @Input('event-name') eventName: string;
  @Input('event-desc') eventDesc: string;
  @Input('event-time') eventTime: string;
  @Input('event-location') eventLocation: string;
  @Input('event-icon') eventIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
