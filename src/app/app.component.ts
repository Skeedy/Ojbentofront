import { Component, OnInit, HostListener } from '@angular/core';
import { TitleService } from './service/title.service';
import { TypeService } from './service/type.service';
import { AuthService} from './service/auth.service';
import { User } from './class/user';
import { Type } from './class/type';
import {CartService} from './service/cart.service';
import {Cart} from './class/cart';
import {Globals} from './globals';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  title = 'Restaurant';
  screenWidth: number;
  opened = false;
  user: User|null;
  types: Type[];
  cart: Cart;
  constructor(private titleService: TitleService,
              private cookieService: CookieService,
              private auth: AuthService,
              private cartServ: CartService,
              private type: TypeService,
              private router: Router) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
    this.cart = this.cartServ.cart;
  }
  ngOnInit(): void {
    this.cookieService.set( 'Test', 'Hello World' );
    this.cookieValue = this.cookieService.get('Test');
    this.titleService.init();
    this.getTypes();

  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  logout(): void {
    this.auth.logout();
  }
  getTypes() {
    this.type.getTypes().subscribe(data => {
      this.types = data;
    });
  }
  public refreshProfil() {
    localStorage.removeItem(Globals.APP_USER);
    this.auth.profile().subscribe(
        (user) => {
          this.router.navigate(['/product']);
        });
  }

}
