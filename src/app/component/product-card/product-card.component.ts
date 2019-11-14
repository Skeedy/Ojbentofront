import {Component, Input, OnInit} from '@angular/core';
import {Assoc} from '../../class/assoc';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';
import {CartService} from '../../service/cart.service';
import {Type} from '../../class/type';
import {TypePrice} from '../../class/type-price';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() assoc: Assoc;
  @Input() type: Type;
  user: User;
  showDialog = false;
  quantity = 0;

  constructor(
      private auth: AuthService,
      private cartServ: CartService) { }

  ngOnInit() {

  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }


  getPrice(assoc: Assoc, typepricetype) {
    const prices = assoc.prices;
    const stdPrice = prices.find((price) => {
      return price.type.value === TypePrice[typepricetype];
    });
    return stdPrice ? stdPrice.value : '0,00';
  }

  rmv(assoc: Assoc) {
    this.cartServ.removeAssoc(assoc);
  }

  add(assoc: Assoc) {
    this.cartServ.addAssoc(assoc);
  }

  getQuantity(assoc: Assoc) {
      return this.cartServ.getAssocQuantity(assoc);
  }

  disabled(assoc: Assoc) {
    return this.getQuantity(assoc) === 0;
  }
}
