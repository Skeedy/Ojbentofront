import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {CartService} from '../../service/cart.service';
import {CartRow} from '../../class/cart-row';
import {Assoc} from '../../class/assoc';
import {Menu} from '../../class/menu';
import {Type} from '../../class/type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ]),
    trigger('allergens', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() assoc: Assoc;
  @Input() cartRow: CartRow;
  @Input() type: Type;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cartServ: CartService) { }

  ngOnInit() {
    //console.log(this.assoc);
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
