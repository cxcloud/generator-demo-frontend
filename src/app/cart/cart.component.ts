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
  columns: Array<string> = ['Description', 'Quantity', 'Price', 'Total'];
  totalAmount: number;

  constructor() { }

  ngOnInit() {
    this.totalAmount = this.getTotalItemsAmount();
  }

  getTotalItemsAmount() {
    return this.cart.lineItems.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);
  }

}
