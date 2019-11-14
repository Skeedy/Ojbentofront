import { Injectable } from '@angular/core';
import {State} from "../class/state";
import {HttpClient} from "@angular/common/http";
import {Globals} from "../globals";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }
  uri = Globals.APP_API + 'state/';

  public getStates() {
    return this.http.get<State[]>(`${this.uri}`);
  }
}
