import { Component, Output, EventEmitter } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  private typescript: any;

  // Header carrot
  private carrotState: boolean = false;

  // Selections
  public selectedTab: string = 'unselected';

  //Component loading
  public loadingComponent: boolean;
  @Output() componentLoaded: EventEmitter<any> = new EventEmitter();


  constructor(dom: DomSanitizer){
    this.typescript = dom.bypassSecurityTrustHtml('<script src="https://use.typekit.net/hrn8bph.js"></script><script>try{Typekit.load({ async: true });}catch(e){}</script>');
    this.componentLoaded.subscribe(data => {
      console.log('Component loaded')
    })
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
      },
      {
        text: 'API Challenges',
        link: '#api'
      },
      {
        text: 'Sponsors',
        link: '#sponsors'
      },
      {
        text: 'Challenges',
        link: '#challenges'
      },
      {
        text: 'Prizes',
        link: '#prizes'
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
    this.loadingComponent = true;
    switch (section){
      case 'timetable':
        //do something
        console.log('Is timetable');
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
      case 'challenges':
        //do something
        console.log('Is FAQ');
        this.selectedTab = section;
        break;
    }
  }

}


