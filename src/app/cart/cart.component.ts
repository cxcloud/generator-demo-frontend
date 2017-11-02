import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart.model';
import { CART } from '../mock/carts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart = CART;
  lineItems: Array<any>;
  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];
  totalAmount: number;

  constructor() { }

  ngOnInit() {
    this.lineItems = this.cart.lineItems;
    this.totalAmount = this.getTotalItemsAmount();
  }

  getTotalItemsAmount() {
    return this.lineItems.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);
  }

  removeLineItem(item) {
    this.lineItems = this.lineItems.filter(lineItem => lineItem !== item);
    this.totalAmount = this.getTotalItemsAmount();
  }

}
