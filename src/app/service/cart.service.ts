import { Injectable } from '@angular/core';
import {Cart} from '../class/cart';
import {Assoc} from '../class/assoc';
import {Globals} from '../globals';
import {Menu} from '../class/menu';
import {HttpClient} from '@angular/common/http';
import { Time } from '../class/time';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private uri = Globals.APP_API + 'command/new';
  public cart: Cart;
  constructor(private http: HttpClient) {
    this.cart = new Cart();
    const cartStrorage = JSON.parse(localStorage.getItem(Globals.APP_CART));
    this.cart = Object.assign(this.cart, cartStrorage);
  }

  getAssocQuantity(assoc: Assoc) {
    return this.cart.getCartAssocQuantity(assoc);
  }

  getMenuQuantity(menu: Menu) {
    return this.cart.getCartMenuQuantity(menu);
  }

  getCart() {
    return this.cart;
  }
  addTime(time: Time) {
    this.cart.addTime(time);
    this.storageCart();
  }
  addAssoc(assoc: Assoc) {
    this.cart.addAssoc(assoc);
    this.storageCart();
  }
  resetCart() {
    this.cart.resetCart();
  }
  addMenu(menu: Menu) {
    this.cart.addMenu(menu);
    this.storageCart();
  }

  removeAssoc(assoc: Assoc) {
    this.cart.removeAssoc(assoc);
    this.storageCart();
  }
  removeMenu(menu: Menu) {
    this.cart.removeMenu(menu);
    this.storageCart();
  }

  private storageCart() {
    localStorage.setItem(Globals.APP_CART, JSON.stringify(this.cart));
  }

  commander(data) {
    return this.http.post(this.uri, data);
  }
}
