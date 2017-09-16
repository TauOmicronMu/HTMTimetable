import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-tile-popup',
  templateUrl: './tile-popup.component.html',
  styleUrls: ['./tile-popup.component.scss']
})
export class TilePopupComponent implements OnInit {

  @Input('event-name') eventName: string;
  @Input('event-desc') eventDesc: string;
  @Input('event-time') eventTime: string;
  @Input('event-location') eventLocation: string;
  @Input('event-icon') eventIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
