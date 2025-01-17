import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemolibraryService {

  constructor() { }
  demolog()
  {
    console.log("libraray service file usage in angular application")
  }
}
