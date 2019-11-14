import { Component, OnInit, Output } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {CartRow} from "../../class/cart-row";
import { Time } from '../../class/time';
import {TimeService} from '../../service/time.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {User} from "../../class/user";
import { State } from "../../class/state";
import {Command} from "../../class/command";
import {Router} from '@angular/router';
import {Globals} from "../../globals";



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  @Output() private rows: CartRow[];
  private times: Time[];
  private hour: Time;
  midiTime: any;
  timeSelected: any;
  user: User;
  loged: boolean;
  public loading: boolean;
  commandCheck: boolean;
  moment: string;
  menuMidi: boolean;
  test: boolean;
  selectFormControl = new FormControl('', Validators.required);
  private hourForm: FormGroup;

  constructor(private cartServ: CartService,
              private timeServ: TimeService,
              private auth: AuthService,
              private fb: FormBuilder,
              private router: Router
              ) { }

  ngOnInit() {
    const cart = this.cartServ.getCart();
    this.rows = cart.getList();
    this.getTime();
    this.isConnected();
    this.checklogin();
    this.hourForm = this.fb.group({
      horaire: [ null, Validators.required ]});
    this.checkCurrentCommand();
  }
  isConnected(): boolean {
    this.user = this.auth.currentUser;
    return this.auth.isConnected();
  }
  switchTime() {
    this.checkMenuMidi();
    if (this.moment === 'midi') {
      this.timeSelected = this.times.filter((time: Time) => {
        return time.midi;
      });
    }
    if (this.moment === 'soir') {
      this.timeSelected = this.times.filter((time: Time) => {
        return !time.midi;
      });
    }
  }
  checklogin() {
    this.loged = this.isConnected();
    return this.loged;
  }
  checkMenuMidi() {
    this.test = this.rows.filter((cartrows: CartRow) => {
      return cartrows.menu;
    }).some( (cartrows: CartRow) => {
      return cartrows.menu.isMidi;
    });
    if (this.test && this.moment === 'soir') {
      return true;
    } else {
      return false;
    }
  }
  getTime() {
    this.timeServ.getTime().subscribe(data => {
      this.times = data;
    });
  }
  checkCurrentCommand() {
    this.commandCheck = this.user.commands.filter( (command: Command) => {
      return command.state.value;
    }).some((command: Command) => {
      return command.state.value <= 2;
    });
  }
  private commander() {
    this.loading = true;
    this.cartServ.addTime(this.hour);
    this.cartServ.commander({cartrows: this.rows, requestedHour:  this.hour, price : this.cartServ.cart.getPrice() }).subscribe((data) => {
      this.router.navigate(['/command_success']);
      this.loading = false;
      localStorage.removeItem('user-cart');
          });
  }
}
