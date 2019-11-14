
import { Component, OnInit } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  CookieValue = 'UNKNOWN';
  showCookie: boolean;

  constructor(private cookieServ: CookieService, private location: Location) { }

  ngOnInit() {

    setTimeout( () => {
      this.showCookie = true;
      this.CookieValue = this.cookieServ.get('rgpd');
    }, 1500);
  }
  setCookie() {
    this.cookieServ.set('rgpd', 'true');
    this.showCookie = false;
  }
}
