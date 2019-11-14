import {Assoc} from './assoc';
import {Price} from './price';

export class Menu {
    id: number;
    name: string;
    assocs: Assoc[];
    prices: Price[];
    isMidi: boolean;
    price: string;
}
