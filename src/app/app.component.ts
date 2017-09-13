import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('componentFade', [
      state('inactive', style({
        opacity: 0
      })),
      state('active', style({
        opacity: 1
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent {

  title = 'app';
  private typescript: any;

  // Header carrot
  private carrotState: boolean = false;

  // Selections
  public selectedTab: string = 'unselected';
  public showTimetable: string = 'inactive';

  constructor(dom: DomSanitizer){
    this.typescript = dom.bypassSecurityTrustHtml('<script src="https://use.typekit.net/hrn8bph.js"></script><script>try{Typekit.load({ async: true });}catch(e){}</script>');
  }


  getNavItems():[{text: string, link: string}]{
    return [
      {
        text: 'Timetable',
        link: '#timetable'
      },
      {
        text: 'Workshops',
        link: '#workshops'
      },
      {
        text: 'FAQ',
        link: '#faq'
      }
    ]
  }

  getHeaderTitle(): string{
    return "Learn, build, share";
  }

  getFeatureItems(): [{icon: string, text: string, section: string}]{
    return [
      {
        icon: './assets/img/landing/timetable.svg',
        text: 'Timetable',
        section: 'timetable'
      },
      {
        icon: './assets/img/landing/workshops.svg',
        text: 'Workshops',
        section: 'workshops'
      },
      {
        icon: './assets/img/landing/faq.svg',
        text: 'FAQ',
        section: 'faq'
      },
    ]
  }

  selectSection(section){
    switch (section){
      case 'timetable':
        //do something
        console.log('Is timetable');
        this.showTimetable = 'active';
        this.selectedTab = section;

        break;
      case 'workshops':
        //do something else
        console.log('Is workshop');
        this.selectedTab = section;
        break;
      case 'faq':
        //do something
        console.log('Is FAQ');
        this.selectedTab = section;
        break;
    }
  }

}


