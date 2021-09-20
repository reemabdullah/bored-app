import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Activity } from './activity.model'

@Injectable({
  providedIn: 'root'
})
export class BoredService {

  url: any = 'https://www.boredapi.com/api/activity?';

  constructor(private http: HttpClient) { }

  getResults(nbparticipants: string, minprice: string, maxprice: string): any {
    const url: string = 'https://www.boredapi.com/api/activity?participants='+nbparticipants+'&minprice='+minprice+'&maxprice='+maxprice;
    return this.http.get<Activity>(url);
  }
}
