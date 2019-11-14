import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';
import {MenuService} from '../../service/menu.service';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, tap} from 'rxjs/operators';
import {Menu} from '../../class/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  uri = Globals.APP_API + 'menu/';
  menus: Menu[];

  constructor(private menuService: MenuService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenus().subscribe(data => {
      this.menus = data;
    });
  }

}
