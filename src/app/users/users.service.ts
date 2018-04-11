import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { IUser } from './users';

@Injectable()
export class UsersService {

  private usersUrl = 'http://localhost:5000/api/users';

  constructor( private _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.usersUrl);
  }

}