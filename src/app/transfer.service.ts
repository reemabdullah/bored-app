import { Injectable } from '@angular/core';

import { Activity } from './activity.model'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  data: Activity;
  private data$:Observable<Activity>
  private temp:BehaviorSubject<Activity>

  constructor() {
    this.temp = new BehaviorSubject<Activity>(this.data)
    this.data$ = this.temp.asObservable();
    this.data$.subscribe(res =>
      console.log('ici c constructor' +res)
      )
  }

  setData(data: Activity){
    this.temp.next(data);
    console.log('Data set : '+data.activity)
  }

  getDataObs() {
    console.log('Get data :' + this.data$)
    return this.data$;
  }
  
  getData() {
    return this.data;
  }
}
