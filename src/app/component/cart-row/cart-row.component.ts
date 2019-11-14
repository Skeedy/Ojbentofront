import {Component, Input, OnInit} from '@angular/core';
import {CartRow} from '../../class/cart-row';
import {TypePrice} from '../../class/type-price';
import {CartService} from '../../service/cart.service';
import {Assoc} from '../../class/assoc';
import {Menu} from '../../class/menu';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.scss']
})
export class CartRowComponent implements OnInit {

  @Input() cartRow: CartRow;

  constructor(private cartServ: CartService) {
  }

  ngOnInit() {
    this.calculPrice();
  }

  private addAssoc(assoc: Assoc) {
    this.cartServ.addAssoc(assoc);
  }

  private removeAssoc(assoc: Assoc) {
    this.cartServ.removeAssoc(assoc);
  }
  private addMenu(menu: Menu) {
    this.cartServ.addMenu(menu);
  }

  private removeMenu(menu: Menu) {
    this.cartServ.removeMenu(menu);
  }
  private delete(cartRow: CartRow) {
    this.cartRow.nbCart = 1;
    if (cartRow.isMenuRow) {
      this.cartServ.removeMenu(this.cartRow.menu);
    } else {
      this.cartServ.removeAssoc(this.cartRow.assoc);
    }
  }

  private calculPrice() {
    if (this.cartRow.assoc) {
      const price = this.cartRow.assoc.prices.find((price) => {
        return price.type.value === TypePrice.Standard;
      });
      this.cartRow.priceAssoc = price.value;
    }
    if (this.cartRow.menu) {
      const price = this.cartRow.menu.prices.find((price) => {
        return price.type.value === TypePrice.Standard;
      });
      this.cartRow.priceMenu = price.value;
    }
  }

  private getPrice() {
    if (this.cartRow.assoc) {
      return this.cartRow.nbCart * parseFloat(this.cartRow.priceAssoc);
    }
    if (this.cartRow.menu) {
      return this.cartRow.nbCart * parseFloat(this.cartRow.priceMenu);
    }
  }
}
