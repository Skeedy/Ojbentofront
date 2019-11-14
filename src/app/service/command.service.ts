import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {Command} from '../class/command';
import { Assoc} from '../class/assoc';
import { Menu } from '../class/menu';
import { User} from '../class/user';


@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }
  uri = Globals.APP_API;

  public getCommands(id: User) {
    return this.http.get(`${this.uri}user/${id}/commands`);
  }

  deleteCommand(id: number) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
  updateCommand(id: number, assoc: Assoc, menu: Menu) {
    const data = { assoc, menu};
    return this.http.put(`${this.uri}/edit/${id}`, data);
  }
}
