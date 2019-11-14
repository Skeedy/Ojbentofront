import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Assoc} from '../class/assoc';

@Injectable({
  providedIn: 'root'
})
export class AssocService {

  constructor(private http: HttpClient) { }
  uri = Globals.APP_API + 'assoc/';

  public getAssocs() {
    return this.http.get(`${this.uri}`);
  }
}
