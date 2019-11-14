import { filter } from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, Scroll } from '@angular/router';
import {Assoc} from '../../class/assoc';
import {TypeService} from '../../service/type.service';
import {AuthService} from '../../service/auth.service';
import {User} from '../../class/user';
import {CartService} from '../../service/cart.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  assocByTypes: any;


  constructor(
      private typeService: TypeService,
      private router: Router,
      private http: HttpClient
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAssocs();
    }, 1000);
    this.router.events.pipe(filter(element => element instanceof Scroll)).subscribe((element: any) => {
      if (element.anchor && document.getElementById(element.anchor) ) {
        document.getElementById(element.anchor).scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  getAssocs() {
    this.typeService.getAssocsByType()
      .subscribe((data: any) => {
        this.assocByTypes = data;

      });
  }

}
