import { Injectable } from '@angular/core';
import {Price} from '../class/price';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  uri = Globals.APP_API + 'price/';
  constructor(private http: HttpClient) { }


  public getPrices() {
    return this.http.get<Price[]>(`${this.uri}`);
  }
}
