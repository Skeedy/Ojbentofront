import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Globals} from '../../globals';
import {Cart} from '../../class/cart';
import {CartService} from '../../service/cart.service';

@Component({
  selector: 'app-command-success',
  templateUrl: './command-success.component.html',
  styleUrls: ['./command-success.component.scss']
})
export class CommandSuccessComponent implements OnInit {

  constructor(private auth: AuthService,
              private cartServ: CartService) { }

  ngOnInit() {
    this.refreshProfil();
    this.cartServ.resetCart();
  }
  private refreshProfil() {
    localStorage.removeItem('user-cart');
    localStorage.removeItem(Globals.APP_USER);
    this.auth.profile().subscribe();
  }
}
