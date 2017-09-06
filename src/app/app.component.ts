import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser'

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
  private selectedTab: string = 'unselected';

  constructor(dom: DomSanitizer){
    this.typescript = dom.bypassSecurityTrustHtml('<script src="https://use.typekit.net/hrn8bph.js"></script><script>try{Typekit.load({ async: true });}catch(e){}</script>')
  }


  headerFlicker(el){
    console.log('Called');
    switch (this.carrotState){
      case true:
        el.style.opacity = 0;
      case false:
        el.style.opacity = 1;
    }
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
    return "Learn, build, create";
  }

  getFeatureItems(): [{icon: string, text: string, section: string}]{
    return [
      {
        icon: '/assets/img/landing/timetable.svg',
        text: 'Timetable',
        section: 'timetable'
      },
      {
        icon: '/assets/img/landing/workshops.svg',
        text: 'Workshops',
        section: 'workshops'
      },
      {
        icon: '/assets/img/landing/faq.svg',
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


