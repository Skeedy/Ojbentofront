import {Assoc} from './assoc';
import {Price} from './price';
import {Image} from './image';

export class Menu {
    id: number;
    name: string;
    assocs: Assoc[];
    prices: Price[];
    isMidi: boolean;
    price: string;
    image: Image;
}
