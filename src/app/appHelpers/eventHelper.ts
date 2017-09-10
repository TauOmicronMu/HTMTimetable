export class EventHelper{

  private featured: boolean = false;
  constructor(
    private eventName: string,
    private eventDesc: string,
    private eventTime: string,
    private eventLocation: string,
    private eventIcon: string = null
  ){
    this.eventName = eventName;
    this.eventDesc = eventDesc;
    this.eventTime = eventTime;
    this.eventLocation = eventLocation;
    this.eventIcon = eventIcon;
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

  setEventIcon(icon){
    this.eventIcon = icon;
  }

  getEventIcon(){
    return this.eventIcon;
  }

  setFearured(value){
    this.featured = value;
  }

  getFeatured(){
    return this.featured;
  }

}
