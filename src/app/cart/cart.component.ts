import { Component, OnInit } from '@angular/core';
import { Cart } from '../types/cart.model';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.lineItems = this.cart.lineItems;
    this.getTotalItemsAmount();
  }

  getTotalItemsAmount() {
    // Get total items amount in the cart
    this.totalAmount = this.lineItems.reduce((acc, item) => {
      return acc += item.quantity;
    }, 0);
    localStorage.setItem('totalCartItems', this.totalAmount.toString());
  }

  removeLineItem(item) {
    // Remove deleted items from cart
    this.lineItems = this.lineItems
      .filter(lineItem => lineItem !== item);

    // Update total items amount in the cart
    this.getTotalItemsAmount();
  }

  goBackToHomePage() {
    this.router.navigateByUrl('/home');
  }

  updateQuantityValue(item, quantity) {
    item.quantity = quantity;
    this.getTotalItemsAmount();
  }

}
