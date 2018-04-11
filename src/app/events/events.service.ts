import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IEvent } from './events';

@Injectable()
export class EventsService {

  private eventsUrl = 'http://localhost:5000/api/events';

  constructor( private _http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this._http.get<IEvent[]>(this.eventsUrl);
  }

}