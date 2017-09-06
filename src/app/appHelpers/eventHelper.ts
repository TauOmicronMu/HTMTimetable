export class EventHelper{

  private featured: boolean = false;

  constructor(
    private eventName: string,
    private eventDesc: string,
    private eventTime: string,
    private eventLocation: string
  ){
    this.eventName = eventName;
    this.eventDesc = eventDesc;
    this.eventTime = eventTime;
    this.eventLocation = eventLocation;
  }

  getEventName(){
      return this.eventName
  }

  getEventDesc(){
    return this.eventDesc;
  }

  getEventTime(){
    return this.eventTime;
  }

  getEventLocation(){
    return this.eventLocation;
  }

  setFearured(value){
    this.featured = value;
  }

  getFeatured(){
    return this.featured;
  }

}
