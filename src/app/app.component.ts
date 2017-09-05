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

  constructor(dom: DomSanitizer){
    this.typescript = dom.bypassSecurityTrustHtml('<script src="https://use.typekit.net/hrn8bph.js"></script><script>try{Typekit.load({ async: true });}catch(e){}</script>')
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

}


