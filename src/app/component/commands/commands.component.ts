import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { Command} from '../../class/command';
import {AuthService} from '../../service/auth.service';
import {Assoc} from '../../class/assoc';
import {TypePrice} from '../../class/type-price';
import { Menu} from '../../class/menu';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {
  private user: User;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUser;
  }
  getPrice(element: Assoc|Menu, typepricetype) {
    const prices = element.prices;
    const stdPrice = prices.find((price) => {
      return price.type.value === TypePrice[typepricetype];
    });
    return stdPrice ? stdPrice.value : '0,00';
  }
}
