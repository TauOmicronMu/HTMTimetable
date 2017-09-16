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

  public challengeData: any = [];

  constructor() {
    this.challengeData = [
      {
        name: 'Transform science on the web',
        sponsor: 'eLife',
        sponsorLogo: './assets/img/sponsors/elife.jpg',
        api: 'API name',
        desc: 'Scientists share their findings through publications – often behind a paywall and in a format that can often make it difficult to track down and reuse the raw data behind key assertions. This makes it hard to understand, reproduce and build on results as a community, which should be the foundation for the best science and progress. At eLife, we work to bring the power of digital technology to science publishing, to promote collaboration, transparency and openness in research – and we’d like your help! We are looking for new tools or technologies that improve the discovery, sharing, consumption and evaluation of life sciences and biomedical research. This is your chance to get involved in a movement to transfer science from a closed-access, commercially-governed system to a more open, transparent and collaborative web – help us make science open source with your hack at Hack the Midlands. Members of the winning team will each receive a £100 voucher for Pimoroni.com, a copy of ‘Reinventing Discovery’ and an invitation to attend a mentorship day at eLife. Hackers are encouraged to build on any available API and to be imaginative with the services they integrate into their hack – discover our open-source resources and API at developers.elifesciences.org.'
      },
      {
        name: 'Best use of Nexmo API',
        sponsor: 'Nexmo',
        sponsorLogo: './assets/img/sponsors/nexmo.png',
        api: 'https://www.nexmo.com/ (coupon code on day)',
        desc: 'This is a description'
      },
      {
        name: 'Make a public, government or open data set searchable',
        sponsor: 'Algolia',
        sponsorLogo: './assets/img/sponsors/aloglia.jpeg',
        api: 'https://www.algolia.com/doc/',
        desc: 'This is a description'
      },
      {
        name: 'Best Mashup incorporating the Majestic API',
        sponsor: 'Majestic',
        sponsorLogo: './assets/img/sponsors/majestic.png',
        api: 'https://majestic.com/',
        desc: 'This is a description'
      },
      {
        name: 'The best hack that combines multiple independent services in an ingenious way',
        sponsor: 'Vanti',
        sponsorLogo: './assets/img/sponsors/vanti.png',
        api: 'https://www.vanti.co.uk/',
        desc: 'This is a description'
      }
    ]
    setTimeout(()=>{
      this.componentState = 'active';
    },500)
  }

  ngOnInit() {

  }

  getChallenges(){
  }

}
