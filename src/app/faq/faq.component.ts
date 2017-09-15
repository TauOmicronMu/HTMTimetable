import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import set = Reflect.set;
import { EventHelper } from '../appHelpers/eventHelper';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
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
export class FaqComponent implements OnInit {

  public componentState: string = 'inactive';

  public faqData: any = [];

  constructor() {

  }

  ngOnInit() {
    setTimeout(()=>{
      this.componentState = 'active';
    },500)
    this.getFAQ()
  }

  getFAQ(){
    this.faqData.push(
      new EventHelper("What is HackTheMidlands", `HackTheMidlands is a 24-hour, inclusive hackathon being hosted in Birmingham on the 23rd-24th September 2017 at Millennium Point.
Over the 24 hours, people aged 14+ of all skill levels (you don't have to be a professional or a student! Just be lovely, passionate and interested in tech!) will come together to share ideas, and create new and awesome projects! (Not sure what a hackathon is? MLH have a great explanation here).`, null, null, null, null)
    );
    this.faqData.push(
      new EventHelper("Can under 18's attend?", `YES!
As the event is being run with the intent of supporting students aged 14 and over we have taken a number of measures to ensure the safety of our participants.
All attendees under the age of 18 will require a consent form signed by their parents to be granted access to the event. A copy of this form can be found here.
You will also be required to bring along a completed medical form, which can be found here.
All attendees will be supervised by DBS-checked adults at all times and are signed in and out of the venue accordingly.
You can find our child protection policy here.`, null, null, null, null)
    );
    this.faqData.push(
      new EventHelper("Code of Conduct", `We will be following the Hack Code of Conduct, which can be found here.`, null, null, null, null)
    );
  }

}
