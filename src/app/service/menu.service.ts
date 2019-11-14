import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
import { Menu } from '../class/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  uri = Globals.APP_API + 'menu/';

  public getMenus() {
    return this.http.get<Menu[]>(`${this.uri}`);
  }
}
