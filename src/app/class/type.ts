import { Assoc} from './assoc';
import { Image} from './image';
import { Product} from './product';
import { Price} from './price';

export class Type {
    id: number;
    name: string;
    assocs: Assoc;
    image: Image;
    prices: Price;
}
