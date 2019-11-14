import { Assoc } from './assoc';
import { Menu } from './menu';

export class CartRow {
  static ASSOC = 'assoc';
  static MENU = 'menu';
  static TIME = 'time';

  isMenuRow: boolean;
  assoc: Assoc|null;
  menu: Menu|null;
  nbCart: number;
  priceAssoc: string;
  priceMenu: string;

}
