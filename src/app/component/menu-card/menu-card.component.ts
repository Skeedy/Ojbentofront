import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {CartService} from '../../service/cart.service';
import {Menu} from '../../class/menu';
import {TypePrice} from '../../class/type-price';
import {User} from '../../class/user';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})

export class MenuCardComponent implements OnInit {
  user: User;
  @Input() menu: Menu;
  constructor(private auth: AuthService,
              private cartServ: CartService) {
  }

  ngOnInit() {

  }

  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }


  getPrice(menu: Menu, typepricetype) {
    const prices = menu.prices;
    const stdPrice = prices.find((price) => {
      return price.type.value === TypePrice[typepricetype];
    });
    return stdPrice ? stdPrice.value : '0,00';
  }

  add(menu: Menu) {
    this.cartServ.addMenu(menu);
  }
  remove(menu: Menu) {
    this.cartServ.removeMenu(menu);
  }
  getQuantity(menu: Menu) {
    return this.cartServ.getMenuQuantity(menu);
  }

  disabled(menu: Menu) {
    return this.cartServ.getMenuQuantity(menu) === 0;
  }
}
