export class EventHelper{

  private featured: boolean = false;
  constructor(
    private eventName: string,
    private eventDesc: string,
    private eventDay: string,
    private eventTime: string,
    private eventLocation: string,
    private eventIcon: string = null
  ){
    this.eventName = eventName;
    this.eventDesc = eventDesc;
    this.eventDay = eventDay;
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

  getEventDay(){
    return this.eventDay;
  }

  getEventTime(){
    let tmpTime = this.eventTime.split(" ");
    let day = tmpTime[0];
    let time = tmpTime[4];
    return `${day}  ${time}`;
  }

  getTimeDetailed(){
    let eventTime = new Date(this.eventTime);
    let hours = eventTime.getHours().toString();
    if(eventTime.getHours() < 10){
      hours = '0' + hours;
    }
    let time = {
      day: eventTime.getDay(),
      hours: hours
    }
    return time;
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
