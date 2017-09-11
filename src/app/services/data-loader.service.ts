import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataLoaderService {

  constructor(private http: HttpClient ) {
    this.http = http;
  }

  getTimetable(): any{
    this.http.get('http://localhost:9000/timetable').subscribe(data => {
      console.log(data);
      return data;
    });
  }



}

