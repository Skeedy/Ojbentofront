import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Time} from '../class/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient) { }
  uri = Globals.APP_API + 'time/';
  public getTime() {
    return this.http.get<Time[]>(`${this.uri}`);
  }
}
