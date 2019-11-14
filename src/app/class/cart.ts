import {Assoc} from './assoc';
import {Menu} from './menu';
import {Price} from './price';
import {CartRow} from './cart-row';
import {TypePrice} from './type-price';
import {Time} from './time';
import {Command} from "./command";


export class Cart {
    cartRows: CartRow[];
    time: Time[];
    constructor() {
        this.cartRows = [];
        this.time = [];
    }

    getList() {
        return this.cartRows;
    }
    addTime(time: Time) {
        this.time.push(time);
    }
    addMenu(menu: Menu) {
        this.addElement(CartRow.MENU, menu);
    }
    resetCart() {
        this.cartRows = [];
    }
    addAssoc(assoc: Assoc) {
        this.addElement(CartRow.ASSOC, assoc);
    }

    private addElement( elementName: string, element: Assoc|Menu) {
        let cartRow = this.cartRows.filter((cR: CartRow) => {
            return cR[elementName];
        }).find((cR: CartRow) => {
            console.log(cR[elementName].id === element.id);
            return cR[elementName].id === element.id;
        });
        if (cartRow) {
            this.cartRows.filter((cR: CartRow) => {
                return cR[elementName];
            }).map((cR: CartRow) => {
                if (cR[elementName].id === element.id) {
                    cR.nbCart += 1;
                }
                return cR;
            });
        } else {
            cartRow = new CartRow();
            cartRow[elementName] = element;
            cartRow.nbCart = 1;
            cartRow.isMenuRow = elementName === CartRow.MENU;
            this.cartRows.push(cartRow);
        }
    }

    removeMenu(menu: Menu) {
        this.removeElement(CartRow.MENU, menu);
    }

    removeAssoc(assoc: Assoc) {
        this.removeElement(CartRow.ASSOC, assoc);
    }
    private removeElement(elementName: string, element: Assoc|Menu) {

        let cartRowIndex = this.cartRows.findIndex((cartRow: CartRow) => {
            if (cartRow[elementName]) {
                return cartRow[elementName].id === element.id;
            }
            return false;
        });

        if (cartRowIndex > -1) {
            const cartRow = this.cartRows[cartRowIndex];
            cartRow.nbCart -= 1;
            if (cartRow.nbCart < 1) {
                this.cartRows.splice(cartRowIndex, 1);
            }
        }

    }

    getCartAssocQuantity(assoc: Assoc) {
        return this.getCartElementQuantity(CartRow.ASSOC, assoc);
    }

    getCartMenuQuantity(menu: Menu) {
        return this.getCartElementQuantity(CartRow.MENU, menu);
    }

    private getCartElementQuantity(elementName: string, element: Assoc|Menu) {
        const cartRow = this.cartRows.filter((cR: CartRow) => {
            return cR[elementName] !== undefined;
        }).find( (cR: CartRow) => {
            return cR[elementName].id === element.id;
        });

        return cartRow ? cartRow.nbCart : 0;
    }

    getTotalQuantity() {
        let quantityAssoc = 0;
        let quantityMenu = 0;
        this.cartRows.filter((cR: CartRow) => {
            return cR.assoc !== undefined;
        }).forEach((cartRow: CartRow) => {
            quantityAssoc += cartRow.nbCart;
        });
        this.cartRows.filter((cR: CartRow) => {
            return cR.menu !== undefined;
        }).forEach((cartRow: CartRow) => {
            quantityMenu += cartRow.nbCart;
        });
        return quantityAssoc + quantityMenu;
    }

    getPrice() {
        return this.getAssocPrice() + this.getMenuPrice();
    }

    private getAssocPrice() {
        return this.getElementPrice(CartRow.ASSOC);
    }
    private getMenuPrice() {
        return this.getElementPrice(CartRow.MENU);
    }

    private getElementPrice(elementName) {
        let price = 0;

        this.cartRows.filter((cartRow: CartRow) => {
            return cartRow[elementName] !== undefined;
        }).forEach((cartRow: CartRow) => {
            const prices = cartRow[elementName].prices;
            const selectedPrice = prices.find( (price: Price) => {
                return price.type.value === TypePrice.Standard;
            });
            const val = selectedPrice ? parseFloat(selectedPrice.value) : 0;
            price += cartRow.nbCart * val;
        });
        return price;
    }
}
