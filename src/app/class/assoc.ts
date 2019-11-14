import {Product} from './product';
import {Type} from './type';
import {Price} from './price';
import {Image} from './image';
import {Allergen} from './allergen';

export class Assoc {
    id: number;
    type: Type;
    composition: string;
    description: string;
    product: Product;
    quantity: number;
    prices: Price[];
    image: Image;
    isDish: boolean;
    price: string;
    allergens: Allergen[];
    forMenu: boolean;
}
